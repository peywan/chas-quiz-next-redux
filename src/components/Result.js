'use client';

import { useSelector } from 'react-redux';

export default function Result() {
    const score = useSelector((state) => state.quiz.score);

    return (
        <div>
            <h2>Final Score</h2>
            <p>{score}</p>
        </div>
    );
}
