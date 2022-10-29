import React from 'react'
/*function component */
//function Greet(){
 //   return <h1>Hello World</h1>
//}

export const Greet=(props)=>{
    return(
        <div>
            <h1>Hello {props.name} a.k.a {props.summoner}</h1>
            {props.children}
        </div>
    )
}
//export default Greet;