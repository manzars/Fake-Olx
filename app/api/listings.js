import client from "./client";

const endpoint = "/listings.json";

const getListings = () => client.get(endpoint);

export default {
  getListings,
};
