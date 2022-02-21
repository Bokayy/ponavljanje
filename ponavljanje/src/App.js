import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
/* import MyComponentHello from './components/Hello.js' */
import Hello  from './components/Hello.js';
import Welcome from './components/Welcome.js'

/* function App() {
  return (
    <div className="App">
      {Hello()}
    </div>
  );
} */

class App extends Component{
  render(){
    return( 
      <div className="App">
      {/* <MyComponentHello /> */}
      <Hello ime = "Boris" prezime="Milojevic">
        Učimo React
      </Hello>
      <Hello ime = "Boris" prezime="Milojevic" />
      <Welcome ime="Boris" prezime="Milojevic" >
        <p>učimo React</p>
      </Welcome>
      <Welcome ime="Boris" prezime="Milojevic" ></Welcome>
    </div>
    )
  }
}

export default App;
