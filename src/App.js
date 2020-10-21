import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Mycomponent1 from './MyComponent'

import Header from './components/header';
import Footer from './components/footer';

function App() {
  // 1 xxxxxxxxxxxxxxxxx//
  //using state and updating it 
  const [count , setCount]= useState(0);

// 2 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//making a dijital clock 
  let time = new Date().toLocaleTimeString();

  const [cTime , setCTime] = useState(time);

  const updateTime = () =>{
     let time = new Date().toLocaleTimeString();
     setCTime(time);

  }
  setInterval(updateTime,1000)
  // 3 xxxxxxxxxxxxxxxxxxxxxxxx
  // how to handel object in states

  const [state, setState] = useState({
    count : 0,
    name : "Asad",
    email : "abc@gmail.com"
  });

  return (
    <div className="App">
    <Mycomponent1 text="its a text parent to child"></Mycomponent1>

    <Header/>
    <Footer/>
    

    {/* xxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        {/* state and hooks */}
       <fieldset>
        <h1>Count : {count}</h1>

       <button onClick={() => setCount(count +1)}>Increase Count</button>
        <button onClick={() => setCount(count - 1)}>decrease Count</button>
        </fieldset>

{/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
        {/* digital clock */}

  <h1>Curennt Time: {cTime}</h1>


  {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

  <h1>Object Count : {state.count}</h1>
  <button onClick={()=>setState({...state , count: state.count + 1  })}>Increase Count</button>
  <button onClick={()=>setState({...state , count: state.count - 1  })}>Decrease Count</button>
  


    </div>
  );
}

export default App;
