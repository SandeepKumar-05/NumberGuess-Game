import React, { useState } from 'react';
import './Guess.css';
import FireWork from '../FireWork';

function Guess() {
    const min = 1;
    const max = 10;
    const [randomNum, setRandomNum] = useState(generateRandomNumber());
    const [value, setValue] = useState('');
    const [statement, setStatement] = useState('');
    const [hasWon, setHasWon] = useState(false);

    function generateRandomNumber() {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleClick = () => {
        const userGuess = parseInt(value, 10); 

        if (isNaN(userGuess)) {
            setStatement(<p className='alert alert-danger' style={{ color: 'red' }}>Enter a valid number</p>);
            return;
        }

        if (userGuess === randomNum) {
            setStatement(<p className='alert alert-warning' style={{ color: 'green' }}>You Win!!!</p>);
            setHasWon(true); 
        } else if (userGuess > randomNum) {
            setStatement(<p className='alert alert-warning' style={{ color: 'red' }}>Too high, Try again</p>);
        } else {
            setStatement(<p className='alert alert-warning'style={{ color: 'red' }}>Too low, Try again</p>);
        }
    };

    const restart = () => {
        setValue('');
        setStatement('');
        setHasWon(false); 
        setRandomNum(generateRandomNumber()); 
    };

    return (
        <div className="parentDiv">
            {hasWon && <FireWork />} 
            <div className="childDiv">
                <div className="heading">
                    <h1>Number Guessing Game...</h1>
                </div>
                <div className="input">
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder='Enter a number between 1 and 10.'
                    />
                </div>
                <div className="submit">
                    <button className='Guess' type='button' onClick={handleClick}>Guess</button>
                    <button className='restart' onClick={restart}>Restart</button>
                </div>
                <div className="result">
                    <h1>{statement}</h1>
                </div>
            </div>
        </div>
    );
}

export default Guess;
