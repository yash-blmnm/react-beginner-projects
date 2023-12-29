import { useCallback, useMemo, useState } from 'react';
import Game from './Game'

const PLAYER_1 = 'Player1';
const PLAYER_2 = 'Player2';

export enum Status {
  start = 'start',
  play = 'play',
  win = 'win',
  tie = 'tie',
  none = 'none'
}

function App() {
  const [player, setPlayer] = useState<string>(PLAYER_1);

  const [gameStatus, setGameStatus] = useState<Status>(Status.play);

  const symbol = useMemo(() => player === PLAYER_1 ? 'x' : 'o',[player]);

  const resetGame = useCallback((newFirstPlayer = player) => {
    setGameStatus(Status.start);
    setPlayer(newFirstPlayer)
  }, [])

  const statusDescription = useMemo(() => {
    switch (gameStatus) {
      case Status.play: 
        return <><button onClick={() => resetGame()}>Reset</button> the game</>
        break;
      case Status.win: 
        return <>{player} won the game! Congratzz! <button onClick={() => resetGame()}>Play Again</button></>
        break;
      case Status.tie: 
        return <>The game was a tie! <button onClick={() => resetGame(player === PLAYER_1 ? PLAYER_2 : PLAYER_1)}>Play Again</button></>
        break;
      default: 
        return '';
        break;
    }
  }, [gameStatus])

  return (
    <>
      <div>Player : {player} </div>
      <Game 
        symbol={symbol}
        gameStatus={gameStatus}
        changePlayer={() => setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1)}
        updateGameStatus={(status: Status) => setGameStatus(status)}
      />
      {statusDescription}
      {gameStatus === Status.none ? <></> : ''}
    </>
  )
}

export default App
