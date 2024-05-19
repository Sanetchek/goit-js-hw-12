export const generateImagesList = (imagesList) => {
  return imagesList
    .map((image) => {
      const { webformatURL, largeImageURL, comments, downloads, likes, views, tags } = image;
      return `<li class="item">
        <a class="item-link" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" width="360" height="200">
          <div class="views">
            <div class="view-item">
              <div class="view-title">Likes</div>
              <div class="view-value">${likes}</div>
            </div>
            <div class="view-item">
              <div class="view-title">Views</div>
              <div class="view-value">${views}</div>
            </div>
            <div class="view-item">
              <div class="view-title">Comments</div>
              <div class="view-value">${comments}</div>
            </div>
            <div class="view-item">
              <div class="view-title">Downloads</div>
              <div class="view-value">${downloads}</div>
            </div>
          </div>
        </a>
      </li>`
    })
    .join('');
}