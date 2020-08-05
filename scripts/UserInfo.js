class UserInfo {
    constructor(elementName, elementAbout, elementNameEdit, elementAboutEdit, api) {
        this.elementName = elementName;
        this.elementAbout = elementAbout;
        this.elementNameEdit = elementNameEdit;
        this.elementAboutEdit = elementAboutEdit;
        this.api = api;
        this.name = api.name;
        this.about = api.about;
    }

    setUserInfo(elementNameEdit, elementAboutEdit) {
        this.elementName.textContent = elementNameEdit;
        this.elementAbout.textContent = elementAboutEdit;
        this.elementNameEdit.value = elementNameEdit;
        this.elementAboutEdit.value = elementAboutEdit;
    }

    updateUserInfo(elementNameEdit, elementAboutEdit) {
        this.elementName.textContent = this.elementNameEdit.value;
        this.elementAbout.textContent = this.elementAboutEdit.value;
    }

}
