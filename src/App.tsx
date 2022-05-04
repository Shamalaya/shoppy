import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, ProductsPage, SingleProductPage } from './pages'
import './App.css'

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/Products" element={<ProductsPage />} />
            </Routes>
            <Routes>
                <Route path="/Products/:id" element={<SingleProductPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
