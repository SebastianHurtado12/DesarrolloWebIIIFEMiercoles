const cargarListado=()=>{
    let url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    fetch(url)
        .then(resp=>resp.json())
        .then(data => {
            console.log(data.results);
        })
}
cargarListado();
