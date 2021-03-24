import React from "react";

class Screen extends React.Component {

 render(){ 
     return (
      <div className="screen flex">
        <input value={this.props.result} type="text" name="txt" readonly="" />
        <input value={this.props.screenInput} type="text" name="txt" readonly=""  />
      </div>
    );
  }
}
export default Screen;
  