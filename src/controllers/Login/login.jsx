import React from "react";
import { Link } from "react-router-dom";
import "./login.css";


export const Login = () => {
    return (
        <>
            <form className="contactForm">
                <h3>Log In</h3>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="button" onclick="submitForm()">Log In</button>

                <h4>Already a member?</h4>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </form>

        </>
    );
}