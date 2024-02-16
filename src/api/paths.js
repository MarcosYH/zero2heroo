import axios from "axios";

const API_URL = 'http://localhost:3000/parcours';

export const getPathCount = async () => {
  const response = await axios.get(`${API_URL}/count`);
  console.log(response);
  return response.data.parcoursCount;
};
