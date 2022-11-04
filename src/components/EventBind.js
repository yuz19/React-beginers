import React, { Component } from 'react'

export class EventBind extends Component {
/* Binding Event Handlers (state+handler) */
constructor(props) {
  super(props)

    this.state = {
        message:'Hello'
    }
    // third methode : this.clickHandler=this.clickHandler.bind(this)
  }

 
 
   clickHandler=()=>{
    this.setState({
        message:'bye'
    })
   }/* for first and second and third
   clickHandler(){
        this.setState({
        message:'bye'
        })
        console.log(this)
    }*/
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                 {/*First methode: <button onClick={this.clickHandler.bind(this)}>Click</button>*/}
                {/* second methode: <button onClick={()=>this.clickHandler()}>Click</button>*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
            )
    }
}

export default EventBind
