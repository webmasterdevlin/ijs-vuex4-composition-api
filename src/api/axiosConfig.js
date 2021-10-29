import axios from "axios";

const baseURL = "/api/";
const api = axios.create({ baseURL });

export async function get(path) {
  return await api.get(path);
}

export async function deleteById(path, id) {
  return await api.delete(`${path}/${id}`);
}
