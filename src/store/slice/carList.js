import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const carList = createSlice({
    name : "car",
    initialState : {
        cars : [],
        searchTearm : ""
    },
    reducers : {
        searchTearm(state,action){
             state.searchTearm = action.payload
        },
        addCar(state,action){

            state.cars.push({
                name : action.payload.name,
                cost : action.payload.cost,
                id : nanoid()
            })

        },
        removeCar(state,action){
            state.cars.filter((cars)=>{
                return cars.id !== action.payload.id
            })
        }


    }
})

export const {addCar,removeCar,searchTearm} = carList.actions

export const CarList = carList.reducer