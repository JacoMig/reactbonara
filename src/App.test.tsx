import { updateQuizByClick } from "./App";
import data from "./assets/data.json";
import { QuizTypes } from "./types";

const initQuiz = (index: number): QuizTypes => ({
    view: {
        current: index,
        question: data[index].question,
        answers: data[index].answers
    },
    results: {
        total: 0,
        correct: 0
    }
});

describe("Test Update Quiz Function", () => {
    it("should increment correct value if user click the right answer", () => {
        const index = 2;

        const update = updateQuizByClick(1, initQuiz(index));
        expect(update.results.correct).toEqual(1);
    });
    it("should increment current view if user answer one question", () => {
        const index = 0;

        const update = updateQuizByClick(1, initQuiz(index));
        expect(update.view.current).toEqual(1);
    });
    it("should stop increment current view if user has answered all 3 questions", () => {
        const index = 2;

        const update = updateQuizByClick(1, initQuiz(index));
        expect(update.view.current).toEqual(2);
    });
});
