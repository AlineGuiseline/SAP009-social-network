import { createPost } from '../../firebase/firestore.js';
import { redirect } from '../../redirect.js';

export default () => {
  const modal = document.createElement('div');

  modal.innerHTML = `
  <section id="modal">
    <div class="modal-header">
      <button id="close-modal">X</button>
    </div>
    <div class="modal-body">
      <form class="modal-form">
        <div class="single-input">
          <input required type="text" id="anime" class="input">
          <label for="anime">Nome do anime</label>
        </div>
  
        <div class="single-input">
          <input required type="text" id="episodes" class="input">
          <label for="episodes">Quantidade de episódios</label>
        </div>
      </form>
  
      <textarea id="post-area" placeholder="Fale sobre o anime aqui" class="input"></textarea>
      <button id="post-button">Publicar</button>
    </div>
  </section>

  `;

  modal.style.display = 'block';

  const closeModalButton = modal.querySelector('#close-modal');
  closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const postButton = modal.querySelector('#post-button');
  const animePost = modal.querySelector('#anime');
  const episodesPost = modal.querySelector('#episodes');
  const descriptionPost = modal.querySelector('#post-area');

  postButton.addEventListener('click', () => {
    const anime = animePost.value;
    const episodes = episodesPost.value;
    const description = descriptionPost.value;

    createPost(anime, episodes, description);
    alert('Publicação efetuada com sucesso');
    redirect('#timeline');
  });

  return modal;
};