// ==========================
// 🛒 SIMPLE SHOPPING CART USING JS
// ==========================

// Array to store cart items
let cart = [];

// Add item to card
function addItem(name, price){
    //find()
    let item = cart.find(i => i.name === name);

    if(item){
        item.qty++;
    }else{
        cart.push({name: name, price: price, qty: 1});
    }

    showItem();
}

//Display Cart Item
function showItem(){
    let list = document.getElementById("cart");

    let total = 0;
    list.innerHTML = "";

    cart.forEach((item, index)=>{
        total += item.price * item.qty;
        list.innerHTML += `
        <li>
        ${item.name} (Rs. ${item.price} * ${item.qty})
        
        <button onclick = "inc(${index})"> + </button>
        <button onclick = "dec(${index})"> - </button>
        <button onclick = "dlt(${index})"> ✖ </button>
        </li>`
    });

    document.getElementById("total").innerText = "Total: ₹ " + total + "/-";
}

function inc(i){
    cart[i].qty++;
    showItem();
}

function dec(i){
    if(cart[i].qty>1){
        cart[i].qty--;
    }
    showItem();
}

function dlt(i){
    cart.splice(i, 1);
    showItem();
}