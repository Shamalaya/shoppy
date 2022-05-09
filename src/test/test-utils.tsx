// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import productsReducer from '../services/productsSlice'

function render(
    ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
    {
        // @ts-ignore
        preloadedState,
        store = configureStore({
            reducer: { products: productsReducer },
            preloadedState,
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }: { children: any }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }