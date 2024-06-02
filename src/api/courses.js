import axios from "axios";

const API_URL = " https://backend-zro2hero.vercel.app/course";

export const getCoursesCount = async () => {
  const response = await axios.get(`${API_URL}/count`);
  console.log(response);
  return response.data.courseCount;
};
