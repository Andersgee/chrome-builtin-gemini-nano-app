"use client";

import { UnsupportedReadme } from "./readme";
import { useHasWindowAi } from "./use-has-window-ai";

type Props = {
  className?: string;
};

export function WindowAiChat({ className }: Props) {
  const supported = useHasWindowAi();
  if (supported === null) return null;
  if (supported === false) return <UnsupportedReadme />;

  return (
    <div>
      <div>supported: {JSON.stringify(supported)}</div>
      <div>gemini-nano</div>
    </div>
  );
}
