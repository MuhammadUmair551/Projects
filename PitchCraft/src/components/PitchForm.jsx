import { useState } from "react";
import { generatePitch } from "../utils/geminiAPI";

export default function PitchForm({ onGenerated, setLoading }) {
  const [idea, setIdea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    setLoading(true);
    const data = await generatePitch(idea);
    onGenerated(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Describe your startup idea..."
        className="w-full h-32 p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
      >
        Generate Pitch
      </button>
    </form>
  );
}
