import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/com';
import Footer from './component/fo';
import Calculate from './component/Calculator';
class App extends Component {

	constructor(){
		super();
    this.state = {name:" SuChaiJung",age : 21};
	}
  onClick(){
    this.setState({name : " I BA "});
  }
 
	getVal(){
		return "getVal";
	}
  setAge(e){
  const age = e.target.value;
  this.setState({age : age});
 }
  render() {

  	const myname = "Suchai";
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p>sdadsdasdasd</p>
        <div>Hello,{myname}</div>
        <div>Calculate 3+2 = {3+2}.</div>
        <div>Cell function {(() => {return 1234})()}</div>
        <div>Call getVal method:{this.getVal()}</div>
        
        <div>Myname Is : {this.state.name}</div>
        <div>Age Is : {this.state.age}</div>
        <button onClick={this.onClick.bind(this)}>Cilck name ok</button>
        <input onChange={this.setAge.bind(this)}/>
        <Header title="Test Title "name="Dear"/>
        <Header title={this.state.name} />
      	<Footer/>
        


        <Calculate/>

      </div>
    );
  }
}


export default App;
