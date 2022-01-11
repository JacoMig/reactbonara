import { QuizComponentPropsTypes } from "../types";

const QuizComponent: React.FC<QuizComponentPropsTypes> = (
  props: QuizComponentPropsTypes
) => {
  return (
    <div className="quizComponent">
      <h4>{props.question}</h4>
      <ul className="answersList">
        {props.answers.map((answer: string, i: number) => (
          <li
            onClick={() => props.clickAnswer(i)}
            key={answer.replaceAll(" ", "")}
          >
            {i + 1}) {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizComponent;
