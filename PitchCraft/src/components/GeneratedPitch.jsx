export default function GeneratedPitch({ result, onSave }) {
  if (!result || result.error) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 w-full max-w-2xl mx-auto mt-8 shadow-inner">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        🎯 Generated Pitch
      </h3>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold text-gray-800">Name:</span>{" "}
          {result.name}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Tagline:</span>{" "}
          {result.tagline}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Pitch:</span>{" "}
          {result.pitch}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Audience:</span>{" "}
          {result.target_audience}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Landing Copy:</span>{" "}
          {result.landing_copy}
        </p>
      </div>

      <button
        onClick={() => onSave(result)}
        className="mt-5 w-full sm:w-auto px-6 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
      >
        Save to Dashboard
      </button>
    </div>
  );
}
