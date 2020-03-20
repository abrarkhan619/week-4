class Card {
    constructor(name, src) {

    }

    createCard() {
        let card = document.createElement('div');
        card.classList.add('card');

        return card;
    }

    createTitle(name) {
        let title = document.createElement('h1')
        let text = document.createElement(name);

        title.appendChild(text);

        title.classList.add('title');

        return title;
    }

    createImage(src) {
        let image = document.createElement('img')
        image.classList.add('image')

        image.src = src;

        return image;
    }

    createAttributeList() {
        let container = document.createElement('div');
        let list = document.createElement('ul');

        container.classList.add('listContainer');
        container.appendChild(list);

        for (let index = 0; index < 5; index++) {
            let listItem = document.createElement('li')
            let attributeText = document.createTextNode('attribute')

            listItem.appendChild(attributeText);
            list.appendChild(listItem);
        }
        console.log(container);
        
    }

}

let thing = new Card();
thing.createAttributeList();