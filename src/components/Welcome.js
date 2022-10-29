import React,{ Component } from "react";
/*Class Component */
class Welcome extends Component{
render(){
    return <h1>Class Component:{this.props.name} a.k.a {this.props.summoner}</h1>; 
}
}
export default Welcome;