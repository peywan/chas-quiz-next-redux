"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { removeQuestion, answerQuestion } from "@/features/quiz/quizSlice";

const Question = ({ question }) => {
    const dispatch = useDispatch();

    const handleAnswer = (option) => {
        dispatch(answerQuestion({ questionId: question.id, answer: option }));
    };

    const handleRemove = () => {
        dispatch(removeQuestion(question.id));
    };

    return (
        <div>
            <h3>{question.text}</h3>
            {question.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
            <button style={{ backgroundColor: 'red' }} onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Question;
