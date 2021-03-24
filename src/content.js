import React from "react";
import Numbers from './numbers'
import Operators from './actions'
class Body extends React.Component{

 render(){ 
     return (
      <div className="body">
        <Numbers clickNumber={this.props.changeVal}></Numbers>
        <Operators clickOperator={this.props.changeVal}></Operators>
      </div>
    );
  }
}
export default Body;