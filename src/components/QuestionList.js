import { useSelector } from 'react-redux';
import QuestionItem from './QuestionItem';

export default function QuestionList() {
    const questions = useSelector((state) => state.quiz.questions);

    return (
        <div>
            {questions.map((q) => (
                <QuestionItem key={q.id} question={q.question} id={q.id} />
            ))}
        </div>
    );
}
