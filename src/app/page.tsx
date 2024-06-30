import { WindowAiChat } from "./window-ai-chat";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div>
        <h1 className="text-xl">Gemini nano app</h1>
        <WindowAiChat />
      </div>
    </main>
  );
}
