import { useSelector, useDispatch } from 'react-redux';
import { removeQuestion } from '@/features/quiz/quizSlice';

export default function QuestionList() {
    const questions = useSelector((state) => state.quiz.questions);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Questions</h2>
            <ul>
                {questions.map((q, index) => (
                    <li key={index}>
                        {q.question}
                        <button onClick={() => dispatch(removeQuestion(index))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
