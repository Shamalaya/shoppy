import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, ProductsPage, SingleProductPage, CartPage } from './pages'
import './App.css'

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<ProductsPage />} />
                <Route path="/Products/:id" element={<SingleProductPage />} />
                <Route path="/Cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
