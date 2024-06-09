import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addQuestion } from '../features/quiz/quizSlice';

export default function AddQuestion() {
    const [question, setQuestion] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addQuestion({ question }));
        setQuestion('');
    };

    return (
        <div>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Add a question"
            />
            <button onClick={handleAdd}>Add Question</button>
        </div>
    );
}
