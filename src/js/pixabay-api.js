import axios from "axios";

const PIXABAY_KEY = '43879059-f5905d2b1638a117e79b8083f';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

export const getPixabayImages = async (query = '', page = 1) => {
  const params = {
    key: PIXABAY_KEY,
    q: query,
    per_page: PER_PAGE,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.statusText || 'Error fetching data');
  }
}