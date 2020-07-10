import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://fake-olx.firebaseio.com/api",
});

export default apiClient;
