'use client';

import { useSelector } from 'react-redux';
import Question from '../components/Question';
import Result from '../components/Result';

export default function Quiz() {
    const questions = useSelector((state) => state.quiz.questions);

    return (
        <div>
            <h1>Quiz Page</h1>
            <div>
                <h2>Questions:</h2>
                {questions.map((question, index) => (
                    <Question key={index} question={question} />
                ))}
            </div>
            <Result />
        </div>
    );
}
