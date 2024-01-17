import React, { useState } from 'react';
import ModalComponent from '../../components/ModalComponent';
import styled from 'styled-components';

type indexProps = {
    
};

const PlayerInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;

`

const PlayerInfo:React.FC<indexProps> = () => {
    // const [isNewGame, setGameFlag] = useState()
    
    return <PlayerInfoSection className='flex-row gap-4 player-info'>
        <h2>Player Info</h2>
        <div>
            <label>Player Name </label>
            <input type='text' required/>
        </div>
        <div className='flex-row content-between my-4'>
            <button>New Game</button>
            <button>Join Game</button>
        </div>
    </PlayerInfoSection>
}
export default PlayerInfo;