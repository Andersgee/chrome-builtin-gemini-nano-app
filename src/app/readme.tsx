type Props = {
  className?: string;
};

export function UnsupportedReadme({ className }: Props) {
  return (
    <div>
      <h2 className="text-lg">
        Chrome recently added a small browser builtin LLM, accessible via{" "}
        <code className="bg-neutral-200 px-1 font-mono">window.ai()</code>. To enable it, follow these steps:
      </h2>
      <ol className="list-inside list-decimal">
        <li>
          Download/install{" "}
          <a className="text-blue-500" href="https://www.google.com/chrome/dev/?extra=devchannel">
            Chrome Dev
          </a>{" "}
          browser
        </li>
        <li>
          Go to <code>chrome://flags/#prompt-api-for-gemini-nano</code> and select <code>Enabled</code>
        </li>
        <li>
          Go to <code>chrome://flags/#optimization-guide-on-device-model</code> and select{" "}
          <code>Enabled BypassPrefRequirement</code>
        </li>
        <li>restart your chrome browser</li>
        <li>
          Go to <code>chrome://components</code> and under the <code>Optimization Guide On Device Model</code> section
          click on <code>Check for update</code> button. wait for that component to download
        </li>
        <li>Restart your chrome browser</li>

        <li>This website will now be a chat instead</li>
      </ol>
    </div>
  );
}
