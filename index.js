const products = []
const nameInput = document.getElementById("name-input")
const priceInput = document.getElementById("price-input")

document.getElementById("product-form").addEventListener("submit", function(event){
     if (name === '' || isNaN(price)) {
        alert("Porfavor ingresa un nombre y un precio valido")
        return
    }


    let list= {
       name: nameInput.value,
       price: priceInput.value,
    }

     event.preventDefault()
   
   
    products.push(list)
    

})

function updateList(){
    let producList = document.getElementById ("product_list")
    producList.innerHTML = ""
}
