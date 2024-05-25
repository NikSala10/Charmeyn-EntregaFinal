let listOfProducts = []

function createAllProducts () {
    let object8 = data[8];
    let object13 = data[13];

    let ref8 = object8.ref;
    let name8 = object8.name;
    let character8 = object8.character;
    let material8 = object8.material;
    let price8 = object8.price;
    let imgJewelUrl8 = object8.imgJewelUrl;
    let imgMovieUrl8 = object8.imgMovieUrl;
    let product8 = new Product(ref8, name8, character8, material8, price8, imgJewelUrl8, imgMovieUrl8);


    let ref13 = object13.ref;
    let name13 = object13.name;
    let character13 = object13.character;
    let material13 = object13.material;
    let price13 = object13.price;
    let imgJewelUrl13 = object13.imgJewelUrl;
    let imgMovieUrl13 = object13.imgMovieUrl;
    let product13 = new Product(ref13, name13, character13, material13, price13, imgJewelUrl13, imgMovieUrl13);



    listOfProducts.push(product8, product13);
}

function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i].createHtml()
        container.innerHTML += product;
        console.log(product);
    }
}


 createAllProducts()
 fillScreenWithProducts()

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
    window.location.href = "account.html";
}

