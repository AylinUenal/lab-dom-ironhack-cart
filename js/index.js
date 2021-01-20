// ITERATION 1

// const input = document.querySelector('input').value;

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  //console.log(price, quantity);
  const calcSubtotalPrice = price * quantity;
  //console.log(calcSubtotalPrice);
  product.querySelector('.subtotal span').innerHTML = calcSubtotalPrice;
  return calcSubtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
    // get all the product rows
  const allProducts = document.getElementsByClassName('product');
    // loop over products
  let total = 0;
  for (let product of allProducts) {
    // call updateSubtotal() for each line
    updateSubtotal(product);
    //add return from updateSubtotal to total
    total += updateSubtotal(product);
  }
  // ITERATION 3
  // update total in DOM with total from above calculation 
  //console.log('Total', total);
  document.querySelector('#total-value span').innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  const child = target.parentNode.parentNode;
  const parent = target.parentNode.parentNode.parentNode;
  const productToRemove = document.getElementsByClassName('product');
  //console.log(parent);
  parent.removeChild(child);
  calculateAll();

}

// or use product.remove(); <-- this removes itself

// ITERATION 5

function createProduct(event) {
  const create = event.currentTarget;
  //console.log('The target in createProduct is:', create);
  
  // target the name and unit price input DOM nodes and extract their values
  
  const nameNewProduct = document.querySelector('.create-product input').innerHTML;
  console.log(nameNewProduct);
  
  const priceNewProduct = document.querySelector('.quantity input').value;
  console.log(priceNewProduct);
  
  // copy and create new product row 
  const product = document.querySelector('.product');
  const newProduct = product.cloneNode(true);
  console.log(newProduct);

}

// Buttons 

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => button.addEventListener('click', removeProduct));
   
  //console.log(removeButtons);

  const createButton = document.querySelectorAll('.btn-create');
  createButton.forEach(button => button.addEventListener('click', createProduct));
  
});
