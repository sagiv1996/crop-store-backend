////////////////////////
import { getDistance } from "geolib";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");

    const extension = ({ nexus }) => ({
      types: [
        nexus.extendType({
          type: "Store",
          definition: (t) => {
            t.float("distance"); // Add the 'distance' field to the Store type
          },
        }),
      ],
    });

    strapi.plugin("graphql").service("extension").use(extension);

    extensionService.use(({ strapi }) => ({}));

    extensionService.use(({ strapi }) => ({
      typeDefs: `
      type Query {
          stores(lat: Float!, lng: Float!): StoreEntityResponseCollection
        }
        `,
      resolvers: {
        Query: {
          stores: {
            resolve: async (parent, args, context) => {
              const { lat, lng } = args;
              const { toEntityResponseCollection } = strapi
                .plugin("graphql")
                .service("format").returnTypes;

              const data = await strapi.services["api::store.store"].find();

              for (const result of data.results) {
                const distance = getDistance(
                  { lat, lng },
                  {
                    lat: Number(result.location.lat),
                    lng: Number(result.location.lng),
                  }
                );
                result.distance = distance;
              }
              data.results.sort((a, b) => a.distance - b.distance);
              const result = toEntityResponseCollection(data.results);

              return result;
            },
          },
        },
      },
    }));
    extensionService.use(extensionService);
  },
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
