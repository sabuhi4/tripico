"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function SignInPage() {
    const [message, setMessage] = useState("");

    const handleSignIn = async () => {
        try {
            await signIn("google");
            setMessage("Sign-in successful!");
        } catch (error) {
            setMessage("Sign-in failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h1>
                <button
                    onClick={handleSignIn}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                >
                    Sign in with Google
                </button>
                {message && <p className="text-center text-green-600 mt-4">{message}</p>}
            </div>
        </div>
    );
}