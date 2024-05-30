const params = new URLSearchParams(window.location.search)
const refFromUrl = params.get('id')

let productF = null

async function searchProduct(){
    let product = null
    await fetch('https://raw.githubusercontent.com/NikSala10/Charmeyn-EntregaFinal/main/data.json') // Replace with your actual API endpoint
        .then(response => { 
            if (!response.ok) {
                throw new Error('Error en la red');
              }
              return response.json()})
        .then(data => {
            for(let i = 0; i < data.length; i++) {
                const obj = data[i]
                if(obj.ref == refFromUrl) {
                    product = new Product(obj.ref, obj.name, obj.character, obj.price, obj.material, obj.description, obj.category, obj.imgJewelUrl, obj.imgMovieUrl)
                    productF = product
                }
            }   
        })
        .catch(error => console.error('Error fetching data:', error));
    
    return product
}
async function createView() {
    const product = await searchProduct();
    if(product) {
       const container  = document.querySelector(".contenedor-imagen-info")
       container.innerHTML = product.createHtmlDetalle()

    } else {
        alert("No hay coincidencias para el usuario: " + idFromUrl)
    }
}

createView()


let compraBoton = document.getElementById("compra-boton");
if (compraBoton) {
    compraBoton.addEventListener("click", showNoticeSuccessfulPurchase());
}

async function showNoticeSuccessfulPurchase() {
    const product = await searchProduct();
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
            const avisoCompra = document.getElementById("aviso-compra");
            avisoCompra.classList.remove("aviso-compra-oculto");
            avisoCompra.classList.add("aviso-compra-visible");

            setTimeout(function() {
                avisoCompra.classList.remove("aviso-compra-visible");
                avisoCompra.classList.add("aviso-compra-oculto");
            }, 4000);
            let buyProduct = JSON.parse(localStorage.getItem(`buy_${emailUser}`)) || [];
            let isbuyProduct = buyProduct.find(p => p.ref === product.ref)
            if (!isbuyProduct) {
                buyProduct.push({
                ref: product.ref,
                name: product.name,
                character: product.character,
                price: product.price,
                material: product.material,
                description: product.description,
                category: product.category,
                imgJewelUrl: product.imgJewelUrl,
                imgMovieUrl: product.imgMovieUrl
            });
            localStorage.setItem(`buy_${emailUser}`, JSON.stringify(buyProduct));
            }
            
            
        } else {
            alert("Usuario no encontrado. Por favor, registrese o inicie sesión.");
        }
    } else {
        alert("No se pudo encontrar el producto para añadir a favoritos.");
    }
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
        else{
            window.location.href = "../Login/login.html";
        }
}

function redirectToLogin() {

    if (loginSuccess || registerSuccess) {
        window.location.href = "../Myaccountpage/account.html";
    }
    else{
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