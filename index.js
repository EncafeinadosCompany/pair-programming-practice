const products = []
const nameInput = document.getElementById("name-input")
const priceInput = document.getElementById("price-input")

document.getElementById("product-form").addEventListener("submit", function(event){
    event.preventDefault()
    let list= {
       name: nameInput.value,
       price: priceInput.value,
    }
    
    if (nameInput === '' || isNaN(priceInput)) {
        alert("Porfavor ingresa un nombre y un precio valido")
        return
    }
    products.push(list)
const producList = document.getElementById ("product_list")
})