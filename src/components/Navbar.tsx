import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButton from './CartButton'

function Navbar() {
    return (
        <nav>
            <div className="nav-header">
                <button type="button" className="nav-toggle">
                    <FaBars />
                </button>
                <Link to="/">Shoppy </Link>
            </div>
            <ul className="nav-links">
                {links.map((link) => {
                    const { id, text, url } = link
                    return (
                        <li key={id}>
                            <Link to={url}> {text}</Link>
                        </li>
                    )
                })}
            </ul>
            <CartButton />
        </nav>
    )
}

export default Navbar
