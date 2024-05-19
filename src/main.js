import { getPixabayImages, PER_PAGE } from './js/pixabay-api';
import { generateImagesList } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Params
const lightboxParams = {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
};

// Variables
const gallery = document.querySelector('#gallery');
const searchForm = document.querySelector('#search');
const loadMore = document.querySelector('#load_more');
const loadMoreLoader = document.querySelector('#load_more_loader');
const loader = document.querySelector('.site-loader');
const lightbox = new SimpleLightbox('.gallery a', lightboxParams);

let queryValue = '';
let queryPage = 1;

// Function to show iziToast message
function showMessage({ message, color }) {
  iziToast.show({
    message: message,
    color: color,
    position: 'topRight',
    messageColor: '#ffffff',
    image: './img/oct.svg',
    imageWidth: 24
  });
}

// Fetch and display images
async function fetchAndDisplayImages(reset = false) {
  try {
    const { total, hits } = await getPixabayImages(queryValue, queryPage);

    if (reset) {
      gallery.innerHTML = '';
      loader.classList.remove('is-hidden');
    }

    if (total === 0) {
      showMessage({ message: "Sorry, there are no images matching your search query. Please try again!", color: '#ef4040' });
      return;
    }

    const totalPages = Math.ceil(total / PER_PAGE);

    gallery.insertAdjacentHTML('beforeend', generateImagesList(hits));

    if (reset) {
      loader.classList.add('is-hidden');
      if (totalPages > 1) {
        loadMore.classList.remove('hidden');
      }
    }

    if (queryPage >= totalPages || queryPage >= Math.ceil(500 / PER_PAGE)) {
      loadMore.classList.add('hidden');
      showMessage({ message: "We're sorry, but you've reached the end of search results.", color: '#4e75ff' });
    }

    lightbox.refresh();
    if (!reset) {
      smoothScrollByTwoCardHeights();
    }
  } catch (error) {
    showMessage({ message: error.message, color: '#ef4040' });
  } finally {
    if (reset) {
      searchForm.reset();
    }
    loadMoreLoader.classList.add('hidden');
  }
}

// Smooth scroll by the height of two gallery cards
function smoothScrollByTwoCardHeights() {
  const galleryCards = document.querySelectorAll('.gallery .item');
  if (galleryCards.length > 0) {
    const cardHeight = galleryCards[0].getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      left: 0,
      behavior: 'smooth'
    });
  }
}

// Event handlers
async function onImageSearchSubmit(event) {
  event.preventDefault();
  queryValue = event.target.elements.image.value.trim();
  queryPage = 1;
  loadMore.classList.add('hidden');
  await fetchAndDisplayImages(true);
}

async function onLoadMoreResults(event) {
  event.preventDefault();
  queryPage += 1;
  loadMoreLoader.classList.remove('hidden');
  await fetchAndDisplayImages();
}

// Event listeners
searchForm.addEventListener('submit', onImageSearchSubmit);
loadMore.addEventListener('click', onLoadMoreResults);
