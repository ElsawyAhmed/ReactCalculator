import React from "react";

class Button extends React.Component {
    constructor(){
        super()
    }

    passmyval=(e)=>{

        var myvalue = e.target.innerText
        if(myvalue==='='){
            this.props.clickme()
        }
        else if(myvalue ==='c'){
            this.props.clickme()
        }
        else{
        this.props.clickme(myvalue)
        }
    }



    render(){ 
     return (
        <button className={this.props.className} onClick={this.passmyval} do={this.props.perform} >
            {this.props.children}
        </button>
        );
  }
}
export default Button;
  