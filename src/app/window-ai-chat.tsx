"use client";

import { useRef, useState } from "react";
import { UnsupportedReadme } from "./readme";
import { useAITextSession } from "./use-ai";
import { useHasWindowAi } from "./use-has-window-ai";
import { cn } from "#src/utils/cn";

type Message = { text: string; author: "me" | "ai" };

export function WindowAiChat() {
  const supported = useHasWindowAi();
  const session = useAITextSession();
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [responseIsLoading, setResponseIsLoading] = useState(false);

  if (supported === null) return null;
  if (supported === false) return <UnsupportedReadme />;
  if (!session) return <div>starting up a local text session</div>;

  const handleInput = async () => {
    const input = inputRef.current?.value;
    if (input && input.length > 0) {
      setMessages((prev) => [...prev, { text: input, author: "me" }]);
      setResponseIsLoading(true);
      const res = await session.prompt(input);
      setMessages((prev) => [...prev, { text: res, author: "ai" }]);
      setResponseIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleInput();
        }}
      >
        <label>
          your prompt
          <input type="text" placeholder="who created you?" ref={inputRef} className="w-full border p-2"></input>
        </label>
      </form>
      <div className="h-8">{responseIsLoading ? "thinking..." : ""}</div>
      <div className="flex flex-col gap-4">
        {messages
          .slice()
          .reverse()
          .map(({ text, author }, i) => (
            <div
              key={i}
              className={cn(
                "max-w-[55ch] bg-white p-2 shadow-md",
                author === "me" ? "self-start bg-blue-100" : "self-end"
              )}
            >
              {text}
            </div>
          ))}
      </div>
    </div>
  );
}
