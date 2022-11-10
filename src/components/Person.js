import React from 'react'

const Person = ({person}) => {
  return (
    <div>
      <h2>I am {person.name}.I am {person.age} years old.i know {person.skill} </h2>
    </div>
  )
}

export default Person
