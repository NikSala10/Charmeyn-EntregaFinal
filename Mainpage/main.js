let listOfProducts = []

async function fetchAndCreateAllProducts() {
    await fetch('https://raw.githubusercontent.com/NikSala10/Charmeyn-EntregaFinal/main/data.json') 
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.length; i++) {
                let object = data[i]
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
            fillScreenWithProducts();
        })
        .catch(error => console.error('Error fetching data:', error));
}


function fillScreenWithProducts() {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = "";
    for(let i = 0; i < listOfProducts.length; i++) {
        const product = listOfProducts[i].createHtml()
        container.innerHTML += product;
    }
}

fetchAndCreateAllProducts();


 function seeDetail(ref) { 
    window.location.href = "../Detalle/detalle.html?id="+ref
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
const loginSuccess = JSON.parse(localStorage.getItem('login_success'));
const registerSuccess = JSON.parse(localStorage.getItem('register_success'));

function redirectToFavorite(refFromUrl) {
    if (loginSuccess || registerSuccess) {
    window.location.href = "../Favoritepage/favorite.html?id="+refFromUrl ;
    }
    else { 
        window.location.href = "../Login/login.html";
    }
}
function redirectToLogin() {
    if (loginSuccess || registerSuccess) {
        window.location.href = "../Myaccountpage/account.html";
        }
        else { 
            window.location.href = "../Login/login.html";
        }
}
