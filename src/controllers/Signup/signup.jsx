import React from "react";

export const Signup = () => {
    return (
        <>
            <form className="contactForm">
                <h3>Sign Up</h3>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="button" onclick="submitForm()">Sign Up</button>
            </form>
        </>
    );
};