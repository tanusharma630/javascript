
        const products=[
    {
        id:1,
        name:"Shoes",
        price:4000,
        category:"Fashion",
        image:"https://www.gfabify.in/cdn/shop/files/1-main-calliton-summer-slipper-man-leisure-shoes-man-sneakers-fashion-breathable-mixed-colors-white-lace-up-athletic-flat-shoes-2023_540x_0e5c626d-209e-49e7-a871-4541883ff5be.webp?v=1712319918"

        
    },
    {
          id: 2,
        name: "Headphones",
        price: 3500,
        category: "Electronics",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlkcJXghO2qKl0mrs4hY6hPYmMjC9fv7_E_Ag1cnbq9ghM4Fa08Pek6Un&s=10"

    },

    {
        id: 5,
        name: "Watch",
        price: 4000,
        category: "Accessories",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIA1JBErNIRFJPwSIepDjpV9CUTcgDC2AnCbbWALXeu2_O_8A3_2s93Y-V&s=10"
    },

    {
        id: 3,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
        image: "https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops-and-2-in-1s/dell-laptop/db14250-non-touch/dell-db14250nt-laptop-c-22040rf115-bl-fpr.psd?wid=1200&hei=630&fmt=png-alpha"

    },
    {
        id: 4,
        name: "Backpack",
        price: 1800,
        category: "Accessories",
        image: "https://icon.in/cdn/shop/files/1_427a8665-919f-4581-8b61-313c46cae7e7.jpg?v=1735287670",
        quantity:1

    },
    
    {
        id: 6,
        name: "Lipgloss",
        price: 4000,
        category: "Makeup",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmC8KpYy7vKcY5HJzQDT9TaCUYjnWa1NGXPG9PaXmeU885FPCt0XdfZU&s=10"
    },
    
]


const productContainer=document.getElementById("productContainer");
const cartContainer=document.getElementById("cartContainer");
const searchInput=document.getElementById("search");
const categorySelect=document.getElementById("category");
const total =document.getElementById("total");
const clearCart=document.getElementById("clearCart");
let cart = JSON.parse(localStorage.getItem("cart"))|| [];

function displayProducts(productsList){

productContainer.innerHTML=""
productsList.forEach(product => {
    productContainer.innerHTML+=`
    <div class="product-card">
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.category}</p>
    <h4>₹${product.price}</h4>
    <button onclick=addToCart(${product.id})>Add to Cart</button>
    </div>
    `
    
});

}

function addToCart(id){

const product=products.find(item=>item.id===id);
const existingProduct=cart.find(item=>item.id===id);

if(existingProduct){
    existingProduct.quantity++;
}else{
    cart.push({
        ...product,
        quantity: 1
    });
}
localStorage.setItem("cart",JSON.stringify(cart));
renderCart()
}



searchInput.addEventListener("input",filterProducts);
categorySelect.addEventListener("change",filterProducts)

function filterProducts(){
    const searchText=searchInput.value.toLowerCase();
    const selectedCategory=categorySelect.value;
    const filtered=products.filter(product=>{
        const matchesSearch=product.name.toLowerCase().includes(searchText);
        const matchCategory=selectedCategory==="All"||product.category===selectedCategory;

        return matchesSearch && matchCategory

    });

    displayProducts(filtered);



}

displayProducts(products)
renderCart()


function renderCart(){
cartContainer.innerHTML="";
if(cart.length===0){
    cartContainer.innerHTML="<p>no items in cart</p>";
    total.textContent=0
    return;
}

let grandTotal=0;
cart.forEach(item=>{
grandTotal+=item.price*item.quantity;
cartContainer.innerHTML+=
`<div class="cart-value">
<img src="${item.image}" alt="${item.name}">
<div class="cart-info">
<h4>${item.name}</h4>
<p>${item.price}</p>
<div class="quantity">
<button onclick="decreaseQuantity(${item.id})">-</button>
<span>${item.quantity}</span>
<button onclick="increaseQuantity(${item.id})">+</button>

</div>


</div>

<button class="remove-btn" onclick="removeItem(${item.id})">
Remove
</button>
</div>
`
})

total.textContent=grandTotal;
localStorage.setItem("cart",JSON.stringify(cart));

}
    function increaseQuantity(id){
    const product = cart.find(item => item.id === id);
    if(product){
        product.quantity++;
    }

    renderCart();

}

    function decreaseQuantity(id){
        const product = cart.find(item => item.id === id)
        if(!product){
            return
        }if(product.quantity>1){
            product.quantity--
        }else{
            cart = cart.filter(item=> item.id !==id)
        }

        renderCart()
    }

    function removeItem(id){
        cart = cart.filter(item => item.id !== id)

       renderCart()
    }

    clearCart.addEventListener("click", ()=>{
        cart = []
        renderCart()
    })