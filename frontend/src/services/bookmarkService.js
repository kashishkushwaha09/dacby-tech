import API from "../api/axios";

export const toggleBookmark = async (storyId) => {
  const response = await API.post(
    `/bookmarks/${storyId}`
  );

  return response.data;
};

export const getBookmarks = async () => {
  const response = await API.get("/bookmarks");

  return response.data;
};