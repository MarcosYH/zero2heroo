import axios from "axios";

const API_URL = 'http://localhost:3000/course';

export const getCoursesCount = async () => {
  const response = await axios.get(`${API_URL}/count`);
  console.log(response);
  return response.data.courseCount;
};