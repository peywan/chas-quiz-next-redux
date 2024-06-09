import { useSelector } from 'react-redux';

export default function Result() {
    const questions = useSelector((state) => state.quiz.questions);
    const correctAnswers = useSelector((state) => state.quiz.correctAnswers);

    return (
        <div>
            <h2>Results</h2>
            <p>
                You got {correctAnswers} out of {questions.length} questions correct.
            </p>
        </div>
    );
}
