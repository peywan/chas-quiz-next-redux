"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '@/features/quiz/quizSlice';

export default function AddQuestion() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState('');
    const dispatch = useDispatch();

    const handleAddQuestion = () => {
        dispatch(addQuestion({
            id: Date.now(), // Ensure unique id for each question
            text: question,
            options: options,
            correctAnswer: answer
        }));
        setQuestion('');
        setOptions(['', '', '', '']);
        setAnswer('');
    };

    return (
        <div>
            <h2>Add Question</h2>
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
                placeholder="Answer"
            />
            <button onClick={handleAddQuestion}>Add Question</button>
        </div>
    );
}
