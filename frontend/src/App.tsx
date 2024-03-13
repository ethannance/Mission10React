import React from 'react';
import './App.css';
import Header from './Header';
import BowlersList from './Bowlers/BowlersList';

function Welcome() {
  return (
    <>
      <h1>Welcome To My Bowling Site</h1>
      <p>
        Come to learn more about the best bowling teams around? You've come to
        the right place!
      </p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <Header title="Bowling Leagues" />
      <BowlersList />
      <br />
      <br />
    </div>
  );
}

export default App;
