import { useState } from 'react';

function AppNew() {
  const [advice, setAdvice] = useState('');
  const [joke, setJoke] = useState('');

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice))
      .catch(err => setAdvice('Failed to fetch advice.'));
  };

  const getJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setJoke(data.joke))
      .catch(err => setJoke('Failed to fetch joke.'));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>Random Advice & Joke</h1>

      <div style={{ margin: '2rem 0' }}>
        <button onClick={getAdvice}>Get Advice</button>
        <p><strong>Advice:</strong> {advice}</p>
      </div>

      <div>
        <button onClick={getJoke}>Get Dad Joke</button>
        <p><strong>Joke:</strong> {joke}</p>
      </div>
    </div>
  );
}

export default AppNew;
