const products = [
{
 id: 1,
 name: "Hertfoid Upholstered Chair",
 price: 101,
 image: "/images/1.png",
 slug: "hertfoid-upholstered-chair",
},
{
 id: 2,
 name: "Abingdon Upholstered Chair Swivel",
 price: 151,
 image: "/images/2.png",
 slug: "abingdon-upholstered-chair-swivel",
},
{
 id: 3,
 name: "Jeses Minimore Modern Style Etta",
 price: 181,
 image: "/images/3.png",
 slug: "jeses-minimore-modern-style-etta",
},
{
 id: 4,
 name: "JJeses Minimore Modern Style",
 price: 201,
 image: "/images/4.png",
 slug: "jjeses-minimore-modern-style",
},
{
 id: 5,
 name: "Bolanle Upholstered Armchair",
 price: 251,
 image: "/images/5.png",
 slug: "bolanle-upholstered-armchair",
},
{
 id: 6,
 name: "Jaqueze Upholstered Armchair",
 price: 111,
 image: "/images/6.png",
 slug: "jaqueze-upholstered-armchair",
},
{
 id: 7,
 name: "Leston Wide Upholstered Fabric",
 price: 121,
 image: "/images/7.png",
 slug: "leston-wide-upholstered-fabric",
},
{
 id: 8,
 name: 'Stephanny 27.5" Wide Tufted',
 price: 220,
 image: "/images/8.png",
 slug: "stephanny-275-wide-tufted-armchair",
},
];
let cart=[];
function displayProducts()
{
let productDiv=document.getElementById("products");
productDiv.innerHTML="";
products.forEach(product=>
{
   let productContainer=document.createElement("div");
   productContainer.classList.add("product");
   productContainer.innerHTML=` 
       <img class="img1" src="${product.image}" alt="">
       <p class="p1">${product.name}</p>
       <p class="p2"> $${product.price}</p>
       <button class="add" onclick="AddToCart(${product.id})">Add to cart</button>
   `
   productDiv.append(productContainer)
})
}
function AddToCart(id)
{
    let selectedProduct=products.find((product)=>product.id===id);
    console.log(selectedProduct);
    let existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    }
    else{
    cart.push({...selectedProduct,quantity:1});
    console.log(cart);
    }
    UpdateCart();

} 
function UpdateCart()
{
   let cartDiv=document.getElementById("cart-c");
   cartDiv.innerHTML="";
   let totalAmount=0;
   if(cart.length===0) 
   {
    cartDiv.innerHTML=`<p>Your cart is Empty</p>`;
    document.getElementById("total").textContent="Total:$50";
    return;
   }
   cart.forEach((item,index)=>
   {
     let cartItem=document.createElement("div")
     cartItem.classList.add("cart-p");
     totalAmount+=item.price*item.quantity;
     cartItem.innerHTML=` <img class="img2" src="${item.image}">
     <p>${item.name} - ${item.price} </p>
     <input type="number" min="1" value="${item.quantity}" onchange="UpdateQuantity(${index}, this.value)"/>

     <button  onclick="Remove(${index})">Remove</button>`
     console.log(cartItem);
     cartDiv.appendChild(cartItem);
   })
   document.getElementById("total").textContent = `Total: $${totalAmount}`;
}
function  Remove(index)
{
    cart.splice(index,1);
    UpdateCart()
}
function UpdateQuantity(index, newQuantity) {
    const quantity = parseInt(newQuantity);
    if (quantity < 1 || isNaN(quantity)) return;

    cart[index].quantity = quantity;
    UpdateCart();
}

displayProducts()

