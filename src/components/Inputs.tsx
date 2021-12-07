import React, { useState } from 'react';
import { handleInputsValChangeTypes } from '../types';

const Inputs: React.FunctionComponent<handleInputsValChangeTypes> = (props: handleInputsValChangeTypes) => {
    const [textVal, setTextVal] = useState<string>('');

    const handleClick = () => {
        props.handleInputsValChange(textVal);
    };

    return (
        <div>
            <input
                type="text"
                value={textVal}
                placeholder="write a word"
                onChange={(e) => setTextVal(e.target.value)}
            />
            <button type="button" onClick={handleClick}>
                Send
            </button>
        </div>
    );
};

export default Inputs;
