class Product  {

    constructor(ref, name, character, material, price, imgJewelUrl, imgMovieUrl)  {
        this.ref = ref
        this.name = name
        this.character = character
        this.material = material
        this.price = price
        this.imgJewelUrl = imgJewelUrl
        this.imgMovieUrl = imgMovieUrl
    }


createHtml ()  {
    let formattedPrice = this.price.toLocaleString();

    return  `
    <div class="Subproduct-1" >
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
                    
                </div>               
            </div>
    `;
}

}

