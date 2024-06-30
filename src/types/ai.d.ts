type AITextSession = {
  prompt: (input: string) => Promise<string>;
};

interface Window {
  //TODO: find some reference of what this is
  ai?: {
    createTextSession: () => Promise<AITextSession>;
  };
}
