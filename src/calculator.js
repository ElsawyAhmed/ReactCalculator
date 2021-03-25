import logo, { ReactComponent } from './logo.svg';
import './calculator.css';
import React from 'react'
import Body from './content'
import Screen from './screen'
import Button from './button';
import {LeftBody,RightBody} from './content';
class Calculator extends React.Component{
  constructor(){
    super()
    this.state = {
      input : '',
      output : ''
    }
  }
  

    changeInput=(newVal)=>{
      let currentInput = this.state.input + newVal
      this.setState({input:currentInput})
    }

    returnOut=()=>{
      return this.state.output
    }
    evaluate=()=>{
      try{
      this.state.output = eval(this.state.input)
      }
      catch(e){
        this.state.output='Invalid Expression'
      }
      this.setState({output:this.state.output, output:this.state.output})
 
    }
    clear=()=>{
      this.setState({input:'',output:''})
    }
    absolute=()=>{
      this.setState({output:Math.abs(this.state.output)})
    }

  render() {
    return (

      <div className="calculator row">
        <div className="col-sm-2 col-md-3 col-lg-3"></div>
        <div className="col-sm-8 col-md-4 col-lg-7">
          <Screen className="thumbnail" result={this.returnOut()} screenInput={this.state.input}></Screen>
          <div className='inputs'>
              <Button className="square btn-danger"clickme={this.clear}>C</Button>
              <Button className="square btn-warning" clickme={this.absolute}>Abs</Button>
              <Button className="btn btn-info" clickme={this.changeInput}>00</Button>
              <LeftBody changeVal={this.changeInput}></LeftBody>
              <Button className="btn btn-success"  clickme={this.evaluate}>=</Button>
              <RightBody changeVal={this.changeInput}></RightBody>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
