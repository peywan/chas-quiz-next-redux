import AddQuestion from '../components/AddQuestion';
import QuestionList from '../components/QuestionList';

export default function Admin() {
    return (
        <div>
            <h1>Admin Page</h1>
            <AddQuestion />
            <QuestionList />
        </div>
    );
}
