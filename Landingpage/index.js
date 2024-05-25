let listOfProducts = []

function createAllProducts () {
    let object0 = data[0];
    let object13 = data[13];

    let imgJewelUrl0 = object0.imgJewelUrl
    let price0 = object0.price;
    let character0 = object0.character;
    let product0 = new Product(imgJewelUrl0,price0, character0);

    let imgJewelUrl13 = object13.imgJewelUrl
    let price13 = object13.price;
    let character13 = object13.character;
    let product13 = new Product(imgJewelUrl13,price13, character13);

    listOfProducts.push(product0, product13);
}

function fillScreenWithProducts ()  {
    const container = document.getElementById("seccion-productos")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i].createHtml()
        container.innerHTML += product;
    }
}


 createAllProducts()
 fillScreenWithProducts()


 function redirectToIndex() {
    window.location.href = "index.html";
}

 function redirectToMain() {
    window.location.href = "./Mainpage/main.html";
}
function redirectToNecklaces() {
    window.location.href = "./Necklaces/necklaces.html";
}
function redirectToRings() {
    window.location.href = "./Rings/rings.html";
}
function redirectToNews() {
    window.location.href = "./News/news.html";
}
function redirectToOffers() {
    window.location.href = "./Offers/offers.html";
}
function redirectToFilms() {
    window.location.href = "./Films/films.html";
}
function redirectToSeries() {
    window.location.href = "./Series/series.html";
}
function redirectToFavorite() {
    window.location.href = "./Favoritepage/favorite.html";
}
function redirectToLogin() {
    window.location.href = "./Login/login.html";
}



document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    const input = document.getElementById("forminpt");
    const form = document.getElementById("newsletterForm");
    const successMessage = document.getElementById("successMessage"); 
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (validateEmail(input.value)) { 
            successMessage.style.display = "block"; 
            input.value = ''; 
        }
    });

    input.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (validateEmail(input.value)) { 
                successMessage.style.display = "block"; 
                input.value = ''; 
            }
        }
    });
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if (validateEmail(input.value)) { 
            successMessage.style.display = "block"; 
            input.value = ''; 
        }
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});