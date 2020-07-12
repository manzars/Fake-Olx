import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://fake-olx.firebaseio.com/api",
});

export default apiClient;

// const jacket =
//       "https://firebasestorage.googleapis.com/v0/b/fake-olx.appspot.com/o/assets%2Fjacket.jpg?alt=media&token=77c5aa70-fb40-4977-b82a-1f2f7c645eb0";
//     const couch =
//       "https://firebasestorage.googleapis.com/v0/b/fake-olx.appspot.com/o/assets%2Fcouch.jpg?alt=media&token=d828163d-2130-4d43-8ce4-ab37d09adc6b";
//     const dummObj = [
//       {
//         id: 1,
//         title: "Red Jacket",
//         images: [
//           {
//             url: jacket,
//             thumbnailUrl: jacket,
//           },
//         ],
//         price: 999,
//         categoryId: 5,
//         userId: 1,
//         location: {
//           latitude: 37.78825,
//           longitude: -122.4324,
//         },
//       },
//       {
//         id: 2,
//         title: "Grey Couch",
//         images: [
//           {
//             url: couch,
//             thumbnailUrl: couch,
//           },
//         ],
//         price: 9999,
//         categoryId: 5,
//         userId: 1,
//         location: {
//           latitude: 37.78825,
//           longitude: -122.4324,
//         },
//       },
//       {
//         id: 3,
//         title: "Red Jacket",
//         images: [
//           {
//             url: jacket,
//             thumbnailUrl: jacket,
//           },
//         ],
//         price: 999,
//         categoryId: 5,
//         userId: 1,
//         location: {
//           latitude: 37.78825,
//           longitude: -122.4324,
//         },
//       },
//       {
//         id: 4,
//         title: "Grey Couch",
//         images: [
//           {
//             url: couch,
//             thumbnailUrl: couch,
//           },
//         ],
//         price: 9999,
//         categoryId: 5,
//         userId: 1,
//         location: {
//           latitude: 37.78825,
//           longitude: -122.4324,
//         },
//       },
//     ];
