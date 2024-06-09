'use client';

import { useDispatch } from 'react-redux';
import { answerQuestion } from '../features/quiz/quizSlice';

export default function Question({ question }) {
    const dispatch = useDispatch();

    const handleAnswer = (answer) => {
        dispatch(answerQuestion({ questionId: question.id, answer }));
    };

    return (
        <div>
            <h3>{question.text}</h3>
            {question.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}
