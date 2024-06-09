import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    return (
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/admin">Admin</Link>
                <Link href="/quiz">Quiz</Link>
            </nav>
            <h1>Welcome to the Quiz App</h1>
        </div>
    );
}
