class Card {
    constructor(name,link) {
    this.name = name;
    this.link = link;
    this.remove = this.remove.bind(this);
    }
    like() {
        this.classList.toggle('place-card__like-icon_liked');
    }
    remove() {
       this.newCard.querySelector(".place-card__like-icon").removeEventListener('click', this.like);
       this.newCard.querySelector(".place-card__delete-icon").removeEventListener('click', this.remove);
       this.newCard.remove();
    }
    create() {
        const markup = `<div class="place-card">
        <div class="place-card__image" style="background-image: url(https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg)">
          <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
          <h3 class="place-card__name">Камчатка</h3>
          <button class="place-card__like-icon"></button>
        </div>
      </div>`;
        const element = document.createElement('div');
        element.insertAdjacentHTML('afterbegin', markup);
        const newCard = element.firstElementChild;
        newCard.querySelector('.place-card__name').textContent = this.name;
        newCard.querySelector('.place-card__image').style.backgroundImage = `url(${this.link})`;
        this.newCard = newCard;
        this.setListener();
        return newCard;
    }
    setListener() {
      this.newCard.querySelector(".place-card__like-icon").addEventListener('click', this.like);
      this.newCard.querySelector(".place-card__delete-icon").addEventListener('click', this.remove);
    }
}