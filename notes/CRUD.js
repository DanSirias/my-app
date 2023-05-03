//ALL OF THE DISPLAY CODE WILL EXIST IN THIS FILE
//JSX means is a function that send html to the main page
//Component returns HTML must start with CAPS

import './App.css';
//import {User} from './User'; 
import { useState } from "react"; 
import Toast from '../node_modules/react-bootstrap/Toast';
import Container from '../node_modules/react-bootstrap/Container';
import Button from '../node_modules/react-bootstrap/Button';
import {Task} from './task'; 
//Ternary Operator 
//age >= 18 ? console.log("HEEH") : console.log("NO") // (? is if) (: is else) (&& if something is true)

//States
// Is a variable that holds data (string, numeric, boleen, )

function App() {

  //Build the Array with Inputs from setNewTask
  const [todoList, setTodoList] = useState([]);

  //Get the input with another useState while User types
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value); //Obtains input from field and sends value to newTask useState
  };

  //... is adds existing array with new items
  const addTask = () => {
  const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, 
      taskName: newTask,
      completed: false, 
    };


    // const newTodoList = [...todoList, newTask]; //combines new input task with Array
    // setTodoList(newTodoList); //Updates the useState with the combines Tasks
    setTodoList([...todoList, task]); //Updates the useState with the combines Tasks
  };

 const deleteTask = (id) => {
    //const newTodoList = todoList.filter((task) => task !== taskName) //use instead of if/else function
    setTodoList(todoList.filter((task) => task.id !== id)) //shorten version
  };

 const completeTask = (id) => {
    //const newTodoList = todoList.filter((task) => task !== taskName) //use instead of if/else function
    //setTodoList(todoList.filter((task) => task.id !== id)) //shorten version
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return {...task, completed: true}
      }else {
        return task;
      }
    })
    )
  };

  return (

    <div className="App">
      <>
      <Container className="container-fluid mb-3 bg-secondary">
      <h1 className="header">My Todo List</h1>
      <br></br>
        <div className='addTask'>
          <input onChange={handleChange}/>
          <Button className='btn-primary' onClick={addTask}>Show Toast</Button>
        </div>
      </Container>



        <div className='list'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Complete</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
              {todoList.map((task) => {
                return (
                  <Task 
                    taskName = {task.taskName}
                    id = {task.id}
                    completed = {task.completed}
                    deleteTask = {deleteTask}
                    completeTask = {completeTask}
                  />
                );  
                
                
                
                // <tr>
                //   <th scope="row">{task.id}</th>
                //   <td>{task.taskName}</td>
                //   <td><Button className="btn-success" onClick={()=>completeTask(task.id)}>x</Button></td>{/* Add an arrow function when using params in func */}
                //   <td><Button className="btn-danger" onClick={()=>deleteTask(task.id)}>x</Button></td>{/* Add an arrow function when using params in func */}
                // </tr>
              })}
            </tbody>
          </table>
        </div>   
      </>
    </div>

  )
}

export default App;






















//Props

//<User name = "Becca" age={35} email="rbeccas"/>
//<Job salary = {90000} position="Senior Dev" company="Amazon"/>

/* const Job = (props) => {
  return (<div>
    <p>{props.salary}</p>
    <p>{props.position}</p>
    <p>{props.company}</p>
  </div>)
};


const User = (props) => {
  return (<div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <h3>{props.email}</h3></div>); 
};

Conditions: 
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1>This has color</h1>
      {isGreen && <button className="btn-success">This is a Button</button>}

Arrays: 

  const names = ["Dan", "Sam", "Dina"]; 
  const users =[
    {name: "Timmy", age: 3}, 
    {name: "Sammy", age: 7}, 
    {name: "Sally", age: 10} 
  ]

   {names.map((name, idx) => {
        return <h1 key={idx}>{name} hello</h1>
      })}

loops: 

  const planets = [
    { name: 'Mars', isGasPlanet: false }, 
    { name: 'Earth', isGasPlanet: false }, 
    { name: 'Jupiter', isGasPlanet: true }, 
    { name: 'Venus', isGasPlanet: false }, 
    { name: 'Neptune', isGasPlanet: true }, 
    { name: 'Uranus', isGasPlanet: true }
  ]; 

  return (
    <div className="App">
      {planets.map((planet, key) => planet.isGasPlanet && <h1>{planet.name}</h1>)}
    </div>
  )

States: 
import { useState } from "react"; 
const [age, setAge] = useState(3); 
const IncreaseAge = () => {
  setAge(age + 1); 
}

const [text, setText] = useState('') 
const handleInputChange = (e)=>{
  setText(e.target.value);
};
      <input type='text' onChange={handleInputChange}/>
      <span>{text}</span>


const [textColor, setShowText] = useState("black");

<button class='btn-success' onMouseOver={()=>{setShowText(textColor === "black" ? "blue" : "black")}}> Show/Hide</button>
<h1 style={{color: textColor}}>Howdy, my name is Daniel</h1>


*/
