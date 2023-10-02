import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quiz: [],
}

export const quizReducer = createSlice({
  name: 'Quiz',
  initialState,
  reducers: {
    
    addQuiz: (state, action) => {
      state.quiz = action.payload
    },
    
  },
})

export const { addQuiz } = quizReducer.actions

export default quizReducer.reducer