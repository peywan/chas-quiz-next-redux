"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '@/features/quiz/quizSlice';

export default function AddQuestion() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState('');
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const handleAddQuestion = () => {
        if (!question.trim()) {
            setError('Question cannot be empty.');
            return;
        }

        const filledOptions = options.filter(option => option.trim() !== '');
        if (filledOptions.length < 2) {
            setError('At least two options are required.');
            return;
        }

        if (!filledOptions.includes(answer)) {
            setError('The correct answer must be one of the options.');
            return;
        }

        dispatch(addQuestion({
            id: Date.now(),
            text: question,
            options: filledOptions,
            correctAnswer: answer
        }));
        setQuestion('');
        setOptions(['', '', '', '']);
        setAnswer('');
        setError('');
    };

    return (
        <div className="container">
            <h2>Add Question</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Question"
            />
            {options.map((option, index) => (
                <input
                    key={index}
                    type="text"
                    value={option}
                    onChange={(e) => {
                        const newOptions = [...options];
                        newOptions[index] = e.target.value;
                        setOptions(newOptions);
                    }}
                    placeholder={`Option ${index + 1}`}
                />
            ))}
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Correct Answer"
            />
            <button onClick={handleAddQuestion}>Add Question</button>
        </div>
    );
}
