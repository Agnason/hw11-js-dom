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
    itemsEl.appendChild(itemEl);

    const imgEl = document.createElement('img');
    imgEl.classList.add('subcategory__items__item__image');
    imgEl.src = element.photoLink;
    imgEl.alt = element.alt;
    itemEl.appendChild(imgEl);

    const divIndent = document.createElement('div');
    divIndent.classList.add('subcategory__items__item__indent');
    itemEl.appendChild(divIndent);

    const h3El = document.createElement('h3');
    h3El.textContent = element.title;
    h3El.classList.add('subcategory__items__item__indent__title');
    divIndent.appendChild(h3El);

    const textEl = document.createElement('p');
    textEl.classList.add('subcategory__items__item__indent__text');
    textEl.textContent = element.text;
    divIndent.appendChild(textEl);

    const priceEl = document.createElement('p');
    priceEl.classList.add('subcategory__items__item__price');
    priceEl.textContent = (`$${element.price}`);
    divIndent.appendChild(priceEl);

});

// создадим кнопку button  (add to cart) на второй карточке)

const itemAll = document.querySelectorAll('.subcategory__items__item');
const secondItem = itemAll[1];

const btnEl = document.createElement('button');
btnEl.classList.add('subcategory__items__item__btn');
secondItem.appendChild(btnEl);

const divEl = document.createElement('div');
divEl.classList.add('subcategory__items__item__div');
btnEl.appendChild(divEl);

const imgEl = document.createElement('img');
imgEl.src = 'img/header_icon_5.svg';
imgEl.style.width = '20%';
imgEl.alt = 'icon';
divEl.appendChild(imgEl);

const pEl = document.createElement('p');
pEl.textContent = 'Add to Cart'
divEl.appendChild(pEl);
        


