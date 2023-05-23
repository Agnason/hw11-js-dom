
const btn = document.querySelector('.subcategory__items__item__btn');

btn.addEventListener('click', function () {
    const dataCart = JSON.parse(cartInfo);
    // находим блок, после которого будем вставлять карточку
    const sectionEl = document.querySelector('.footer__up');
    // создаём блок, в котором будут карточки товаров из корзины
    const cartBlock = document.createElement('div');
    cartBlock.classList.add('cart__block');
    cartBlock.classList.add('center');
    // добавляем после нужного блока
    sectionEl.after(cartBlock);
    // из макета берем левую часть, где карточки товаров
    const cartBlockLeft = document.createElement('div');
    cartBlockLeft.classList.add('cart__block__left');
    cartBlock.appendChild(cartBlockLeft);
    // шаблон карточки товара
    dataCart.forEach(element => {
        // создание блока карточки товара
        const cartCard = document.createElement('div');
        cartCard.classList.add('cart__block__left__card');
        cartBlockLeft.appendChild(cartCard);
        // вставляем картинку
        const imgCard = document.createElement('img');
        imgCard.src = element.photoLink;
        imgCard.alt = element.alt;
        cartCard.appendChild(imgCard);
        // создаем блок с информацией по товару
        const cartCardInfo = document.createElement('div');
        cartCardInfo.classList.add('cart__block__left__card__info');
        cartCard.appendChild(cartCardInfo);
        // блок ссылок на категорию и подкатегорию товаров
        const cartCardInfoLinks = document.createElement('div');
        cartCardInfoLinks.classList.add('cart__block__left__card__info__links');
        cartCardInfo.appendChild(cartCardInfoLinks);
        // ссылка на категорию товара
        const link1 = document.createElement('a');
        link1.classList.add('cart__block__left__card__info__a');
        cartCardInfoLinks.appendChild(link1);
        link1.href = "#";
        link1.textContent = element.info__a1;
        // перенос на следующую строку
        const brEl = document.createElement('br');
        cartCardInfoLinks.appendChild(brEl);
        // ссылка на подкатегорю товара
        const link2 = document.createElement('a');
        link2.classList.add('cart__block__left__card__info__a');
        cartCardInfoLinks.appendChild(link2);
        link2.href = "#";
        link2.textContent = element.info__a2;
        // создание блока по описанию товара
        const cartCardInfoText = document.createElement('div');
        cartCardInfoText.classList.add('cart__block__left__card__info__text');
        cartCardInfo.appendChild(cartCardInfoText);
        // цена
        const pElPrice = document.createElement('p');
        pElPrice.textContent = (`Price: `);
        cartCardInfoText.appendChild(pElPrice);
        // чтобы цена была выделена красным цветом
        const spanEl = document.createElement('span');
        spanEl.classList.add('cart__block__left__card__info__text__price');
        spanEl.textContent = (`$${element.price}`);
        pElPrice.appendChild(spanEl);
        // цвет
        const pElColor = document.createElement('p');
        pElColor.textContent = (`Color: ${element.color}`);
        cartCardInfoText.appendChild(pElColor);
        // размер
        const pElSize = document.createElement('p');
        pElSize.textContent = (`Size: ${element.size}`);
        cartCardInfoText.appendChild(pElSize);
        // создание блока по количеству товара
        const cartCardQuantity = document.createElement('div');
        cartCardQuantity.classList.add('cart__block__left__card__info__quantity');
        cartCardInfoText.appendChild(cartCardQuantity);
        // количество
        const pElQuantity = document.createElement('p');
        pElQuantity.textContent = (`Quantity:`);
        cartCardQuantity.appendChild(pElQuantity);
        // input c количеством товара
        const inputEl = document.createElement('input');
        inputEl.classList.add('cart__block__left__card__info__quantity__input');
        inputEl.type = 'number';
        inputEl.placeholder = element.quantity;
        cartCardQuantity.appendChild(inputEl);
        // вставляем ссылку на зыкрытие
        const cardClose = document.createElement('div');
        cardClose.classList.add('cart__block_close');
        cartCard.append(cardClose);
        // сама иконка
        const cardCloseIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        cardCloseIcon.setAttribute('width', '18');
        cardCloseIcon.setAttribute('height', '18');
        cardCloseIcon.setAttribute('viewBox', '0 0 18 18');
        cardCloseIcon.setAttribute('fill', 'none');
        cardCloseIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        cardCloseIcon.classList.add('icon');

        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', 'M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z');
        pathElement.setAttribute('fill', '#575757');
        cardCloseIcon.append(pathElement);
        cardClose.append(cardCloseIcon);

    });



    const closeEL = document.querySelectorAll('div svg.icon');
    closeEL.forEach(element => {
        element.addEventListener('click', function () {
            const closeElUpdate = document.querySelectorAll('div svg.icon');
            console.log(closeElUpdate.length);
            if (closeElUpdate.length > 1) {
                console.log(closeElUpdate.length);
                const thisCard = element.parentElement.parentElement;
                console.log(thisCard);
                thisCard.remove();

            } else {
                element.parentElement.parentElement.parentElement.parentElement.remove();
            }

        });
    });


});












