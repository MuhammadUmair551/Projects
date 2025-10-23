import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert("Login Successful!");
            navigate('/dashboard');
        } catch (error) {
            console.error("Registration error:", error);
        }

    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Login to continue your PitchCraft journey
                </p>

                <form onSubmit={handleLogin} className="space-y-5">
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-400 text-white font-semibold rounded-xl hover:bg-purple-500 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-600 text-sm mt-5">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-indigo-600 hover:underline font-medium">
                        Register now
                    </Link>
                </p>
            </div>
        </section>
    );
}
