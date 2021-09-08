/*Creo e inicializo el array que posee el nombre*/
let nombres=[
    "Juan","Pepe","Luis","Roberto","Ricardo",
    "Sebastian","Matias"
]
/*Creo la funcion*/
function render(){
    /*obtengo el elemento html para su posterior manipulamiento*/ 
    let contenedor= document.getElementById('root')
    /*para cada entrada que posee el array realizo lo siguiente*/ 
    nombres.forEach(nom=> 
        /*inserto el siguiente codigo html como hijo del elemento html obtenido*/ 
        contenedor.innerHTML+=
            `<div class='card col-4' style='width: 20rem;'> 
                <div class='div-body'>
                    
                    <h4 class='card-title'>${nom}</h4> 
                    <p class='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit id autem voluptatem quisquam. Sequi </p>
                    <a href='#' class='btn'>GO SOMEWHERE</a>

                </div>
            </div>`         
    );
}
/*Llamo a la funcion */
render();


