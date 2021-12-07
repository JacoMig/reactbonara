import { useEffect, useState } from 'react';
import './App.css';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Inputs from './components/Inputs';
import { WordsStateTypes } from './types';

const defaultAppWordsState: WordsStateTypes = {
    success: false,
    words: []
};

const secretWord = 'Train';

export const getMatchedLetters = (Word: string, secretWord: string): number => {
    const letters = Word.split('');
    return letters.filter((letter: string) => secretWord.toLowerCase().includes(letter.toLowerCase())).length;
};

export const handleWordsContainer = (
    prevState: WordsStateTypes,
    currentWord: string,
    secretWord: string
): WordsStateTypes => {
    const wordsArray = [
        ...prevState.words,
        { word: currentWord, letterMatchedCount: getMatchedLetters(currentWord, secretWord) }
    ];
    return {
        success: currentWord.toLowerCase() === secretWord.toLowerCase() ? true : false,
        words: [...new Map(wordsArray.map((wordItem) => [wordItem['word'], wordItem])).values()]
    };
};

const App: React.FC = () => {
    const [appWordsState, setAppWordsState] = useState<WordsStateTypes>(defaultAppWordsState);

    const handleInputsValChange = (val: string) => {
        setAppWordsState((state) => {
            return handleWordsContainer(state, val, secretWord);
        });
    };

    useEffect(() => {
        // console.log(appWordsState);
    }, [appWordsState]);

    return (
        <div className="App">
            <header className="App-header">
                <h2>Jotto Game</h2>
                <p>Guessed a word</p>
                <Inputs handleInputsValChange={handleInputsValChange} />
                <Congrats success={appWordsState.success} />
                {!appWordsState.success ? <GuessedWords words={appWordsState.words} /> : null}
            </header>
        </div>
    );
};

export default App;
