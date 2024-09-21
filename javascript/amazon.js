import {cart} from './cart.js';
import {products} from './product1.js';

let html='';
products.forEach((values)=>{
    html+= `<div class="home-page-container">
    <div class="product-img-container">
    <img class="product-img" src="${values.image}">
    </div>
    
    <div class="product-name limit-text-to-2-lines" >
    ${values.name}
    </div>
    
    <div class="rating-container">
    <img  class= "rating" src="images/product-imgs/rating-${(values.rating.stars)*10}.png">
    <div class="rating-counts link-primary">
    ${values.rating.count}
    </div> 
    </div>
    
    <div class="cost">
    $${((values.cost)/100).toFixed(2)}
    </div>
    
    <div >
    <select class="options-container js-quantity-selector-${values.id}">
        <option class="value" selected="1">1</option>
        <option class="value" value="3">3</option>
        <option class="value" value="4">4</option>
        <option class="value" value="5">5</option>
        <option class="value" value="6">6</option>
        <option class="value" value="7">7</option>
        <option class="value" value="8">8</option>
        <option class="value" value="9">9</option>
        <option class="value" value="10">10</option>
    </select>
    </div>
    
    <div class="product-spacer"></div>
    <div class="add-to-cart js-added-button-${values.id}"><img src="images/product-imgs/checkmark.png">Added</div>
    <div class="add-container">
    <button class="add js-add-button" data-product-id="${values.id}">Add to Cart</button>
    </div>
    </div>`
});
document.querySelector('.product1-grid').innerHTML=html;

function addToCart(productId){
    document.querySelector(`.js-added-button-${productId}`).classList.add('jss-op');
    let b=setTimeout(()=>{
        document.querySelector(`.js-added-button-${productId}`).classList.remove('jss-op');
    },2000);
    let msg;
    cart.forEach((items)=>{
     if(productId===items.productId){
 msg=items;
     }
    })
 
    const quantity=Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    console.log(quantity);
    if(msg){
 msg.quantity+=quantity;
 
    }
    else{
    cart.push({
     productId:productId,
     quantity:quantity
   
      }) }
}






function updateCartQuantity(){
    let sum=0;
    cart.forEach((value)=>{
       sum=sum+value.quantity;
    })

    document.querySelector('.zero').innerHTML=sum;

}





document.querySelectorAll('.js-add-button')
.forEach((button)=>{
    button.addEventListener('click',()=>{
 
  const productId=button.dataset.productId;
  addToCart(productId);
  updateCartQuantity();
    })
})