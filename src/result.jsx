import React,{useContext} from "react";
import { CalculatorContext } from "./calculatorProvider.jsx";

const Result = () => {
    const {selectedNumbers, calculateSum, resetCalculator} = useContext(CalculatorContext);

    const sum = calculateSum();

    return (
        <div>
            <h2>Result: {sum}</h2>
            <p>selected Numbers: {selectedNumbers.join(', ')} </p>
            <button onClick={resetCalculator}>Reset</button>
            <button>Back to Calculator</button>
        </div>
    );
};
export default Result;