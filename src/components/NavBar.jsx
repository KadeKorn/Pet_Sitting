import React, { useState } from 'react';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Additional logic to toggle dark mode for the whole site can be added here
    }

    return (
        <nav className="bg-blue-600 p-4 text-white">
            <ul className="flex justify-between">
                <li className="mr-4">
                    <a href="#testimonials" className="hover:text-blue-300">Testimonials</a>
                </li>
                <li className="mr-4">
                    <a href="#aboutme" className="hover:text-blue-300">About Me</a>
                </li>
                <li className="mr-4">
                    <a href="#bookwithme" className="hover:text-blue-300">Book with Me</a>
                </li>
                <li>
                    <button 
                        onClick={toggleDarkMode}
                        className="bg-gray-700 hover:bg-gray-500 text-white p-2 rounded"
                    >
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
