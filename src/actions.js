import React from "react";
import Button from "./button";

class Operators extends React.Component{


 render(){ 
     return (
      <div  className='rightFlex' >
          <Button className="square btn btn-primary" clickme={this.props.clickOperator}>+</Button>
          <Button className="square btn btn-primary" clickme={this.props.clickOperator}>-</Button>
          <Button className="square btn btn-primary" clickme={this.props.clickOperator}>%</Button>
          <Button className="square btn btn-primary" clickme={this.props.clickOperator}>*</Button>
     </div>
    );
  }
}
export default Operators;
  