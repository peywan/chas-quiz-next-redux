'use client';

import './globals.css'; // Correct path based on your structure
import { Provider } from 'react-redux';
import { store } from './store';
import Link from 'next/link';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <Provider store={store}>
            <header>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/admin">Admin</Link>
                    <Link href="/quiz">Quiz</Link>
                </nav>
            </header>
            <main>{children}</main>
        </Provider>
        </body>
        </html>
    );
}
