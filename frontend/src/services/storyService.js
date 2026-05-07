import API from "../api/axios";

export const getStories = async () => {
  const response = await API.get("/stories");

  return response.data;
};