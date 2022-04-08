import React, {useState} from 'react';

const initState = ['Bruce', 'Wayne']

const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)

    const handleclick =() =>{
       // persons.push('Clark')
       // persons.push('kent') 
      // setPersons(persons)

      const newPersons=[...persons]
      newPersons.push('Clark')
      newPersons.push('kent')
      setPersons(newPersons)
    }

    console.log('ArrayUseState Render')
  return (
    <div>
      <button onClick={handleclick}>click</button>
      {
          persons.map(person => (
              <div key={person}>{person}</div>
          ))

      }
    </div>
  );
}

export default ArrayUseState;
