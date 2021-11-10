import './App.css';

function hacerPedido(a){
  alert(a);
}

function App() {
  //props
  let cantMesas=10;
  let liberado=true;
  let mesasDispo=[]

  for (let index = 1; index <= cantMesas; index++) {
    mesasDispo.push(`Mesa Nº${index}`);
  }
  //render del componente
  return (
    <div className="container">
      <h1 className="text-center">Lo de Pepe</h1>
      <div className="row">
        <div className="col-6">
          {
            mesasDispo.map((mesa,i)=>{
              return(
                <div
                    id={i+1}
                    className="text-center bg-success"
                    onClick={()=>hacerPedido(i+1)}>
                  <h3>{mesa}</h3>
                </div>
              );
            })
          }
        </div>
        <div className="col-6">

        </div>
        <div className="col-6">

        </div>
      </div>
    </div>
  );
}

export default App;
