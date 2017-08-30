
import React from 'react';

class Calculate extends React.Component{
	constructor(){
		super();
    this.state = {
    	input1:"",input2:""};
	}
  
	
  setage1(e){
  const input1 = e.target.value;
  this.setState({input1 : input1});
 }
 setage2(e){
  const input2 = e.target.value;
  this.setState({input2 : input2});
 }
	render(){
		return(
			<div>
			
				<h1> Test Calculate </h1>
				
        		
        		
        
        
        <input onChange={this.setage1.bind(this)}/>
        <input onChange={this.setage2.bind(this)}/>
		
			<div>
			input1 : {this.state.input1}
			</div>
			<div>
			input2 : {this.state.input2}
			</div>
			
			รวม : {this.state.input1+this.state.input2}
			</div>
			
		);
	}
}



export default Calculate;