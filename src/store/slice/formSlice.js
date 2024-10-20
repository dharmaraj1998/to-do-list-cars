import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice({
    name:"form",
    initialState : {
        name : "",
        value : 0
    },
    reducers:{
        carName(state,action){
            state.name = action.payload

        },
        carValue(state,action){
             state.value = action.payload

        }
    }
})

export const {carName,carValue} = formSlice.actions
export const FormSlice = formSlice.reducer