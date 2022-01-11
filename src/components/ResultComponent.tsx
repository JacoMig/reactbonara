import { ResultTypes } from "../types";

const resultMessages: string[] = ["Non sai fare la carbonara", "Non ci siamo", "Devi studiare di più", "Bravo"];
const ResultComponent: React.FC<ResultTypes> = (props: ResultTypes) => {
    return (
        <div>
            <p>
                Hai risposto correttamente a {props.correct} domande su {props.total}
            </p>
            <p>{resultMessages[props.correct]}</p>
        </div>
    );
};

export default ResultComponent;
