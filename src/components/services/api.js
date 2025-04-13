import axios from "axios";

const BASE_URL = "https://67f7e4c62466325443eb2b6a.mockapi.io";
axios.defaults.baseURL = BASE_URL;

export const requestContacts = async () => {
  const response = await axios.get("/contacts");
  return response;
};

export const addItem = async (contact) => {
  const response = await axios.post("/contacts", contact);
  return response;
};

export const deleteItem = async (id) => {
  const url = `/contacts/${id}`;
  const response = await axios.delete(url);
  return response;
};
