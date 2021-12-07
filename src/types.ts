export type SuccessType = {
    success?: boolean;
};

type WordsType = {
    word: string;
    letterMatchedCount: number;
};

export type WordsStateTypes = {
    success: boolean;
    words: WordsType[];
};

export type handleInputsValChangeTypes = {
    handleInputsValChange: (inputVal: string) => void;
};

export type GuessedWordsType = {
    words: WordsType[];
};
