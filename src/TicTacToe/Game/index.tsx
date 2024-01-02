import React, { useEffect, useState } from 'react';
import { Status } from '..';
import { GameCell, GameMatrix, GameRow } from './styled';

type indexProps = {
    symbol: string,
    gameStatus: Status,
    changePlayer: () => void,
    updateGameStatus: (status: Status) => void,
};

type ElementType = string | number | number;

const MATRIX = [[0,0,0], [0,0,0], [0,0,0]];

const MAX_MOVES = 9;

const index:React.FC<indexProps> = ({symbol, gameStatus, changePlayer, updateGameStatus}) => {

    const [gameMatrix, setGameMatrix] = useState<ElementType[][]>(MATRIX);

    const [winningRow, setWinningRow] = useState<[number, number][]>([]);

    const [numOfMoves, setNumOfMoves] = useState(0);

    useEffect(() => {
        if(gameStatus === Status.start) {
            setGameMatrix(MATRIX);
            setNumOfMoves(0);
            updateGameStatus(Status.play);
        }
    }, [gameStatus])

    const onClickCell = (index: [number, number]) => {
        let newNumOfMoves = numOfMoves + 1;
        let [xindex, yindex] = index;
        let newGameMatrix = [...gameMatrix.map(arr => [...arr])]
        newGameMatrix[xindex][yindex] = symbol
        setGameMatrix(newGameMatrix);
        if(checkGameStatus(newGameMatrix)) {
            updateGameStatus(Status.win)
        }else{
            if(newNumOfMoves === MAX_MOVES) {
                updateGameStatus(Status.tie)
            }else{
                changePlayer();
            }
        }
        setNumOfMoves(newNumOfMoves);
        
    }

    const checkGameStatus = (newGameMatrix: ElementType[][]) => {
        let isSameLeftDiagonalSymbol = true;
        let isSameRightDiagonalSymbol = true;

        for(let i = 0; i < newGameMatrix.length; i++) {
            let isSameRowSymbol = true;
            let isSameColSymbol = true;
            for(let j = 0; j < newGameMatrix.length; j++) {
                isSameRowSymbol = isSameRowSymbol && (newGameMatrix[i][j] === symbol)
                isSameColSymbol = isSameColSymbol && (newGameMatrix[j][i] === symbol)
                if(i === j) {
                    isSameLeftDiagonalSymbol = isSameLeftDiagonalSymbol && (newGameMatrix[i][j] === symbol)
                }
                if(i + j === newGameMatrix.length - 1) {
                    isSameRightDiagonalSymbol = isSameRightDiagonalSymbol && (newGameMatrix[i][j] === symbol)
                }
            }
            if(isSameRowSymbol) {
                setWinningRow(Array(newGameMatrix.length).fill(0).map((v,j) => [i,j]))
                return true;
            }
            if(isSameColSymbol) {
                setWinningRow(Array(newGameMatrix.length).fill(0).map((v,j) => [j,i]))
                return true;
            }
        }
        if(isSameLeftDiagonalSymbol) {
            setWinningRow(Array(newGameMatrix.length).fill(0).map((v,j) => [j,j]))
            return true;
        }
        if(isSameRightDiagonalSymbol) {
            setWinningRow(Array(newGameMatrix.length).fill(0).map((v,j) => [j,newGameMatrix.length - j - 1]))
            return true;
        }
        return false;
    }
    
    return <>
        <GameMatrix>
        {gameMatrix.map((x: ElementType[], xindex: number) => {
            return <GameRow key={xindex} $hasBorder={xindex+1 !== x.length}>{x.map((y: ElementType, yindex: number )=> {
                return <> 
                {y ?
                    <GameCell 
                        key={yindex} 
                        $hasBorder={yindex+1 !== x.length}
                        $isWinningRow={gameStatus === Status.win && winningRow?.some(x => (xindex === x[0] && yindex === x[1]))}
                    >
                        {y}
                    </GameCell> 
                :   <GameCell 
                        key={yindex} 
                        $hasBorder={yindex+1 !== x.length} 
                        onClick={() => gameStatus === Status.play && onClickCell([xindex,yindex])} 
                    /> 
                }
                </>
            })}</GameRow>
        })}
        </GameMatrix>
        
    </>
}
export default index;