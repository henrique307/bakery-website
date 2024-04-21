import { createSlice, configureStore } from "@reduxjs/toolkit";
import { CalcValue } from './utils/calValue.js';

const carrinhoSlice = createSlice({
    initialState: {
        items: [],
        qtd: 0,
        valorTotal: 0
    },
    name: "carrinho",
    reducers: {
        changeValue: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

            state.items[itemIndex].qtd = action.payload.qtd;

            if (state.items[itemIndex].qtd === 0) {
                state.items.splice(itemIndex, 1);
                state.qtd = state.items.length;
            }

            state.valorTotal = CalcValue(state.items);
        },
        addItem: (state, action) => {
            if (action.payload.qtd === 0) return;

            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex === -1) {
                state.items.push(action.payload);
                state.qtd = state.items.length;
                state.valorTotal = CalcValue(state.items);
                return;
            }

            state.items[itemIndex].qtd += action.payload.qtd || 1;
            state.qtd = state.items.length;
            state.valorTotal = CalcValue(state.items);
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload.product, 1);
            state.qtd = state.items.length;
            state.valorTotal = CalcValue(state.items);
        }
    }
})

const favSlice = createSlice({
    initialState: {
        list: [],
        qtd: 0,
    },
    name: "favorites",
    reducers: {
        favToggle: (fav, action) => {
            const itemIndex = fav.list.findIndex(item => item.id === action.payload.id);

            itemIndex === -1 ? (
                fav.list.push(action.payload)
            ) : (
                fav.list.splice(itemIndex, 1)
            )
        }
    }
})

export const { favToggle } = favSlice.actions

export const { changeValue, addItem, removeItem } = carrinhoSlice.actions

export const store = configureStore({
    reducer: {
        carrinho: carrinhoSlice.reducer,
        fav: favSlice.reducer,
    }
})