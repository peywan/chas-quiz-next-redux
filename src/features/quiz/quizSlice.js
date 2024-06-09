import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        {
            id: 1,
            text: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        // Add more questions as needed
    ],
    score: 0,
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        answerQuestion: (state, action) => {
            const { questionId, answer } = action.payload;
            const question = state.questions.find(q => q.id === questionId);
            if (question && question.correctAnswer === answer) {
                state.score += 1;
            }
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
g
