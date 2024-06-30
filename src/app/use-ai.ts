import { useEffect, useState } from "react";

export function useAITextSession() {
  const [textSession, setTextSession] = useState<AITextSession | null>(null);
  useEffect(() => {
    createTextSession()
      .then(setTextSession)
      .catch(() => {
        //ignore
      });
  }, []);
  return textSession;
}

async function createTextSession() {
  return await window.ai!.createTextSession();
}
