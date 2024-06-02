import axios from "axios";

const API_URL = ' https://backend-zro2hero.vercel.app/parcours';

export const getPathCount = async () => {
  const response = await axios.get(`${API_URL}/count`);
  console.log(response);
  return response.data.parcoursCount;
};
