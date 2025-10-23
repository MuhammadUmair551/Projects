import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-center px-6 pt-20">
      
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
          Turn Your <span className="text-blue-600">Idea</span> Into a Perfect{" "}
          <span className="text-indigo-500">Pitch</span>
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl mb-8">
          AI-powered platform that transforms your startup concept into an investor-ready
          pitch — name, tagline, and description in seconds 🚀
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-200"
          >
            Register
          </Link>

          <Link
            to="/login"
            className="border border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition duration-200"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-32 right-20 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse hidden md:block"></div>
    </section>
  );
}
