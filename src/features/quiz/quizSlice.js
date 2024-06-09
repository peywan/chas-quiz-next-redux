// src/features/quiz/quizSlice.js
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
        answerQuestion: (state, action) => {
            // Logic to handle answering a question
        },
        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.score = 0;
        },
    },
});

export const { addQuestion, answerQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;

// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../../features/quiz/quizSlice';

export const store = configureStore({
    reducer: {
        quiz: quizReducer,
    },
});
