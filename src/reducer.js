import { createSlice } from '@reduxjs/toolkit'

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: []
  },
  reducers: {
    loadComments: (state, action) => {
      return { comments: [...state.comments, ...action.payload] };
    },
    addComment: (state, action) => {
      return { comments: [...state.comments, action.payload] };
    },
  }
})

export const { loadComments, addComment } = commentSlice.actions

export const selectComments = state => state.comments;

export default commentSlice.reducer