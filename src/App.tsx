import { useEffect, useState } from "react";
import "./App.css";
import QuizComponent from "./components/QuizComponent";
import { QuizTypes } from "./types";
import data from "./assets/data.json";
import ResultComponent from "./components/ResultComponent";

const initQuiz: QuizTypes = {
  view: {
    current: 0,
    question: data[0].question,
    answers: data[0].answers,
  },
  results: {
    total: 0,
    correct: 0,
  },
};

export const updateQuizByClick = (
  clicked: number,
  quiz: QuizTypes
): QuizTypes => {
  const current = quiz.view.current;
  const correct = quiz.results.correct;

  const view =
    current < data.length - 1
      ? {
          current: current + 1,
          question: data[current + 1].question,
          answers: data[current + 1].answers,
        }
      : quiz.view;
  const results =
    current < data.length
      ? {
          total: current + 1,
          correct: clicked === data[current].correct ? correct + 1 : correct,
        }
      : quiz.results;

  return { view, results };
};

const App: React.FC = () => {
  const [quiz, setQuiz] = useState<QuizTypes>();

  const clickAnswer = (clicked: number) => {
    const updateQuiz = updateQuizByClick(clicked, quiz as QuizTypes);
    setQuiz({ view: updateQuiz.view, results: updateQuiz.results });
  };

  const resetQuiz = (): void => {
    setQuiz(initQuiz);
  };

  useEffect(() => {
    setQuiz(initQuiz);
  }, []);

  return (
    <div className="App">
      <div className="App-container">
        {quiz?.results ? (
          quiz?.results.total < data.length ? (
            <>
              <h2>Test: Come si fa la carbonara</h2>
              <h3>Rispondi alle domande</h3>
              <QuizComponent
                question={quiz.view.question}
                answers={quiz.view.answers}
                clickAnswer={clickAnswer}
              />
            </>
          ) : (
            <>
              <ResultComponent
                correct={quiz.results.correct}
                total={quiz.results.total}
              />
              {quiz.results.correct < quiz.results.total ? (
                <button onClick={resetQuiz}>Riprova</button>
              ) : null}
            </>
          )
        ) : null}
        {console.log(quiz)}
      </div>
    </div>
  );
};

export default App;
