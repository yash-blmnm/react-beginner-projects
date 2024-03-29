import { useCallback, useEffect, useMemo, useState } from 'react';
import Game from './Game'
import Header from '../components/Header';
import PlayerInfo from './PlayerInfo';

const PLAYER_1 = 'Player1';
const PLAYER_2 = 'Player2';

export enum Status {
  start = 'start',
  play = 'play',
  win = 'win',
  tie = 'tie',
  none = 'none'
}

function TicTacToe() {
  const [player, setPlayer] = useState<string>(PLAYER_1);

  const [gameStatus, setGameStatus] = useState<Status>(Status.play);

  const [ gameFlag, setGameFlag ] = useState(false);

  const symbol = useMemo(() => player === PLAYER_1 ? 'x' : 'o',[player]);

  const resetGame = useCallback((newFirstPlayer = player) => {
    setGameStatus(Status.start);
    setPlayer(newFirstPlayer)
  }, [])

  useEffect(() => {
    
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
    <Header projectName={"Tic Tac Toe"} />
    <section className="flex-row content-center main-section">
      {!gameFlag ? <PlayerInfo /> :
      <div className='flex-col gap-4'>
        <h4>Player : {player} </h4>
        <Game 
          symbol={symbol}
          gameStatus={gameStatus}
          changePlayer={() => setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1)}
          updateGameStatus={(status: Status) => setGameStatus(status)}
        />
        <div>{statusDescription}</div>
        <div>{gameStatus === Status.none ? <></> : ''}</div>
      </div>
      }
    </section>
    </>
  )
}

export default TicTacToe
