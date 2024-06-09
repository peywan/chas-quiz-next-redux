import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { nextQuestion, incrementScore } from '@/features/quiz/quizSlice';

export default function Quiz() {
    const { questions, currentQuestionIndex } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();
    const [answer, setAnswer] = useState('');

    if (currentQuestionIndex >= questions.length) {
        return <h2>Quiz Complete!</h2>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = () => {
        if (answer === currentQuestion.answer) {
            dispatch(incrementScore());
        }
        setAnswer('');
        dispatch(nextQuestion());
    };

    return (
        <div>
            <h2>{currentQuestion.question}</h2>
            <input
                type="text"
                placeholder="Your Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={handleAnswer}>Submit</button>
        </div>
    );
}
