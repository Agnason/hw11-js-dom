const data = JSON.parse(dataInfo);

const mainEl = document.querySelector('.subcategory');
const buttonEl = document.querySelector('.subcategory__button');
const itemsEl = document.createElement('div');

itemsEl.classList.add('subcategory__items');

mainEl.appendChild(itemsEl);
itemsEl.after(buttonEl);

data.forEach(element => {

    const itemEl = document.createElement('div');
    const imgEl = document.createElement('img');
    const divIndent = document.createElement('div');
    const h3El = document.createElement('h3');
    const textEl = document.createElement('p');
    const priceEl = document.createElement('p');

    itemEl.classList.add('subcategory__items__item');
    imgEl.classList.add('subcategory__items__item__image');
    divIndent.classList.add('subcategory__items__item__indent');
    h3El.classList.add('subcategory__items__item__indent__title');
    textEl.classList.add('subcategory__items__item__indent__text');
    priceEl.classList.add('subcategory__items__item__price');

    imgEl.src = element.photoLink;
    imgEl.alt = element.alt;
    h3El.textContent = element.title;
    textEl.textContent = element.text;
    priceEl.textContent = (`$${element.price}`);

    itemsEl.appendChild(itemEl);
    itemEl.appendChild(imgEl);
    itemEl.appendChild(divIndent);
    divIndent.appendChild(h3El);
    divIndent.appendChild(textEl);
    divIndent.appendChild(priceEl);
});