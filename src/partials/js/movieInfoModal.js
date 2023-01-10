import { movieData } from './fetch';
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';

const movieInfoModal = event => {
  event.preventDefault();

  if (event.target.parentElement.nodeName === 'LI') {
    const movieId = event.target.parentElement.getAttribute('data-movieid');
    movieData(movieId).then(data => {
      const instance = basicLightbox.create(`
      <div class="gallery-modal">
      <img src="https://image.tmdb.org/t/p/w500//${
        data.poster_path
      }" class="gallery-modal__img"/>
      <h3>${data.original_title}</h3>
      <table>
        <tr>
          <td>Vote/Votes</td>
          <td>${data.vote_average.toFixed(2)} / ${data.vote_count}</td>
        </tr>
        <tr>
          <td>Popularity</td>
          <td>${data.popularity}</td>
        </tr>
        <tr>
          <td>Original Title</td>
          <td> ${data.original_title}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>${data.genre}</td>
        </tr>
      </table>
      <h4>About</h4>
      <p>${data.overview}</p>
      <div class="modal-btns">
        <button>ADD TO WATCHED</button>
        <button>ADD TO QUEUE</button> 
      </div>
    </div>
`);
      instance.show();
    });
  }
  if (event.target.nodeName === 'LI') {
    const movieId = event.target.getAttribute('data-movieid');
    movieData(movieId).then(data => {
      const instance = basicLightbox.create(`
      <div class="gallery-modal">
      <img src="https://image.tmdb.org/t/p/w500//${
        data.poster_path
      }" class="gallery-modal__img"/>
      <h3>${data.original_title}</h3>
      <table>
        <tr>
          <td>Vote/Votes</td>
          <td>${data.vote_average.toFixed(2)} / ${data.vote_count}</td>
        </tr>
        <tr>
          <td>Popularity</td>
          <td>${data.popularity}</td>
        </tr>
        <tr>
          <td>Original Title</td>
          <td> ${data.original_title}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>${data.genre}</td>
        </tr>
      </table>
      <h4>About</h4>
      <p>${data.overview}</p>
      <div class="modal-btns">
        <button>ADD TO WATCHED</button>
        <button>ADD TO QUEUE</button> 
      </div>
    </div>
`);
      instance.show();
    });
  }
};
export { movieInfoModal };
