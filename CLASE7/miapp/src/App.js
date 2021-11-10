import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newTask:"",
      numero:0,
      tasks:[ "Nota 1","Nota 2"]
    }
    this.handleTaskChange=this.handleTaskChange.bind(this);
    this.addTask=this.addTask.bind(this);
    this.deleteTask=this.deleteTask.bind(this);
  }

  addTask(e){
    //impido que la pagina se recargue
    e.preventDefault();
    //obtengo las tareas viejas
    let newTasks=this.state.tasks;
    //agrego la nota nueva al array
    newTasks.unshift(this.state.newTask);
    //modifico el estado de las tareas y limpio el contenido del input 
    this.setState({tasks:newTasks,newTask:""});
  }
  
  deleteTask = (e)=> {

    console.log(e.target)
  }

  handleTaskChange(e){
    //modifico el estado de la tarea 
    this.setState({newTask:e.target.value});
  }
  render(){
    return (
      <div className="container ">
        <div className="row">
          <h1 className="text-center text-white">Task List</h1>
          <span></span>
          <form className="d-flex justify-content-center" onSubmit={this.addTask}>
            <input onChange={this.handleTaskChange} 
                  value={this.state.newTask}
                  placeholder="Escriba su tarea"
                  type="text" 
                  className="w-50"
                  id="input"/>
          </form>
        </div>
          <h2 className="text-center text-white">{this.state.newTask}</h2>
          <ul className=" d-flex flex-column  " >{
            this.state.tasks.map( (t,key) => {
              return <li className=" text-white" key={key} onClick={this.deleteTask} >{t}</li>
              })
            }
          </ul>
      </div>  
    );
  } 
}
export default App;
