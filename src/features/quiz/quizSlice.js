import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        { id: 1, text: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correctAnswer: "Paris" },
    ],
    score: 0,
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        },
        removeQuestion: (state, action) => {
            state.questions = state.questions.filter((question) => question.id !== action.payload);
        },
        answerQuestion: (state, action) => {
            const { questionId, answer } = action.payload;
            const question = state.questions.find((q) => q.id === questionId);
            if (question.correctAnswer === answer) {
                state.score += 1;
            }
        },
    },
});

export const { addQuestion, removeQuestion, answerQuestion } = quizSlice.actions;
export default quizSlice.reducer;
