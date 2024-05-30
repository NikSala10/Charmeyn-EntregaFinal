let listOfProducts = []
async function fetchAndCreateAllProducts() {
    await fetch('https://raw.githubusercontent.com/NikSala10/Charmeyn-EntregaFinal/main/data.json') 
        .then(response => { 
            if (!response.ok) {
                throw new Error('Error en la red');
              }
              return response.json()})
        .then(data => {
            
            for(let i = 0; i < data.length; i++) {
                let object = data[i]
                let ref = object.ref
                let name = object.name
                let character = object.character
                let material = object.material
                let category = object.category
                let type = object.type
                let news = object.news
                let price = object.price
                let imgJewelUrl = object.imgJewelUrl
                let imgMovieUrl = object.imgMovieUrl
                let product = new Product(ref, name, character, material, category, type, news, price, imgJewelUrl, imgMovieUrl)
                listOfProducts.push(product)
            }
            fillScreenWithProducts(); 
        })
        .catch(error => console.error('Error fetching data:', error));
}


function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i]
        if (product.news == true) {
            container.innerHTML += product.createHtml();
        }   
    }
}


 fetchAndCreateAllProducts()

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
    window.location.href = "news.html";
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
if (loginSuccess) {
    const user = JSON.parse(localStorage.getItem('login_success')) || [];
    let userFavorites = JSON.parse(localStorage.getItem(`favorites_${user.email}`)) || [];
    let count = 0
   
    const numberCount = document.getElementById("carroContador")
    numberCount.innerHTML =  
    `<div class="circulo">
        <p id="numero">${userFavorites.length}</p>
    </div> `
}