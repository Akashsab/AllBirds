import { configureStore } from "@reduxjs/toolkit";
import Cardslice from "./Cardslice";

export const storei=configureStore(
    {
        reducer:{
            cart:Cardslice,
        }
    }
)