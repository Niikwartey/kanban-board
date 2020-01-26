import React from 'react';
import { Grommet } from 'grommet';
import Board from './pages/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <Grommet>
        <Board />
      </Grommet>
    </div>
  );
}

export default App;
