const items = document.querySelector('.items');
const cartBlock = document.querySelector('.cart');
const cart = document.querySelector('.cart-items');
let cartItems = 0;

products.forEach(product => {
    const item = document.createElement('a');
    item.classList.add('item');
    item.setAttribute('data-id', product);

    const itemImage = document.createElement('img');
    itemImage.src = productData[product].imageSource;
    itemImage.classList.add('item_img');

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('info');
    
    const itemName = document.createElement('h3');
    itemName.classList.add('item_name');
    itemName.textContent = productData[product].name;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item_description');
    itemDescription.textContent = productData[product].description;

    const itemPrice = document.createElement('h3');
    itemPrice.classList.add('price');
    itemPrice.textContent = productData[product].price;

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemDescription);
    itemInfo.appendChild(itemPrice);

    items.appendChild(item);
    item.appendChild(itemImage);
    item.appendChild(itemInfo);
});

function addToCart(id) {
    const item = document.createElement('div');
    item.classList.add('cart-item');

    const itemImage = document.createElement('img');
    itemImage.src = productData[id].imageSource;
    itemImage.classList.add('cart-item-img');

    const description = document.createElement('div');
    description.classList.add('cart-item-description');

    const itemName = document.createElement('h2');
    itemName.classList.add('cart-item-name');
    itemName.textContent = productData[id].name;

    const price = document.createElement('p');
    price.classList.add('cart-item-price');
    price.textContent = productData[id].price;

    const color = document.createElement('p');
    color.classList.add('cart-item-color');
    color.textContent = "Red";

    const size = document.createElement('p');
    size.classList.add('cart-item-size');
    size.textContent = "XL";

    const quantity = document.createElement('p');
    quantity.classList.add('cart-item-quantity');
    quantity.textContent = "1";

    const cross = document.createElement('a');
    cross.classList.add('cart-item-cross')

    const crossPic = document.createElement('img');
    crossPic.src = "img/cross.svg",

    cross.appendChild(crossPic)

    description.appendChild(itemName);
    description.appendChild(price);
    description.appendChild(color);
    description.appendChild(size);
    description.appendChild(quantity);

    cart.appendChild(item);
    item.appendChild(itemImage);
    item.appendChild(description);
    item.appendChild(cross);
}

items.addEventListener("click", function(event) {
    if (event.target.parentElement.classList.contains('item')){
        addToCart(event.target.parentElement.dataset.id);
        if (cartItems === 0) {
            cartBlock.style.display = "flex";
        }
        cartItems++;
    }
})

cart.addEventListener("click", function(event) {
    if(event.target.parentElement.classList.contains('cart-item-cross')){
        event.target.parentElement.parentElement.remove();
        cartItems--;
        if (cartItems === 0) {
            cartBlock.style.display = "None";
        }
    }
})
