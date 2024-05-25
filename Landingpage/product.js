class Product  {

    constructor(imgJewelUrl,price, character)  {
        this.imgJewelUrl = imgJewelUrl
        this.price = price
        this.character = character   
    }


createHtml ()  {
    let formattedPrice = this.price.toLocaleString();

    return  `
    <div class="Subproduct-1" >
                <div class="cuadro1">
                    <img class="product1" src="./Mainpage/${this.imgJewelUrl}" alt="">
                </div>
                <div class="info-product">
                    <p class="precio">$${formattedPrice}</p>
                    <p class="nombre-producto">${this.character}</p>
                    <hr class="linea-text">
                </div>
                <div class="boton-compra">
                    <button class="button2" onclick="redirectToMain()">
                        <span class="circle">
                            <span class="icone arrow"></span>
                        </span>
                        <span class="text">See More</span>
                    </button>   
                </div>               
            </div>
    `;
}
        
}