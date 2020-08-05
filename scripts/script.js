(function (){
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   },
//   {
//     name: 'Нургуш',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
//   },
//   {
//     name: 'Тулиновка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
//   },
//   {
//     name: 'Остров Желтухина',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
//   },
//   {
//     name: 'Владивосток',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
//   }
// ];
const formAddCard = document.forms.new;
const formUser = document.forms.editform;
const choosePicture = document.querySelector('.popup_images');
const chooseImage = document.querySelector('.popup__image');
const chooseCardImage = document.querySelector('.place-card__image');
const chooseClosePicture = document.querySelector('.popup__close-picture');
const getMyelements = document.getElementsByName('username');
const userInfo = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');
const userInfoInput = formUser.elements.username;
const userJobInput = formUser.elements.about;
const editPopup = document.querySelector('.edit-popup');
const popupSave = document.querySelector('.popup__save');
const likeSelector = document.querySelector('.place-card__like-icon');
const oneCard = document.querySelector('.place-card');
const mainClass = document.querySelector('.popup');
const formClass = document.querySelector('.popup_is-opened');
const ourButton = document.querySelector('.button');
const editButton = document.querySelector('.user-edit__button');
const infoButton = document.querySelector('.user-info__button');
const closeTab = document.querySelector('.popup__close');
const closeEdit = document.querySelector('.popup__close-edit');
const closeMyPlaceTab = document.querySelector('.popup__close-place');
const chooseContent = document.querySelector('.popup-place');
const list = document.querySelector('.places-list');
const popupContent = document.querySelector('.popup__content');
const button = document.querySelector('.button');
const addNewCardButton = formAddCard.querySelector('.popup__button');
const inputPlace = document.querySelector('.popup__input_type_name');
const inputUrl = document.querySelector('.popup__input_type_link-url');

const errorMessages = {
  empty: 'Это обязательное поле',
  wrongLength: 'Должно быть от 2 до 30 символов',
  wrongUrl: 'Здесь должна быть ссылка',
  wrongPattern: 'Введите данные в верном формате',
};

function createNewCard(name, link) {
  return new Card(name, link).create();
}

const newList = new CardList(list, createNewCard);
// newList.render(initialCards);

const editProfileTab = new Popup(editPopup);
const newPlaceTab = new Popup(chooseContent);

const formEditValidator = new FormValidator(editPopup);
const formCardValidator = new FormValidator(chooseContent);
const pictureClass = new PopupImage(choosePicture,chooseImage);

const api = new Api({
  baseUrl: 'https://praktikum.tk/cohort12',
  headers: {
    'authorization': 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',
    'Content-type': 'application/json'
  }
})

const userInfoBar = new UserInfo(userInfo, userJob, userInfoInput, userJobInput, api);

api.getInititalCards().then ((res) => {
  newList.render(res)
}).catch ((err) => {
  console.log(err);
})

api.getProfile().then ((res) => {
  userInfoBar.setUserInfo(res.name,res.about)
  console.log(res.name)
}).catch ((err) => {
  console.log(err);
})


// const api = new Api({
//   url: baseUrl,
//   headers: {
//     'authorization': 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',
//     'Content-type': 'application/json'
//   }
// });

// const renewProfileApi = new Api({
//   url: 'https://praktikum.tk/cohort12/users/me',
//   method: `PATCH`,
//   headers: {
//     'authorization': 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',
//     'Content-type': 'application/json'
//   }
// });
// renewProfileApi.renewProfile(userInfoInput.value,userJobInput.value).then ((res) => {
//   console.log('Тест')
  // userInfoBar.updateUserInfo(res.name,res.about)
// })

// fetch('https://praktikum.tk/cohort12/users/me', {
//   method: 'PATCH',
//   headers: {
//     'authorization': 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: 'test',
//     about: 'Physicist and Chemist'
//   })
// }).then ((res) => {
//   return res.json()
// }).then ((res) => {
//   userInfoBar.updateUserInfo(res.name,res.about)
// })

// api.getProfile();

// fetch('https://praktikum.tk/cohort12/cards', {
//   headers: {
//     authorization: 'fd6a5b73-7bb7-4dfa-8ed7-e499c84151ec',
//     'Content-type': 'application/json'
// }}).then ((res) => {
//   return res.json()
// }).then ((res) => {
//   console.log(res);
// })

function closePicture(event) {
  choosePicture.classList.remove('popup_is-opened');
}

list.addEventListener('click', function (event) {
  if (event.target.classList.contains('place-card__image')) {
    pictureClass.openWide(event.target.style.backgroundImage.slice(5, -2));
  }
});

// функция очистки формы
function clearMyForm() {
  const clearName = document.querySelector('.popup__input_type_name');
  const clearUrl = document.querySelector('.popup__input_type_link-url');
  clearName.value = "";
  clearUrl.value = "";
};

// Функция сброса ошибок
function clearErrors() {
  const errorSearch = document.querySelectorAll('.error');
  errorSearch.forEach(function (elem) {
    elem.textContent = "";
  });
};
closeEdit.addEventListener('click', () => {
  editProfileTab.close();
  clearErrors();
  clearMyForm();

});

closeMyPlaceTab.addEventListener('click', () => {
  newPlaceTab.close();
  clearErrors();
  clearMyForm();
});
infoButton.addEventListener('click', () => {
  newPlaceTab.open();
});

editButton.addEventListener('click', function () {
  editProfileTab.open();
  //userInfoBar.setUserInfo();
});

formEditValidator.setEventListeners();

formUser.addEventListener('submit', function (event) {
  event.preventDefault();

  api.renewProfile(userInfoInput.value,userJobInput.value).then ((res) => {
    userInfoBar.updateUserInfo(res.name, res.about);
  }).then ((res) => {
    /*
      Можно лучше: можно написать в одном блоке then, здесь нет необходимости разбивать на несколько
    */
      editProfileTab.close()
      clearErrors();
      clearMyForm();
  }).catch ((err) => {
    console.log(err);
  })
});

formCardValidator.setEventListeners();

formAddCard.addEventListener('submit', function () {
  event.preventDefault();
  const formName = formAddCard.elements.name.value;
  const formLink = formAddCard.elements.link.value;
  newList.addCard(formName, formLink);
  clearErrors();
  clearMyForm();
  newPlaceTab.close();
});
chooseClosePicture.addEventListener('click', closePicture);
}());

