import { useDispatch } from 'react-redux';
import { removeQuestion } from '../features/quiz/quizSlice';

export default function QuestionItem({ question, id }) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeQuestion(id));
    };

    return (
        <div>
            <p>{question}</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}
