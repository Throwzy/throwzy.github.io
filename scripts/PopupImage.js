class PopupImage {
    constructor(popup,chooseImage) {
        this.popup = popup;
        this.chooseImage = chooseImage;
    }
    openWide(link) {
        this.popup.classList.add("popup_is-opened");
        this.chooseImage.src = `${link}`;
    }
}