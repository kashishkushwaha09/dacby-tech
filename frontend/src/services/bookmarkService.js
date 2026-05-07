import API from "../api/axios";


export const toggleBookmark = async (
  storyId
) => {
  const response = await API.post(
    `/stories/${storyId}/bookmark`
  );

  return response.data;
};

export const getBookmarks = async () => {
  const response = await API.get(
    "/stories/bookmarks"
  );

  return response.data;
};