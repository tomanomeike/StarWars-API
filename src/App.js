import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import PersonTable from './components/PersonTable';
import './App.css';
import AddPersonForm from './components/AddPersonForm';

const PERSON_API_URL = 'https://swapi.dev/api/people/';

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
 

  const addPerson = (person) => {
   setPersons([...persons, person]);
    console.log(persons)
  };

  useEffect(() => {
    fetch(PERSON_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPersons(jsonResponse.results);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://swapi.dev/api/people/?search=${searchValue}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === 'True') {
          setPersons(jsonResponse.results);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div className='App'>
      <Search search={search} />
      <PersonTable persons={persons}/>
      <AddPersonForm addPerson={addPerson} />
    </div>
  );
};

export default App;
