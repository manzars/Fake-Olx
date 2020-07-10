import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://fake-olx.firebaseio.com/api",
});

listingObject = {
  name: "manzar",
  age: 16,
  sex: "M",
};

apiClient.post(listingObject).then((res) => console.log(res.data));
