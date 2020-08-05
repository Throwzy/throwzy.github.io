class CardList {
    constructor(container, createCard, api) {
     this.container = container;
     this.createCard = createCard;
     this.api = api;
    }
    addCard(nameCard, linkCard) {
        const card = this.createCard(nameCard, linkCard);
        this.container.appendChild(card);
    };
    render(api) {
        this.api = api;
        this.api.forEach((card) => {
            this.addCard(card.name, card.link);
        });
    }
}