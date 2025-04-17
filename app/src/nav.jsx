import { useState } from 'react'
import './App.css'

// function for showing the navigation bar only on scrolling down
function showNav() {
    const nav = document.getElementById("navigation")

    if (window.scrollY > 0) {
        nav.classList.remove("disable")
        nav.classList.add("enable")
    }
    else {
        nav.classList.add("disable")
        nav.classList.remove("enable")
    }
}
// Register scroll event listener to show/hide navigation
window.addEventListener('scroll', showNav);

// Initialize navigation state on page load
document.addEventListener('DOMContentLoaded', showNav);
function Navigation() {
    return <nav class="disable navigation fade-in" id="navigation">
        <div id="navlogoli">
            <img src="./src/assets/delta.png" alt="Home" id="navlogo" />
            <p>Delta Developing</p>
        </div>
        <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
}

export default Navigation