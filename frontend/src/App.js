import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('/api').then(res => setPeople(res.data)).catch(err => console.log(err));
  }, [])

  return (
    <>
      <h1>Hello World!</h1>
      <ul>
        {people.map((person, index) => {
          return (
            <li key={index}>{person.name} - {person.age}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App;
