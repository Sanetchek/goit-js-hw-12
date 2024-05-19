const PIXABAY_KEY = '43879059-f5905d2b1638a117e79b8083f';
const BASE_URL = 'https://pixabay.com/api/';

export const getPixabayImages = (query = '') => {
  const params = new URLSearchParams({
    key: PIXABAY_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  })

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}