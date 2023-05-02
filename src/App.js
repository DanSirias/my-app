//ALL OF THE DISPLAY CODE WILL EXIST IN THIS FILE
//JSX means is a function that send html to the main page
//Component returns HTML must start with CAPS

import './App.css';
//import {User} from './User'; 
import { useState } from "react"; 


//Ternary Operator 
//age >= 18 ? console.log("HEEH") : console.log("NO") // (? is if) (: is else) (&& if something is true)

//States
// Is a variable that holds data (string, numeric, boleen, )



function App() {

const [textColor, setShowText] = useState("black");

const toggleText = () => {

}

  return (
    <div className="App">
      <>
      <button class='btn-success' onMouseOver={()=>{setShowText(textColor === "black" ? "blue" : "black")}}> Show/Hide</button>
      <h1 style={{color: textColor}}>Howdy, my name is Daniel</h1>
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
