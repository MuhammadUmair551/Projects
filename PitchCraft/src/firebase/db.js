import { ref, push, set } from "firebase/database";
import { db } from "./config";

export async function savePitch(userId, pitchData) {
  if (!userId) throw new Error("User not logged in");
  const newPitchRef = push(ref(db, "pitches/" + userId));
  await set(newPitchRef, {
    name: pitchData.name,
    tagline: pitchData.tagline,
    pitch: pitchData.pitch,
    audience: pitchData.audience,
    landing_copy: pitchData.landing_copy,
    createdAt: new Date().toISOString(),
  });
  return newPitchRef.key; 
}
