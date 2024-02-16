
import axios from "axios";

const API_URL = 'http://localhost:3000/labs';

export const getLabsCount = async () => {
  const response = await axios.get(`${API_URL}/count`);
  console.log(response);
  return response.data.labsCount;
};