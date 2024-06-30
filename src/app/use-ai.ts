import { useEffect, useState } from "react";

export function useAITextSession() {
  const [textSession, setTextSession] = useState<AITextSession | null>(null);
  useEffect(() => {
    createTextSession()
      .then(setTextSession)
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return textSession;
}

async function createTextSession() {
  return await window.ai!.createTextSession();
}
