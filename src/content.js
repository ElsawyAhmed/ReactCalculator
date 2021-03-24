import React from "react";
import Numbers from './numbers'
import Operators from './actions'
class Body extends React.Component{

 render(){ 
     return (
      <div className="gridbody"> 
        <div>
        <Numbers clickNumber={this.props.changeVal}></Numbers>
        </div>
        <div>
        <Operators clickOperator={this.props.changeVal}></Operators>
        </div>
      </div>
    );
  }
}
export default Body;