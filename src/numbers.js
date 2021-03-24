import React from "react";
import Button from "./button";
import './numbers.css'

class Numbers extends React.Component {

 render(){ 
     return (
      <div className='numbers-grid'>
    
        <div>
            <Button clickme={this.props.clickNumber}>1</Button>
            <Button clickme={this.props.clickNumber}>2</Button>
            <Button clickme={this.props.clickNumber}>3</Button>
          </div>
          <div>
            <Button clickme={this.props.clickNumber}>4</Button>
            <Button clickme={this.props.clickNumber}>5</Button>
            <Button clickme={this.props.clickNumber}>6</Button>
            </div>
          <div>
            <Button clickme={this.props.clickNumber}>7</Button>
            <Button clickme={this.props.clickNumber}>8</Button>
            <Button clickme={this.props.clickNumber}>9</Button> 
          </div>     
     
        </div>
    );
  }
}
export default Numbers;
  