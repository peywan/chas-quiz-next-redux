"use client";
import React from "react";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList";

const Quiz = () => {
    const score = useSelector((state) => state.quiz.score);

    return (
        <div>
            <h1>Quiz Page</h1>
            <h2>Your Score: {score}</h2>
            <QuestionList />
        </div>
    );
};

export default Quiz;
