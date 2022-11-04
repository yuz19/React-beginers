import React, { Component } from 'react'

export class UserGreeting extends Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
    
  }
 


  render() {
    /*
    if(!this.state.isLoggedIn){
        return (
            <div>
                 <div>welcome guest</div>
               
            </div>
        )
    }else{
        return (
            <div>
                   <div>welcome nabil19</div>
                   
            </div>
          )
    }*/
    /*element variables 
    let message
    if(this.state.isLoggedIn){
        message=<div>Welcome nabil19</div>
    }else{
        message=<div>Welcome guest</div>
    }
    return <div>{message}</div>
    */
    return(
        /*this.state.isLoggedIn ?
        <div>welcome nabil19</div>:
        <div>welcome guest</div>*/
        this.state.isLoggedIn && <div>welcome nabil19</div>
    )

  }
}

export default UserGreeting
