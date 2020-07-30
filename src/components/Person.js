import React, { useState } from 'react';

const Person = ({ person }) => {
  const [persons, setPersons] = useState([]);

  const deletePerson = (name) => {
    setPersons(persons.filter((person) => person.name !== name));
  };

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.birth_year}</td>
      <td>{person.gender}</td>
      <td>
        <button onClick={() =>person.deletePerson(person.name)}>Delete</button>
      </td>
    </tr>
  );
};

export default Person;
