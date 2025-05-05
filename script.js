function init() {
    var productos = document.getElementById("productos")
    for (let i = 1; i<=10; i++){
        productos.innerHTML += (`<div class="card col-${i} mar20" style="width: 18rem;"><class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">Producto ${i}</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>`);
    }
}