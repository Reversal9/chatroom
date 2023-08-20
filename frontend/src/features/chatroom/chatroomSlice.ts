import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getSocket } from './chatroomAPI';

export interface ChatroomState {
    socket: any
}

const initialState: ChatroomState = {
    socket: undefined
};

export const chatroomSlice = createSlice({
    name: "chatroom",
    initialState,
    reducers: {
        set: (state) => {
        
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSocket.pending, state => {
                console.log("pending deez");
            })
            .addCase(fetchSocket.fulfilled, (state, action) => {
                state.socket = action.payload;
                console.log("im better")
            })
            .addCase(fetchSocket.rejected, (state) => {
                console.log('reject');
            });
    }
});

export const fetchSocket = createAsyncThunk(
    'chatroom/getSocket',
    async() => {
        console.log("am i even runnig")
        return await getSocket();
    }
);

export const selectSocket = (state: RootState) => state.chatroom.socket;

export default chatroomSlice.reducer;
