let listOfProducts = []

function fetchAndCreateAllProducts() {
    const user = JSON.parse(localStorage.getItem('login_success')) || [];

    let userbuy = JSON.parse(localStorage.getItem(`buy_${user.email}`)) || [];
    
    
    for(let i = 0; i < userbuy.length; i++) {
        let object = userbuy[i]
        let ref = object.ref
        let name = object.name
        let character = object.character
        let material = object.material
        let price = object.price
        let imgJewelUrl = object.imgJewelUrl
        let imgMovieUrl = object.imgMovieUrl
        let product = new Product(ref, name, character, material, price, imgJewelUrl, imgMovieUrl)
        listOfProducts.push(product)
    }
}

function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i].createHtml();
        container.innerHTML += product;
    }

}
const user = JSON.parse(localStorage.getItem('login_success'));
if (user != null) {
    const nameHTML = document.getElementById("nombre")
    const emailHTML = document.getElementById("email")

    const nameUser = user.firstName
    const emailUser = user.email
    nameHTML.innerHTML = nameUser
    emailHTML.innerHTML = emailUser

}

 fetchAndCreateAllProducts()
 fillScreenWithProducts () 
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
function redirectToLogin() {
    window.location.href = "../Login/login.html";
    localStorage.setItem('login_success', false);
}

