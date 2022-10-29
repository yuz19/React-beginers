import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';

import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
        {/* <Hello/>*/}  
        {/* <Welcome/>
        <Greet name="rayane" summoner="rayanexrayane"><p>je suis un gros noob</p></Greet>
        <Greet name="Nabil" summoner="nabil19"/>
        <Welcome name="Nabil" summoner="nabil19"/>
        <Message/>*/} 
        <Counter/>
    </div>
  );
}

export default App;
