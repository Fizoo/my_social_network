import {IMessage, IUsersMes} from "./type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import nextId from "react-id-generator";

interface IState {
    messages: Array<IMessage>
    users: Array<IUsersMes>
}

const initialState: IState = {
    messages: [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'My name is'},
        {id: '3', message: 'Oleg'},
        {id: '4', message: 'Ha-Ha-Ha'}],
    users:[
        {id: '1', name: 'Oleg'},
        {id: '2', name: 'Katrina'},
        {id: '3', name: 'Sofia'},
        {id: '4', name: 'Vika'}
    ]

}
const dialogSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<string>) => {
            const mes: IMessage = {
                id: nextId(),
                message: action.payload
            }
            state.messages.push(mes)
        }
    }
})

export default dialogSlice.reducer
export const {addMessage} = dialogSlice.actions