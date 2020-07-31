import React, { useState } from 'react';

const AddPersonForm = (props) => {
  const initialFormState = { name: '', birth_year: '', gender: '' };
  const [person, setPerson] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.birth_year && person.gender) {
      handleChange(e, person.addPerson(person));
    }
  };

  return (
    <form>
      <label>Name</label>
      <input
        className='u-full-width'
        type='text'
        name='name'
        value={person.name}
        onChange={handleChange}
      />
      <label>Birth year</label>
      <input
        className='u-full-width'
        type='text'
        name='birth_year'
        value={person.birth_year}
        onChange={handleChange}
      />
      <label>Gender</label>
      <input
        className='u-full-width'
        type='text'
        name='gender'
        value={person.gender}
        onChange={handleChange}
      />
      <button type='submit' className='button-primary' onClick={handleSubmit}>
        Add new
      </button>
    </form>
  );
};

export default AddPersonForm;
