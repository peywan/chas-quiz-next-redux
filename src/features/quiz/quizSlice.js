import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        },
        removeQuestion: (state, action) => {
            state.questions = state.questions.filter((q, index) => index !== action.payload);
        },
        nextQuestion: (state) => {
            state.currentQuestionIndex += 1;
        },
        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.score = 0;
        },
        incrementScore: (state) => {
            state.score += 1;
        },
    },
});

export const { addQuestion, removeQuestion, nextQuestion, resetQuiz, incrementScore } = quizSlice.actions;

export default quizSlice.reducer;
