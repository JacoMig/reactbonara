export type QuizViewTypes = {
    question: string;
    answers: string[];
    current: number;
};

export type QuizTypes = {
    view: QuizViewTypes;
    results: ResultTypes;
};

export type QuizComponentPropsTypes = {
    question: string;
    answers: string[];
    clickAnswer: (clicked: number) => void;
};

export type ResultTypes = {
    total: number;
    correct: number;
};
