const params = new URLSearchParams(window.location.search)
const idFromUrl = params.get('id')

function searchProduct(){
    let product = null
    for(let i = 0; i < data.length; i++) {
     
        const obj = data[i]
        if(obj.ref == idFromUrl) {
            product = new Product(obj.ref, obj.name, obj.character, obj.price, obj.material, obj.description, obj.category, obj.imgJewelUrl, obj.imgMovieUrl)
        }
    }
    return product
}


function createView() {
    const product = searchProduct()
    if(product) {
       console.log(searchProduct());
       const container  = document.querySelector(".contenedor-imagen-info")
       container.innerHTML = product.createHtmlDetalle()

    } else {
        alert("No hay coincidencias para el usuario: " + idFromUrl)
    }
}

createView()

document.addEventListener("DOMContentLoaded", function() {
    function showNoticeSuccessfulPurchase() {
        var avisoCompra = document.getElementById("aviso-compra");
        avisoCompra.classList.remove("aviso-compra-oculto");
        avisoCompra.classList.add("aviso-compra-visible");

        setTimeout(function() {
            avisoCompra.classList.remove("aviso-compra-visible");
            avisoCompra.classList.add("aviso-compra-oculto");
        }, 4000);
    }

    var compraBoton = document.getElementById("compra-boton");

    compraBoton.addEventListener("click", showNoticeSuccessfulPurchase);
});

function redirectToIndex() {
    window.location.href = "../index.html";
}

function redirectToNecklaces() {
    window.location.href = "../Necklaces/necklaces.html";
}
function redirectToRings() {
    window.location.href = "../Rings/rings.html";
}
function redirectToNews() {
    window.location.href = "../News/news.html";
}
function redirectToOffers() {
    window.location.href = "../Offers/offers.html";
}
function redirectToFilms() {
    window.location.href = "../Films/films.html";
}
function redirectToSeries() {
    window.location.href = "../Series/series.html";
}
function redirectToFavorite() {
    window.location.href = "../Favoritepage/favorite.html";
}
function redirectToMyAccount() {
    window.location.href = "../Myaccountpage/account.html";
}