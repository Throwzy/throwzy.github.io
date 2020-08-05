class FormValidator {
  constructor(formV) {
    this.formV = formV;
    this.setEventListeners = this.setEventListeners.bind(this);
  }

  checkInputValidity(inputElement, errorMessageElement) {
    if (inputElement.value.length === 0) {
      errorMessageElement.textContent = 'Это обязательное поле';
      return false;
    } else if ((inputElement.value.length < 2 || inputElement.value.length > 30) && inputElement.type === "text") {
      errorMessageElement.textContent = 'Должно быть от 2 до 30 символов';
      return false;
    } else if (inputElement.validity.typeMismatch && inputElement.type === 'url') {
      errorMessageElement.textContent = 'Здесь должна быть ссылка!';
      return false;
    } else {
      errorMessageElement.textContent = '';
      return true;
    }
  }

  setSubmitButtonState(valid) {
    const button = this.formV.querySelector('button');
    if (!valid) {
      button.setAttribute('disabled', true);
      button.classList.add('popup__button_invalid');
    }
    if (valid) {
      button.removeAttribute('disabled', true);
      button.classList.remove('popup__button_invalid');
    }
  }



  setEventListeners() {
    const inputs = [...this.formV.querySelectorAll('input')];
    const button = this.formV.querySelector('button');
    this.formV.addEventListener('input', (event) => {
      const inputForValidation = event.target;
      const error = event.target.nextElementSibling;
      this.checkInputValidity(inputForValidation, error);
      if (inputs.every((input) => input.validity.valid)) {
        this.setSubmitButtonState(true);
      } else {
        this.setSubmitButtonState(false);
      }
    });
  }
};