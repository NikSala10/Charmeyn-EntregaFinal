class Product  {

    constructor(ref, name, character, price, material, description, category, imgJewelUrl, imgMovieUrl)  {
        this.ref = ref
        this.name = name
        this.character = character
        this.price =price
        this.material = material
        this.description = description
        this.category = category
        this.imgJewelUrl = imgJewelUrl
        this.imgMovieUrl = imgMovieUrl 
    }
 

createHtmlDetalle ()  {
    let formattedPrice = this.price.toLocaleString();
    let formattedIva = (this.price * 0.19).toLocaleString();
    let formattedTotalPrice = (this.price+(this.price * 0.19)).toLocaleString();

    return  `
    <div class= "info-prodt">
        <div class="imagen">
            <img src="../Mainpage/${this.imgJewelUrl}" alt="">
        </div>
        <div class="descripcion-producto">
            <h2>${this.name}</h2>
            <p id="character">${this.character}</p>
            <p id="categ">${this.category}</p>
            <p id="material">${this.material}</p>
            <p id="description">Description:</p>
            <p id="descript">${this.description}</p>
            <p id="ref">PRODUCT REF: ${this.ref}</p>
        </div>
    </div>
    <div class="contenedor-info">
        <div class="infor">
            <div class="infor-2">
                <svg id="basura" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                </svg>
                <div id="titulo">
                    <h2>Trolley</h2>
                </div>
                <div class="STANDARD">
                    <h3>FREE STANDARD SHIPPING!</h3>
                </div>
                <div class="Boleyn">
                    <h5 id="the">${this.name}              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Add</h5>
                </div>
                    <h4 class="Subtotal ">Subtotal: $${formattedPrice}</h4>
                    <h2 class="IVA">(Incluinding IVA):  $${formattedIva}</h2>                       
                    <h2 class="total">Total: $${formattedTotalPrice}</h2> 
                <div class="boton">
                    <input onclick= "showNoticeSuccessfulPurchase()"id="compra-boton" type="button" value="Confirm Purchase">
                </div>
                
        </div>
        <div id="aviso-compra" class="aviso-compra-oculto">¡Purchase made successfully!</div>
    </div>
    </div>
    
    `;
}
            
}