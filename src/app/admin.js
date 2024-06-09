'use client';
import AddQuestion from '../components/AddQuestion';
import QuestionList from '../components/QuestionList';

const AdminPage = () => {
    return (
        <div>
            <h1>Admin Page</h1>
            <AddQuestion />
            <QuestionList />
        </div>
    );
};

export default AdminPage;
