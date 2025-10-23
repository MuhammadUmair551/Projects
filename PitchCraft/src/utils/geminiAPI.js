import axios from "axios";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent";

export async function generatePitch(ideaText) {
  try {
    const prompt = `
      You are a startup pitch generator AI. Based on the user's idea below, generate:
      1. Startup Name
      2. Tagline
      3. 3-sentence Elevator Pitch
      4. Target Audience
      5. Landing Page Headline

      Idea: ${ideaText}
    `;

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      }
    );

    const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    const result = parsePitchResponse(text);

    return result;
  } catch (error) {
    console.error("Gemini error:", error);
    return { error: true, message: error.message };
  }
}

function parsePitchResponse(text) {
  const lines = text.split("\n").filter((l) => l.trim());
  return {
    name: extract(lines, "name") || "Untitled Startup",
    tagline: extract(lines, "tagline"),
    pitch: extract(lines, "pitch"),
    audience: extract(lines, "audience"),
    landing_copy: extract(lines, "landing"),
    raw: text,
  };
}

function extract(lines, keyword) {
  const line = lines.find((l) =>
    l.toLowerCase().includes(keyword.toLowerCase())
  );
  return line ? line.split(":").slice(1).join(":").trim() : "";
}
