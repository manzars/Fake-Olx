import { create } from "apisauce";

const apiAuthClient = create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
});

const addUserClient = create({
  baseURL: "https://fake-olx.firebaseio.com",
});

const login = (email, password) => {
  const data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  let url =
    "/accounts:signInWithPassword?key=AIzaSyDNGJEr23_k_doOvCcjXWt6UMohpS9c6fs";

  return apiAuthClient.post(url, data);
};

const register = (name, email, password) => {
  const data = {
    email: email,
    password: password,
    returnSecureToken: true,
  };
  let url = "/accounts:signUp?key=AIzaSyDNGJEr23_k_doOvCcjXWt6UMohpS9c6fs";

  return apiAuthClient.post(url, data);
};

const addUser = (token, localId, name) => {
  const data = {
    name: name,
    localId: localId,
  };
  return addUserClient.post("/users.json?auth=" + token, data);
};

export default {
  login,
  register,
  addUser,
};
