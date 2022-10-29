import React from 'react'
/*function component */
//function Greet(){
 //   return <h1>Hello World</h1>
//}
/*
export const Greet=(props)=>{
    return(
        <div>
            <h1>Hello {props.name} a.k.a {props.summoner}</h1>
            {props.children}
        </div>
    )
}*/
export const Greet=({name,summoner})=>{
    return(
        <div>
            <h1>Hello {name} a.k.a {summoner}</h1>
           
        </div>
    )
}
//export default Greet;