import React, { useState } from 'react';
import ModalComponent from '../../components/ModalComponent';

type indexProps = {
    
};

const PlayerInfo:React.FC<indexProps> = () => {
    // const [isNewGame, setGameFlag] = useState()
    
    return <ModalComponent>
        <h2>Player Info</h2>
        <div>
            <label>Name :</label>
            <input type='text' required/>
        </div>
        <div className='flex-row'>
            <button>Create New Game</button>
            <button>Join Game</button>
        </div>
    </ModalComponent>
}
export default PlayerInfo;