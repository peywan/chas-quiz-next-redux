import AddQuestion from '../../components/AddQuestion';
import QuestionList from '../../components/QuestionList';

export default function AdminPage() {
    return (
        <div className="container">
            <h1>Admin Page</h1>
            <AddQuestion />
            <QuestionList />
        </div>
    );
}
