import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(0);

    const addNumber = (number) => {
        setSelectedNumbers([...selectedNumbers, number]);
        setCurrentNumber(number);
    };

    const calculateSum = () => {
        return selectedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    };

    const resetCalculator = () => {
        setSelectedNumbers([]);
        setCurrentNumber(0);
    };

    return (
        <CalculatorContext.Provider value={{ selectedNumbers, currentNumber, addNumber, calculateSum, resetCalculator }}>
            {children}
        </CalculatorContext.Provider>
    );
};
