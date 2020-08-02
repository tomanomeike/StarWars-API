import React, { useState, useEffect } from 'react';
import Person from './Person';

const PERSON_API_URL = 'https://swapi.dev/api/people/';

const PersonTable = () => {
  const [loading, setLoading] = useState(true);
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const deletePerson = (name) => {
    setPersons(persons.filter((person) => person.name !== name));
  };

  useEffect(() => {
    fetch(PERSON_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPersons(jsonResponse.results);
        setLoading(false);
      });
  }, []);
  return (
    <React.Fragment>
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
            <tbody key={`${index}-${person.name}`}>
              {/* <Person key={`${index}-${person.name}`} person={person} /> */}

              <tr>
                <td>{person.name}</td>
                <td>{person.birth_year}</td>
                <td>{person.gender}</td>
                <td>
                  <button
                    className='btn-delete'
                    onClick={() => deletePerson(person.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    </React.Fragment>
  );
};

export default PersonTable;
