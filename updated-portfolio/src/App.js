import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="date-container">
        <span class="date">{`Last update(Última atualização): ${new Date().toLocaleDateString()}`}</span>
      </div>
    </div>
  );
}

export default App;
