import { updateQuizByClick } from "./App";
import data from "./assets/data.json";
import { QuizTypes } from "./types";

describe("Test Update Quiz Function", () => {
    it("should increment correct value if user click the right answer", () => {
        const index = 2;
        const initQuiz: QuizTypes = {
            view: {
                current: index,
                question: data[index].question,
                answers: data[index].answers
            },
            results: {
                total: 0,
                correct: 0
            }
        };
        const update = updateQuizByClick(1, initQuiz);
        expect(update.results.correct).toEqual(1);
    });
    it("should increment current if user click one of the list items", () => {
        const index = 0;
        const initQuiz: QuizTypes = {
            view: {
                current: index,
                question: data[index].question,
                answers: data[index].answers
            },
            results: {
                total: 0,
                correct: 0
            }
        };
        const update = updateQuizByClick(1, initQuiz);
        expect(update.view.current).toEqual(1);
    });
    it("should stop increment current view if user has answered all 3 questions", () => {
        const index = 2;
        const initQuiz: QuizTypes = {
            view: {
                current: index,
                question: data[index].question,
                answers: data[index].answers
            },
            results: {
                total: 0,
                correct: 0
            }
        };
        const update = updateQuizByClick(1, initQuiz);
        expect(update.view.current).toEqual(2);
    });
});
