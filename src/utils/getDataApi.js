export const getDataApi = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error('Could not fetch: ', response.status);
      return false;
    }

    return response.json();
  } catch (error) {
    console.error('Could not fetch: ', error.message);
    return false;
  }
};
