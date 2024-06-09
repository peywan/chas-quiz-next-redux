"use client";

import { useDispatch, useSelector } from 'react-redux';
import Question from './Question';
import Result from './Result';
import { resetQuiz } from '@/features/quiz/quizSlice';

export default function Quiz() {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.quiz.questions);
    const currentQuestionIndex = useSelector((state) => state.quiz.currentQuestionIndex);

    if (currentQuestionIndex >= questions.length) {
        return <Result />;
    }

    return (
        <div>
            <h2>Quiz</h2>
            <Question question={questions[currentQuestionIndex]} />
            <button onClick={() => dispatch(resetQuiz())}>Restart Quiz</button>
        </div>
    );
}
