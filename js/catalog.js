/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i =0 ;i< Product.allProducts.length ; i++) {

    let optionEl=document.createElement('option');
    selectElement.appendChild(optionEl);
    optionEl.textContent=Product.allProducts[i].name;
    optionEl.value= Product.allProducts[i].name;

  }
}
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  
  addSelectedItemToCart();

  
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let selected = document.getElementById('items').value;
  let quantity= document.getElementById('quantity').value;
  cart.addItem(selected,quantity);
  // TODO: get the quantity
  // let quantity= event.target.id.value ;
  // TODO: using those, add one item to the Cart
  console.log(selected);
  console.log(quantity);

}
addSelectedItemToCart();
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

let updateDisplay = document.getElementById('itemCount');
updateDisplay.innerText= cart.items.length-1;




}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
//   // TODO: Get the item and quantity from the form
// let divElem = document.getElementById('cartContents');
// divElem.innerHTML=('<p> this is para </p> ')
// let ulElem = document.createElement('ul');
// divElem.append(ulElem);

// for (let i= 0 ; i < cart.items.length ; i++ )
// {

//   let liElem= document.createElement('li');
//   ulElem.append(liElem);
//   liElem.textContent= (cart.items[i]);


// }

let div = document.getElementById('cartContents');
  div.innerHTML = '';
  // TODO: Get the item and quantity from the form
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Add a new element to the cartContents div with that information
    let divEl = document.getElementById('cartContents');
    let listEl = document.createElement('ul');
    divEl.appendChild(listEl);
    let previewProduct = cart.items[i];
    let itemPreview =  previewProduct.product + ' ' + previewProduct.quantity;
    let itemEl = document.createElement('li');
    itemEl.innerText = itemPreview;
    listEl.appendChild(itemEl);
  }




  // TODO: Add a new element to the cartContents div with that information
}


// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
