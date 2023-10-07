import { Post } from '../utils/axios';

export const loginUser = async (userData) => {
    try {
      const response = await Post('/login', userData);
      return response;
    } catch (error) {
      throw error;
    }
  };
export const registerUser = async (userData) => {
    try {
      const response = await Post('/register', userData);
      return response;
    } catch (error) {
      throw error;
    }
  };

 