import { useEffect, useState } from "react";

export function useHasWindowAi() {
  const [supported, setSupported] = useState<null | boolean>(null);
  useEffect(() => {
    if (typeof window.ai !== "undefined") {
      setSupported(true);
    } else {
      setSupported(false);
    }
  }, []);
  return supported;
}
