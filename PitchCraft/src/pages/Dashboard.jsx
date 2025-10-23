import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ref, onValue, remove } from "firebase/database";
import { db } from "../firebase/config";
import { auth } from "../firebase/config";

export default function Dashboard() {
  const [pitches, setPitches] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const pitchesRef = ref(db, "pitches/" + user.uid);
    onValue(pitchesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loaded = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setPitches(loaded.reverse());
      } else {
        setPitches([]);
      }
    });
  }, [user]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this pitch?")) {
      await remove(ref(db, `pitches/${user.uid}/${id}`));
      alert("Pitch deleted successfully!");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-24 pb-20 px-6 relative">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800">
            Your <span className="text-blue-600">Pitches</span> 🎯
          </h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Manage and view all your AI-generated startup pitches here.
          </p>
        </div>

        <Link
          to="/create"
          className="mt-5 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition font-medium"
        >
          + Create New Pitch
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {pitches.length > 0 ? (
          pitches.map((pitch) => (
            <div
              key={pitch.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-200"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {pitch.name}
              </h2>
              <p className="text-gray-500 text-sm mb-3">{pitch.tagline}</p>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {pitch.pitch}
              </p>

              <div className="flex justify-between items-center">
                <button
                  onClick={() =>
                    alert(
                      `\nName: ${pitch.name}\n\nTagline: ${pitch.tagline}\n\nPitch: ${pitch.pitch}\n\nAudience: ${pitch.audience}\n\nLanding: ${pitch.landing_copy}`
                    )
                  }
                  className="text-blue-600 font-medium hover:underline text-sm"
                >
                  View Details
                </button>

                <button
                  onClick={() => handleDelete(pitch.id)}
                  className="text-red-500 hover:underline text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center mt-20">
            <h3 className="text-gray-600 text-lg">
              😢 No pitches found yet.
            </h3>
            <p className="text-gray-500 mt-2">
              Click below to generate your first AI pitch.
            </p>
            <Link
              to="/create"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              + Create Pitch
            </Link>
          </div>
        )}
      </div>

      <div className="absolute top-24 left-12 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 hidden md:block animate-pulse"></div>
      <div className="absolute bottom-24 right-16 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30 hidden md:block animate-pulse"></div>
    </section>
  );
}
