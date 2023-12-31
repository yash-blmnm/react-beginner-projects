import styled from 'styled-components';

const GameCell = styled.div<{ $hasBorder?: boolean; $isWinningRow?: boolean}>`
    border-right: ${props => props.$hasBorder ? '1px solid black' : ''};
    background-color: ${props => props.$isWinningRow ? 'green' : ''};
    height: 100px;
    width: 100px;
    cursor: pointer;
    font-size: 74px;
    text-align: center;
    font-family: sans-serif;
`
const GameRow = styled.div<{ $hasBorder?: boolean; }>`
    display: flex;
    flex-direction: row;
    width: 300px;
    border-bottom: ${props => props.$hasBorder ? '1px solid black' : ''};
`

const GameMatrix = styled.div`
    display: flex;
    flex-direction: column;
`

export {
    GameCell,
    GameMatrix,
    GameRow
}