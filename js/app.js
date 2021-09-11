/*Creo e inicializo el array que posee el nombre*/
let nombres=[
    "Juan","Pepe","Luis","Roberto","Ricardo",
    "Sebastian","Matias"
]
/*Creo la funcion*/
function render(){
    /*obtengo el elemento html para su posterior manipulamiento*/ 
    let contenedor= document.getElementById('root');
    /*para cada entrada que posee el array realizo lo siguiente*/ 
    nombres.forEach(nom=> 
        /*inserto el siguiente codigo html como hijo del elemento html obtenido*/ 
        contenedor.innerHTML+=
        `<div class='card col-4' >
        <img src='./src/JsLogo.png' class='card-img-top' alt='Imagen'>
        <div class='card-body'>
            <h5 class='card-title'>${nom}</h5>
            <p class='card-text'></p>
            <a href='#' class='btn btn-primary'>Go somewhere</a>
        </div>
    </div>`        
    );
}
/*Llamo a la funcion */
render();