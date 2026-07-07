import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-20 border-b border-zinc-800 bg-[#0b1220]/90 backdrop-blur-xl px-8 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex justify-center items-center shadow-lg">
          <Sparkles className="text-white" size={24} />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            CodeLens AI
          </h1>

          <p className="text-zinc-400 text-sm">AI Powered Code Reviewer</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="px-4 py-2 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 font-medium">
          🟢 Gemini 2.5 Flash
        </span>

        <span className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300">
          v1.0
        </span>
      </div>
    </nav>
  );
}
