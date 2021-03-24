import React from "react";
import Button from "./button";

class Operators extends React.Component{


 render(){ 
     return (
      <div className='actions'>
          <Button clickme={this.props.clickOperator}>+</Button>
          <Button clickme={this.props.clickOperator}>-</Button>
          <Button clickme={this.props.clickOperator}>/</Button>
          <Button clickme={this.props.clickOperator}>%</Button>
          <Button clickme={this.props.clickOperator}>*</Button>
     </div>
    );
  }
}
export default Operators;
  