import React, { useState, useEffect } from 'react';
import Person from './Person';

const PERSON_API_URL = 'https://swapi.dev/api/people/';

const PersonTable = (props) => {
  const [loading, setLoading] = useState(true);
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(PERSON_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPersons(jsonResponse.results);
        setLoading(false);
      });
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Birth date</th>
          <th>Gender</th>
          <th>Action</th>
        </tr>
      </thead>

      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className='errorMessage'>{errorMessage}</div>
      ) : (
        persons.map((person, index) => (
          <Person key={`${index}-${person.name}`} person={person}/>
        ))
      )}
    </table>
  );
};

export default PersonTable;
