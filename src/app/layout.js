'use client';

import './globals.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Link from 'next/link';

export default function RootLayout({ children }) {
    return (
        <html>
        <body>
        <Provider store={store}>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="./admin/admin.js">Admin</Link></li>
                    <li><Link href="./quiz/quiz.js">Quiz</Link></li>
                </ul>
            </nav>
            {children}
        </Provider>
        </body>
        </html>
    );
}
