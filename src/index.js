import { showPopularMovies } from './partials/js/popularMovies';
import { footerModal } from './partials/js/modal';
import { movieInfoModal } from './partials/js/movieInfoModal';
footerModal();

window.addEventListener('load', e => {
  showPopularMovies();
});

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', movieInfoModal);