/*
  Хорошая работа, класс Api создан, запросы на сервер выполняются. Но есть несколько замечаний:

  Надо исправить:
  + не создавать экземпляр класса Api для каждого запроса
  + в конструктор класса Api передавать только базовый адрес сервера, а название
    самого ендпоинта добавлять в методе
  + не хватает обработки ошибок. В конце цепочки обработки промиса 
    должен быть блок catch обрабатывающий ошибку
  + все изменения на странице должны происходить, только после того, как
    сервер ответил подтверждением. В том числе и закрытие попапа
  + если запрос выполнился с ошибкой должен возвращаться отклорненный промис 

  Можно лучше:
  - проверка ответа сервера и преобразование из json
    дублируется во всех методах класса Api, лучше вынести в отдельный метод
  - использовать Promise.all для загрузки начальных данных
*/

/*
  Отлично, критические замечания исправлены

  Для закрепления полученных знаний советую сделать и оставшуюся часть задания.
  Что бы реализовать оставшуюся часть задания необходимо разобраться с Promise.all
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  Т.к. для отрисовки карточек нужен id пользователя, поэтому отрисовать мы сможем их только
  после полученния с сервера данных пользователя
  Выглядит этот код примерно так:
    Promise.all([     //в Promise.all передаем массив промисов которые нужно выполнить
      this.api.getUserData(),
      this.api.getInitialCards()
    ])    
      .then((values)=>{    //попадаем сюда когда оба промиса будут выполнены
        const [userData, initialCards] = values;
        ......................  //все данные получены, отрисовываем страницу
      })
      .catch((err)=>{     //попадаем сюда если один из промисов завершаться ошибкой
        console.log(err);
      })
      

  Если у Вас будет свободное время так же попробуйте освоить работу с сервером
  применив async/await для работы с асинхронными запросами.
  https://learn.javascript.ru/async-await
  https://habr.com/ru/company/ruvds/blog/414373/
  https://www.youtube.com/watch?v=SHiUyM_fFME
  Это часто используется в реальной работе

  Успехов в дальнейшем обучении!
*/
