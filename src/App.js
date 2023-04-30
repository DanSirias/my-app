//ALL OF THE DISPLAY CODE WILL EXIST IN THIS FILE
//JSX means is a function that send html to the main page
//Component returns HTML must start with CAPS

import './App.css';

function App() {
  const name =  <h1>Daniel</h1>; 
  const age = <h2> 34</h2>; 
  const email = <h3> daniel.sirias@outlook.com</h3>
  const user = (
    <div>{name}{age}{email}</div>
  );

  return (<div className="App">Howdy World
    <User />
  </div>
  );
}

const User = (props) => {

  return (<div><h1>Daniel</h1><h2> 34</h2><h3> daniel.sirias@outlook.com</h3></div>); 
  
};

export default App;
