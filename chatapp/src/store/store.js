import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../slices/userslice'
import chatReducer from '../slices/Chatslice'

export const store=configureStore({
    reducer:{
        user:userReducer,
        chats:chatReducer,
    }
});