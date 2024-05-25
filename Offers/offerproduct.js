class Product  {

    constructor(ref, name, character, material, category, type, news, price, offer, imgJewelUrl, imgMovieUrl)  {
        this.ref = ref
        this.name = name
        this.character = character
        this.material = material
        this.category = category
        this.type = type
        this.news = news
        this.price = price
        this.offer = offer
        this.imgJewelUrl = imgJewelUrl
        this.imgMovieUrl = imgMovieUrl
    }


createHtml ()  {
    let formattedPrice = this.price.toLocaleString();

    return  `
    <div class="Subproduct-1">
                <div class="recuadro">
                    <div class="sub">
                        <div class="contenido">
                            <div class="slider">

                                <input type="radio" name="slider" id="${this.ref}_1" checked>
                                <input type="radio" name="slider" id="${this.ref}_2">
                            
                                <div class="content">
                                    <div class="firstslide"><img src="../Mainpage/${this.imgJewelUrl}" alt=""></div>
                                    <div class="secondslide"><img src="../Mainpage/${this.imgMovieUrl}" alt=""></div>
                                    
                                </div>

                                <div class="buttons">
                                    <label for="${this.ref}_1"></label>
                                    <label for="${this.ref}_2"></label>
                    
                                </div>
                    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info-product">
                    <p class="nombre-producto">${this.name}</p>
                    <p class="character">${this.character}</p>
                    <p class="description-product">${this.material}</p>
                    <p class="precio">$${formattedPrice}</p>
                </div>
                <div class="button_car">
                    <div class="button">
                        <button onclick="seeDetail(${this.ref})" class="boton"> <span>Buy</span></button>
                    </div>
                    <svg onclick= "redirectToFavorite()" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                    </svg>
                </div>               
            </div>
    `;
}

}

