import React from "react";
import './comp_styles.css';
export class Talker extends React.Component{
    handleClick(){
        alert('OnClick show alert!');
        alert('OnClick show alert!');
    }
    render(){
        return (<>
                    <button className="altbtn" onClick={this.props.onClick}>Click Me</button>
                </>);
    }

}