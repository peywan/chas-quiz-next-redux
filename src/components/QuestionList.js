"use client";

import { useSelector, useDispatch } from 'react-redux';
import { removeQuestion } from '@/features/quiz/quizSlice';

export default function QuestionList() {
    const questions = useSelector((state) => state.quiz.questions);
    const dispatch = useDispatch();

    return (
        <div>
            {questions.map((question, index) => (
                <div key={index}>
                    <p>{question.question}</p>
                    <button onClick={() => dispatch(removeQuestion(index))}>Remove</button>
                </div>
            ))}
        </div>
    );
}
