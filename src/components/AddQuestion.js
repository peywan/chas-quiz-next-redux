import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '@/features/quiz/quizSlice';

export default function AddQuestion() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addQuestion({ question, answer }));
        setQuestion('');
        setAnswer('');
    };

    return (
        <div>
            <h2>Add a Question</h2>
            <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <input
                type="text"
                placeholder="Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={handleSubmit}>Add Question</button>
        </div>
    );
}
