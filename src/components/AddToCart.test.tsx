import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '../test/test-utils'
import AddToCart from './AddToCart'
import { product } from '../test/test-const'

describe('AddToCart', () => {
    test('show increase and decrease buttons', () => {
        render(
            <Router>
                <AddToCart product={product} />
            </Router>
        )
        const increaseButton = screen.getByRole('button', { name: 'increase' })
        const decreaseButton = screen.getByRole('button', { name: 'decrease' })
        expect(increaseButton).toBeInTheDocument()
        expect(decreaseButton).toBeInTheDocument()
    })
})
