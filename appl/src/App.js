import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h2>Hello World from HSBC</h2>

const Image = (props) => {
  let {src1,  title } = props;
  src1 = src1 || 'https://www.w3schools.com/html/pic_trulli.jpg';
  title = title || 'HSBC training Demo';
  return (
    <img src={src1} alt={title}  width="500" height="333" />
  
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - from HSBC !!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <Hello />
         <Image src1='title'/>

 
        <Image src1='https://www.w3schools.com/html/img_girl.jpg'  />
       
      </div>
    );
  }
}

export default App;
