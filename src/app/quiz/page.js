import Quiz from '../../components/Quiz';
import Result from '../../components/Result';

export default function QuizPage() {
    return (
        <div className="container">
            <h1>Quiz Page</h1>
            <Quiz />
            <br/>
            <Result />
        </div>
    );
}
