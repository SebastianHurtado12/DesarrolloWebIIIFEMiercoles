import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newTask:"Modifica este texto",
      numero:0,
      task:[ "hola","chau"]
    }
    this.handleTaskChange=this.handleTaskChange.bind(this);
  }
  render(){
    return (
      <div className="container bg-dark">
        <div className="row">
          <h1 className="text-center text-white">Esto es un titulo</h1>
          <span></span>
          <div className="d-flex justify-content-center">
            <input onChange={this.handleTaskChange} 
                  type="text" 
                  className="w-50 text-center"/>
          </div>
          <h2 className="text-center text-white">{this.state.newTask}</h2>
          
       </div>  
      </div>
    
    );
  }
  handleTaskChange(e){
    this.setState({newTask:e.target.value});
  }
}
export default App;
