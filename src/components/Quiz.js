"use client";

import { useSelector, useDispatch } from 'react-redux';
import { answerQuestion, resetQuiz } from '@/features/quiz/quizSlice';

export default function Quiz() {
    const dispatch = useDispatch();
    const { questions, currentQuestionIndex, score } = useSelector((state) => state.quiz);
    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (answer) => {
        dispatch(answerQuestion(answer));
    };

    const handleReset = () => {
        dispatch(resetQuiz());
    };

    return (
        <div>
            {currentQuestion ? (
                <>
                    <h2>{currentQuestion.question}</h2>
                    {currentQuestion.options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option)}>
                            {option}
                        </button>
                    ))}
                </>
            ) : (
                <div>
                    <p>Your score: {score}</p>
                    <button onClick={handleReset}>Restart Quiz</button>
                </div>
            )}
        </div>
    );
}
