import axios from 'axios';

export const getDataApi = async (url) => {
  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      console.error('Could not fetch: ', response.status);
      return false;
    }

    return response.data;
  } catch (error) {
    console.error('Could not fetch: ', error.message);
    return false;
  }
};
