let listOfProducts = []

const params = new URLSearchParams(window.location.search)
const refFromUrl = params.get('id')

async function searchProduct(refFromUrl){
    let product = null
    await fetch('https://raw.githubusercontent.com/NikSala10/Charmeyn-EntregaFinal/main/data.json') 
        .then(response => { 
            if (!response.ok) {
                throw new Error('Error en la red');
              }
              return response.json()})
        .then(data => {
            for(let i = 0; i < data.length; i++) {
                const obj = data[i]
                if(obj.ref == refFromUrl) {
                    product = new Product(obj.ref, obj.name,obj.character, obj.material, obj.price,  obj.imgJewelUrl, obj.imgMovieUrl)
                    productF = product
                }
            }   
        })
        .catch(error => console.error('Error fetching data:', error));
    
    return product
}
async function saveFavoriteProduct(refFromUrl) {
    const product = await searchProduct(refFromUrl);
    if (product) {
        const user = JSON.parse(localStorage.getItem('login_success'));
        if (!user) {
            alert("Por favor, inicie sesión primero.");
            return;
        }
        const emailUser = user.email;
        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const isUserRegistered = Users.find(u => u.email === emailUser);
        
        if (isUserRegistered) {
            let userFavorites = JSON.parse(localStorage.getItem(`favorites_${emailUser}`)) || [];
            let isProductFavorites = userFavorites.find(p => p.ref === product.ref)
            if (!isProductFavorites) {
                userFavorites.push({
                ref: product.ref,
                name: product.name,
                character: product.character,
                material: product.material,
                price: product.price,
                category: product.category,
                imgJewelUrl: product.imgJewelUrl,
                imgMovieUrl: product.imgMovieUrl
            });
            localStorage.setItem(`favorites_${emailUser}`, JSON.stringify(userFavorites));
            }
            
            
        } else {
            alert("Usuario no encontrado. Por favor, registrese o inicie sesión.");
        }
    }
}
saveFavoriteProduct(refFromUrl)

function createAllProducts () {
    const user = JSON.parse(localStorage.getItem('login_success')) || [];
    let userFavorites = JSON.parse(localStorage.getItem(`favorites_${user.email}`)) || [];
    
    console.log(userFavorites);
    for(let i = 0; i < userFavorites.length; i++) {
        let object = userFavorites[i]
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

const loginSuccess = JSON.parse(localStorage.getItem('login_success'));
const registerSuccess = JSON.parse(localStorage.getItem('register_success'));

function redirectToFavorite() {
    if (loginSuccess || registerSuccess) {
        window.location.href = "../Favoritepage/favorite.html";
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

