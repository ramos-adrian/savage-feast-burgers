// order.ts

import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {OrderState} from "../types";

const initialState: OrderState = {
    deliveryDetails: {
        name: null,
        address: null,
        deptNumber: null,
        phone: null,
    },
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.deliveryDetails.name = action.payload;
        },
        setAddress: (state, action: PayloadAction<string>) => {
            state.deliveryDetails.address = action.payload;
        },
        setDeptNumber: (state, action: PayloadAction<string>) => {
            state.deliveryDetails.deptNumber = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.deliveryDetails.phone = action.payload;
        },
    },
});

export const {setName, setAddress, setDeptNumber, setPhone} = orderSlice.actions;

export default orderSlice.reducer;