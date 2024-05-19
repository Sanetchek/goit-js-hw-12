import {
  getPixabayImages
}

from './js/pixabay-api';

import {
  generateImagesList
}

from './js/render-functions';

// izitoast
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// SimpleLightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Params
const lightboxParams= {
  captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
}

;

// Variables
const gallery = document.querySelector('#gallery');
const searchForm = document.querySelector('#search');
const loader = document.querySelector('.site-loader');
const lightbox = new SimpleLightbox('.gallery a', lightboxParams);

// Function to show iziToast message
function showMessage( {
    message, color
  }

) {
  iziToast.show( {
      message: message,
      color: color,
      position: 'topRight',
      messageColor: '#ffffff',
      image: './img/oct.svg',
      imageWidth: 24
    }

  );
}

const onImageSearchSubmit=(event)=> {
  event.preventDefault();
  const query=event.target.elements.image.value.trim();
  console.log(query);

  gallery.innerHTML = '';
  loader.classList.remove('is-hidden');

  const images = getPixabayImages(query);

  images
    .then(data => {
      if (data.total === 0) {
        const message = "Sorry, there are no images matching your search query. Please try again!";

        showMessage({
          message,
          color: '#ef4040'
        }

        );
      }

      gallery.innerHTML = generateImagesList(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      showMessage({
        message: error.message,
        color: '#ef4040'
      }

      );
    })
    .finally(() => {
      event.target.reset();
      loader.classList.add('is-hidden');
    });
}

searchForm.addEventListener('submit', onImageSearchSubmit)