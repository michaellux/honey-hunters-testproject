import { configureStore } from '@reduxjs/toolkit'
import commentReducer from './reducer';

export default configureStore({
  reducer: {
    comments: commentReducer
  }
})