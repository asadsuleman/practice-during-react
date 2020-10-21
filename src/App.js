import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Mycomponent1 from './MyComponent'

import Header from './components/header';
import Footer from './components/footer';

function App() {
  
  const [count , setCount]= useState(0);
  return (
    <div className="App">
    <Mycomponent1 text="its a text parent to child"></Mycomponent1>

    <Header/>
    <Footer/>
    
        {/* state and hooks */}
        <h1>Count : {count}</h1>

       <button onClick={() => setCount(count +1)}>Increase Count</button>
        <button onClick={() => setCount(count - 1)}>decrease Count</button>


    </div>
  );
}

export default App;
