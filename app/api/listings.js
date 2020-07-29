import client from "./client";
import { create } from "apisauce";
import uuid from "react-native-uuid";
import { useContext } from "react";
import AuthContext from "../auth/context";

const endpoint = "/listings.json";

const userClient = create({
  baseURL: "https://fake-olx.firebaseio.com",
});

const getListings = (token, url = endpoint) => {
  return client.get(url + "?auth=" + token);
};

const getUsers = (token, url) => {
  return userClient.get(url + "?auth=" + token);
};

const addListing = (listing, onUploadProgress) => {
  console.log(listing);
  let images = [];
  let imageUrls = [];
  let location = null;
  listing.imageUrl.forEach((image, index) => {
    imageUrls.push(image);
  });
  images.push({ thumbnailUrl: listing.imageUrl[0], url: imageUrls });

  if (listing.location) {
    location = {
      longitude: listing.location.longitude,
      latitude: listing.location.latitude,
    };
  }

  let postData = {
    id: uuid.v1(),
    userId: 1,
    title: listing.title,
    price: parseInt(listing.price),
    categoryId: listing.category.value,
    description: listing.description,
    images: images,
    location: location,
  };

  return client.post(endpoint, postData, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
  getUsers,
};
