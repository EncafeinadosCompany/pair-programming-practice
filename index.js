const products = []
const nameInput = document.getElementById("name-input")
const priceInput = document.getElementById("price-input")

document.getElementById("product-form").addEventListener("submit", function(event){
    event.preventDefault()

    let list= {
       name: nameInput.value,
       price: parseFloat(priceInput.value)
    }
    if (list.name === '' || isNaN(list.price)) {
        alert("Porfavor ingresa un nombre y un precio valido")
        return
    }
    products.push(list)
    console.log(products)
    allProducts()
})
function allProducts(){
    const producList = document.getElementById ("product_list")
    producList.innerHTML=""
    let total=0
    products.forEach(product => {
        let item= document.createElement("li");
        item.textContent = `${product.name}: $${product.price.toFixed(2)}`
        producList.appendChild(item)
        total+=product.price
    })
document.getElementById("total").textContent=total.toFixed(2)
}