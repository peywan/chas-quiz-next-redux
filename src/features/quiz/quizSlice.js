import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        questions: [],
        correctAnswers: 0,
    },
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push({
                id: state.questions.length + 1,
                question: action.payload.question,
            });
        },
        removeQuestion: (state, action) => {
            state.questions = state.questions.filter((q) => q.id !== action.payload);
        },
        setCorrectAnswers: (state, action) => {
            state.correctAnswers = action.payload;
        },
    },
});

export const { addQuestion, removeQuestion, setCorrectAnswers } = quizSlice.actions;
export default quizSlice.reducer;
