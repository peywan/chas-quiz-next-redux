import { useSelector } from 'react-redux';
import { useState } from 'react';
import { setCorrectAnswers } from '../features/quiz/quizSlice';
import { useDispatch } from 'react-redux';

export default function Quiz() {
    const questions = useSelector((state) => state.quiz.questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const dispatch = useDispatch();

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            const correctAnswers = answers.filter(a => a === true).length;
            dispatch(setCorrectAnswers(correctAnswers));
        }
    };

    if (questions.length === 0) {
        return <p>No questions available</p>;
    }

    return (
        <div>
            <p>{questions[currentQuestionIndex].question}</p>
            <button onClick={() => handleAnswer(true)}>True</button>
            <button onClick={() => handleAnswer(false)}>False</button>
        </div>
    );
}
