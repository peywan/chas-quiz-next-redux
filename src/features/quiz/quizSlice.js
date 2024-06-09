import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        questions: [],
        userAnswers: [],
        score: 0,
    },
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        },
        removeQuestion: (state, action) => {
            state.questions = state.questions.filter(q => q.id !== action.payload);
        },
        updateQuestion: (state, action) => {
            const index = state.questions.findIndex(q => q.id === action.payload.id);
            if (index !== -1) {
                state.questions[index] = action.payload;
            }
        },
        setUserAnswers: (state, action) => {
            state.userAnswers = action.payload;
        },
        setScore: (state, action) => {
            state.score = action.payload;
        },
    },
});

export const { addQuestion, removeQuestion, updateQuestion, setUserAnswers, setScore } = quizSlice.actions;
export default quizSlice.reducer;
