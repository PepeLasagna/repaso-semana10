document.addEventListener("DOMContentLoaded", function () {
    const productName = document.getElementById("productName");
    const productDescription = document.getElementById("productDescription");

    let products = JSON.parse(localStorage.getItem("productos"))

    let prodID = localStorage.getItem("prodID")


    products.forEach(element => { 
        if(prodID == element.id){
            let nombre = this.getElementById("productName")
            nombre.textContent = element.name
            let descripcion = this.getElementById("productDescription")
            descripcion.textContent = element.description
        
      }
           
});


    //Recupera el valor almacenado en el localStorage con la clave "ProdID"
    
    //Busca ese producto en la matriz de productos y muestra su nombre y descripción en la página de detalles del producto.
});


 