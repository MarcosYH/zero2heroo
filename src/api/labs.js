import axios from "axios";

const API_URL = " https://backend-zro2hero.vercel.app/labs";

export const getLabsCount = async () => {
  const response = await axios.get(`${API_URL}/count`);
  console.log(response);
  return response.data.labsCount;
};
