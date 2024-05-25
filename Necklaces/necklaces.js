let listOfProducts = []

function createAllProducts ()  {
    for(let i = 0; i < data.length; i++)  {
        let object = data [i]
        let ref = object.ref
        let name = object.name
        let character = object.character
        let material = object.material
        let type = object.type
        let category = object.category
        let price = object.price
        let imgJewelUrl = object.imgJewelUrl
        let imgMovieUrl = object.imgMovieUrl
        let product = new Product (ref, name, character, material, category, type, price, imgJewelUrl, imgMovieUrl)
        listOfProducts.push(product)
    }
}

function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
       
        const product = listOfProducts[i]
        if (product.type == "Necklace") {
            container.innerHTML += product.createHtml();
        }
        

        console.log(product);
    }
}


 createAllProducts()
 fillScreenWithProducts()

 function seeDetail(ref) {
    
    window.location.href = "../Detalle/detalle.html?id="+ref
}
function redirectToIndex() {
    window.location.href = "../index.html";
}

function redirectToNecklaces() {
    window.location.href = "necklaces.html";
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
function redirectToLogin() {
    window.location.href = "../Login/login.html";
}