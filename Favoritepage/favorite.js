let listOfProducts = []

function createAllProducts () {
    let object5 = data[5];
    let object8 = data[8];
    let object10 = data[10];
    let object13 = data[13];

    let ref5 = object5.ref;
    let name5 = object5.name;
    let character5 = object5.character;
    let material5 = object5.material;
    let price5 = object5.price;
    let imgJewelUrl5 = object5.imgJewelUrl;
    let imgMovieUrl5 = object5.imgMovieUrl;
    let product5 = new Product(ref5, name5, character5, material5, price5, imgJewelUrl5, imgMovieUrl5);

    let ref8 = object8.ref;
    let name8 = object8.name;
    let character8 = object8.character;
    let material8= object8.material;
    let price8 = object8.price;
    let imgJewelUrl8 = object8.imgJewelUrl;
    let imgMovieUrl8 = object8.imgMovieUrl;
    let product8 = new Product(ref8, name8, character8, material8, price8, imgJewelUrl8, imgMovieUrl8);

    let ref10 = object10.ref;
    let name10 = object10.name;
    let character10 = object10.character;
    let material10 = object10.material;
    let price10 = object10.price;
    let imgJewelUrl10 = object10.imgJewelUrl;
    let imgMovieUrl10 = object10.imgMovieUrl;
    let product10 = new Product(ref10, name10, character10, material10, price10, imgJewelUrl10, imgMovieUrl10);

    let ref13 = object13.ref;
    let name13 = object13.name;
    let character13 = object13.character;
    let material13 = object13.material;
    let price13 = object13.price;
    let imgJewelUrl13 = object13.imgJewelUrl;
    let imgMovieUrl13 = object13.imgMovieUrl;
    let product13 = new Product(ref13, name13, character13, material13, price13, imgJewelUrl13, imgMovieUrl13);

    listOfProducts.push(product5, product8, product10, product13);
}


function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i].createHtml();
        container.innerHTML += product;
        console.log(product);
    }
}


 createAllProducts()
 fillScreenWithProducts()

 function seeDetail(ref) {
    
    window.location.href = "../Detalle/detalle.html?id=" + ref;
}

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
    window.location.href = "favorite.html";
}
function redirectToMyAccount() {
    window.location.href = "../Myaccountpage/account.html";
}

