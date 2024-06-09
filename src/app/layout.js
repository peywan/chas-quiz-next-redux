'use client';

import './globals.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Link from 'next/link';

export default function RootLayout({ children }) {
    return (
        <Provider store={store}>
            <html lang="en">
            <body>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/admin">Admin</Link>
                <Link href="/quiz">Quiz</Link>
            </nav>
            {children}
            </body>
            </html>
        </Provider>
    );
}
