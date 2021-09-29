/*Declaracion de objeto*/
let personas={
    nombre:'Sebastian Hurtado',
    edad:17,
    print:()=>{
        return `Mi nombre es ${personas.nombre} y tengo ${personas.edad} años`
    }
};
/*renderizacion de elementos*/
ReactDOM.render(
    <h1 className="text-danger">{personas.print()}</h1>,
    document.getElementById('root')
);

