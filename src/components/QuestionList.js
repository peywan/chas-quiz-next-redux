"use client";
import React from "react";
import { useSelector } from "react-redux";
import Question from "./Question";

const QuestionList = () => {
    const questions = useSelector((state) => state.quiz.questions);

    return (
        <div>
            {questions.map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </div>
    );
};

export default QuestionList;
