"use client";

import { useSelector } from 'react-redux';

export default function Result() {
    const score = useSelector((state) => state.quiz.score);
    const questions = useSelector((state) => state.quiz.questions);

    return (
        <div>
            <h2>Your Score: {score}</h2>
            <h3>Questions:</h3>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>{question.question}</li>
                ))}
            </ul>
        </div>
    );
}
g
