import { WindowAiChat } from "./window-ai-chat";

export default function Home() {
  return (
    <main className="flex justify-center p-2">
      <div className="container">
        <h1 className="text-4xl">Gemini nano in-browser chat app</h1>
        <WindowAiChat />
      </div>
    </main>
  );
}
