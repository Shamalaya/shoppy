import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import './App.css'

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Footer />
        </Router>
    )
}

export default App
