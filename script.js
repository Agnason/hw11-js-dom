const data = JSON.parse(dataInfo);

const mainEl = document.querySelector('.subcategory');
const buttonEl = document.querySelector('.subcategory__button');
const itemsEl = document.createElement('div');

itemsEl.classList.add('subcategory__items');

mainEl.appendChild(itemsEl);
itemsEl.after(buttonEl);

data.forEach(element => {

    const itemEl = document.createElement('div');
    itemEl.classList.add('subcategory__items__item');
    
    const imgEl = document.createElement('img');
    imgEl.classList.add('subcategory__items__item__image');
    imgEl.src = element.photoLink;
    imgEl.alt = element.alt;

    const divIndent = document.createElement('div');
    divIndent.classList.add('subcategory__items__item__indent');

    const h3El = document.createElement('h3');
    h3El.textContent = element.title;
    h3El.classList.add('subcategory__items__item__indent__title');

    const textEl = document.createElement('p');
    textEl.classList.add('subcategory__items__item__indent__text');
    textEl.textContent = element.text;

    const priceEl = document.createElement('p');
    priceEl.classList.add('subcategory__items__item__price');
    priceEl.textContent = (`$${element.price}`);

    itemsEl.appendChild(itemEl);
    itemEl.appendChild(imgEl);
    itemEl.appendChild(divIndent);
    divIndent.appendChild(h3El);
    divIndent.appendChild(textEl);
    divIndent.appendChild(priceEl);
});