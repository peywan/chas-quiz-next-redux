import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
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
            const { questionIndex, answer } = action.payload;
            state.userAnswers[questionIndex] = answer;
            if (state.questions[questionIndex].correctAnswer === answer) {
                state.score += 1;
            }
        },
        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.userAnswers = [];
            state.score = 0;
        },
    },
});

export const { addQuestion, answerQuestion, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
