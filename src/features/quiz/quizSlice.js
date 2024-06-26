import { createSlice } from "@reduxjs/toolkit";

const loadQuestions = () => {
    if (typeof window !== 'undefined') { // Check if window is defined
        const questions = localStorage.getItem('questions');
        return questions ? JSON.parse(questions) : [
            { id: 1, text: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correctAnswer: "Paris" },
        ];
    }
    return [
        { id: 1, text: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correctAnswer: "Paris" },
    ];
};

const initialState = {
    questions: [],
    score: 0,
};

const saveQuestions = (questions) => {
    if (typeof window !== 'undefined') { // Check if window is defined
        localStorage.setItem('questions', JSON.stringify(questions));
    }
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        initializeQuestions: (state) => {
            state.questions = loadQuestions();
        },
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
            saveQuestions(state.questions);
        },
        removeQuestion: (state, action) => {
            state.questions = state.questions.filter((question) => question.id !== action.payload);
            saveQuestions(state.questions);
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

export const { initializeQuestions, addQuestion, removeQuestion, answerQuestion } = quizSlice.actions;
export default quizSlice.reducer;
