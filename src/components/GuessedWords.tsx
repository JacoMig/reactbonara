import React from 'react';
import { GuessedWordsType } from '../types';

const GuessedWords: React.FunctionComponent<GuessedWordsType> = (props: GuessedWordsType) => {
    const { words } = props;

    return (
        <table>
            <thead>
                <tr>
                    <td>Words</td>
                    <td>Matched Letters</td>
                </tr>
            </thead>
            <tbody>
                {words.length > 0
                    ? words.map((wordItem) => (
                          <tr key={wordItem.word}>
                              <td>{wordItem.word}</td>
                              <td>{wordItem.letterMatchedCount}</td>
                          </tr>
                      ))
                    : null}
            </tbody>
        </table>
    );
};

export default GuessedWords;
