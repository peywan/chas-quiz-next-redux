'use client';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import { useSelector } from 'react-redux';

const QuizPage = () => {
    const score = useSelector((state) => state.quiz.score);

    return (
        <div>
            <h1>Quiz Page</h1>
            <Quiz />
            {score !== null && <Result />}
        </div>
    );
};

export default QuizPage;
