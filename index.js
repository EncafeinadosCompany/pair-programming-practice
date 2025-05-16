const products = []
const nameInput = document.getElementById("name-input")
const priceInput = document.getElementById("price-input")

document.getElementById("product-form").addEventListener("submit", function(event){
     if (nameInput === '' || isNaN(priceInput)) {
        alert("Porfavor ingresa un nombre y un precio valido")
        return
    }


    let list= {
       name: nameInput.value,
       price: priceInput.value,
    }

     event.preventDefault()
   
   
    products.push(list)
    const producList = document.getElementById ("product_list")
    
})