import { useState } from 'react'
import './App.css'

function Navigation() {
    return <nav>
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