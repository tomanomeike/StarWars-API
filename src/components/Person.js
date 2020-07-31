import React, { useState } from 'react';

const Person = ({ person }) => {
  const [persons, setPersons] = useState([]);

  return (
    <tr>
      {/* <td>{person.name}</td>
      <td>{person.birth_year}</td>
      <td>{person.gender}</td> */}
    </tr>
  );
};

export default Person;
