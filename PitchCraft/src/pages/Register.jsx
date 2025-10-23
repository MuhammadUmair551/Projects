// src/pages/Register.jsx
import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert("Registration successful! You can now log in.");
            navigate('/login');
        } catch (error) {
            console.error("Registration error:", error);
        }
        
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Create Your Account
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Join PitchCraft and turn your ideas into magic ✨
                </p>

                <form onSubmit={handleRegister} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-left text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-left text-gray-700 font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-400 text-white font-semibold rounded-xl hover:bg-purple-500  00 transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-gray-600 text-sm mt-5">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                        Login here
                    </Link>
                </p>
            </div>
        </section>
    );
}
