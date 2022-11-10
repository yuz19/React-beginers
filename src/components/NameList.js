import React from 'react'
import Person from './Person'

function NameList(){
  const names=['Bruce','Clark','Diana']
  const nameList=names.map(name => <h2>{name}</h2>)
  const persons=[
    {
      id:1,
      name:'Bruce',
      age:18,
      skill:'REACT'
    },
    {
      id:2,
      name:'Clark',
      age:19,
      skill:'Angular'
    },
    {
      id:3,
      name:'Diana',
      age:20,
      skill:'Vue'
    }
  ]
  const personList=persons.map(person=><Person key={person.id} person={person}/>)
  return (
    <div> 
      {personList}
    </div>
  )
}

export default NameList
