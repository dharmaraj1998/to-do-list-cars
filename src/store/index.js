
import { configureStore } from "@reduxjs/toolkit";
import { CarList,addCar,removeCar,searchTearm } from "./slice/carList";
import { FormSlice,carName,carValue } from "./slice/formSlice";


const store = configureStore({
    reducer:{
        cars :CarList,
        form : FormSlice
    }
}
    
)

export {store,addCar,removeCar,searchTearm,carName,carValue}