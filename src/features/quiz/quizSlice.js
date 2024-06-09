import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        // Your sample questions here
    ],
    score: 0,
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        answerQuestion: (state, action) => {
            const { questionId, answer } = action.payload;
            // logic to check the answer and update the score
        },
        incrementScore: (state) => {
            state.score += 1;
        },
        resetScore: (state) => {
            state.score = 0;
        },
    },
});

export const { answerQuestion, incrementScore, resetScore } = quizSlice.actions;
export default quizSlice.reducer;
