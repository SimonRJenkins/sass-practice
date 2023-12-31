import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div class="navbar">
            <h1 class="title">Sass Practice</h1>
            <div className="links">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/profile">Profile</a>
                <a href="/contact">Contacts</a>
            </div>
        </div>
    )
}

export default Navbar