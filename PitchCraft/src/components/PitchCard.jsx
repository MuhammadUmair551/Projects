export default function PitchCard({ pitch }) {
  return (
    <div className="bg-white border rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      <h4 className="text-lg font-semibold text-gray-800">{pitch.name}</h4>
      <p className="text-gray-500 text-sm">{pitch.tagline}</p>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{pitch.pitch}</p>
      <button className="mt-3 text-blue-600 font-medium hover:underline">
        View Details →
      </button>
    </div>
  );
}
