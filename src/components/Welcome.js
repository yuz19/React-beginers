import React,{ Component } from "react";
/*Class Component */
class Welcome extends Component{

    render(){
        const {name,summoner}=this.props;
        //return <h1>Class Component:{this.props.name} a.k.a {this.props.summoner}</h1>; 
        return <h1> { name} a.k.a { summoner}</h1>; 

    }
}
export default Welcome;