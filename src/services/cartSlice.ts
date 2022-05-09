import { createSlice } from '@reduxjs/toolkit'

interface CartItemType {
    id: string
    name: string
    color: string
    amount: number
    image: string
    price: number
    max: number
}

interface StateType {
    cartItems: Array<CartItemType>
    amount: number
    total: number
}

const initialState: StateType = {
    cartItems: [],
    amount: 0,
    total: 0,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
})

export const selectCartItems = (state: StateType) => {
    return state.cartItems
}
export const selectAmount = (state: StateType) => {
    return state.amount
}
export const selectTotal = (state: StateType) => {
    return state.total
}

export default cartSlice.reducer
