const items = document.querySelector('.items');
// const item = items.querySelector('.item');
// const itemImg = item.querySelector('.item_img');
// const itemInfo = item.querySelector('.info');
// const itemName = itemInfo.querySelector('.item_name');
// const itemDescription = itemInfo.querySelector('.item_description');
// const itemPrice = itemInfo.querySelector('.price');

productData.forEach(product => {
    const item = document.createElement('a');
    item.href = '#';
    item.classList.add('item');

    const itemImage = document.createElement('img');
    itemImage.src = product.imageSource;
    itemImage.classList.add('item_img');

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('info');
    
    const itemName = document.createElement('h3');
    itemName.classList.add('item_name');
    itemName.textContent = product.name;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item_description');
    itemDescription.textContent = product.description;

    const itemPrice = document.createElement('h3');
    itemPrice.classList.add('price');
    itemPrice.textContent = product.price;

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDescription);
    itemInfo.appendChild(itemPrice);

    items.appendChild(item);
    item.appendChild(itemImage);
    item.appendChild(itemInfo);
});



