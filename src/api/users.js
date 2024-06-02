import axios from "axios";

const API_URL = "https://backend-zro2hero.vercel.app/user";

export const getUserCountByRole = async (role) => {
  const response = await axios.get(`${API_URL}/${role}/count`);
  return response.data.count;
};

export const getUsersByRole = async (role) => {
  const response = await axios.get(`${API_URL}/${role}/list`);
  return response.data.users;
};
