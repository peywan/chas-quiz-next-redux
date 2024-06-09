import { useSelector } from 'react-redux';

export default function Result() {
    const score = useSelector((state) => state.quiz.score);
    const questions = useSelector((state) => state.quiz.questions);

    return (
        <div>
            <h2>Your Score</h2>
            <p>
                {score} out of {questions.length}
            </p>
        </div>
    );
}
