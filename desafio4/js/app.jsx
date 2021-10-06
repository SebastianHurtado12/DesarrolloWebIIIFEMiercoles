//clase constructora de objetos
class Taxi {
    constructor(tipoMotor, capacidad) {
        this.tipoMotor = tipoMotor;
        this.capacidad = capacidad;
    }
}
function ejemploObjetos() {
//...agregar las propiedades y los métodos
    const coche1= new Taxi("Diesel",40);
    const coche2= new Taxi("Gasolina",35);

//generar los alert()
    alert(`Se ha creado un objeto taxi con tipo de motor :${coche1.tipoMotor}`);
    alert(`Se ha creado un objeto taxi con tipo de motor :${coche2.tipoMotor}`);
    alert(`El coche 1 tiene una capacidad de ${coche1.capacidad} litros`);
    alert(`El coche 2 tiene una capacidad de ${coche2.capacidad} litros`);
}

//funcion que retorna una elementos html (SIEMPRE va contenido dentro de un div)
function CrearObjeto(){
    return <div> 
                <div id="cabecera">
                    <h2>Objetos</h2>
                    <h3>Propiedades y Métodos</h3>
                </div>
                <div id="pulsador" onClick={() => ejemploObjetos()}> Probar</div>
            </div>;
}

//renderiza la funcion anteriormente creada
ReactDOM.render(
    <CrearObjeto /> ,
    document.getElementById('root') //selecciono al elemento para cargar los elementos
);