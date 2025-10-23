import { useState } from "react";
import PitchForm from "../components/PitchForm";
import GeneratedPitch from "../components/GeneratedPitch";
import Loader from "../components/Loader";
import { savePitch } from "../firebase/db";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";

export default function CreatePitch() {
  const [pitchData, setPitchData] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!user) {
      alert("Please login first!");
      return;
    }

    try {
      const id = await savePitch(user.uid, pitchData);
      alert("Pitch saved successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error saving pitch:", err);
      alert("Error saving pitch. Check console for details.");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-28 pb-20 px-4">

      <div className="absolute top-6 right-6">
        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 transition font-medium"
        >
          🏠 Dashboard
        </Link>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Create Your <span className="text-blue-600">Pitch</span> 🚀
        </h1>
        <p className="text-gray-600 mt-2 text-base sm:text-lg">
          Describe your startup idea and let AI generate a name, tagline, and perfect elevator pitch for you.
        </p>
      </div>

      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition duration-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
            ✍️ Enter Your Startup Idea
          </h2>

          <PitchForm
            onGenerated={(data) => {
              setLoading(false);
              setPitchData(data);
            }}
            setLoading={setLoading}
          />

          {loading && <Loader />}
        </div>

        {pitchData && !loading && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition duration-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              💡 Your Generated Pitch
            </h2>

            <GeneratedPitch
              result={pitchData}
              onSave={handleSave}
            />
          </div>
        )}
      </div>

      <div className="absolute top-20 left-16 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 hidden md:block animate-pulse"></div>
      <div className="absolute bottom-24 right-16 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30 hidden md:block animate-pulse"></div>
    </section>
  );
}
