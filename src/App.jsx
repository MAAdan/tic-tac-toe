import { useState } from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

function deriveActivePlayer(gameTurns) {
  return (gameTurns.length > 0 && gameTurns[0].player === 'X') ? 'O' : 'X';
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((previousTurns) => {
      const currentPlayer = deriveActivePlayer(previousTurns);

      const updtatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...previousTurns
      ];

      return updtatedTurns;

    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard 
          onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} 
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
