import { Bot, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

export default function ReviewPanel({ review, loading }) {
  const [copied, setCopied] = useState(false);

  const copyReview = () => {
    navigator.clipboard.writeText(review);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full rounded-3xl border border-zinc-700 bg-[#161b22]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Header */}

      <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-700">
        <div className="flex items-center gap-3">
          <Bot className="text-blue-500" />

          <div>
            <h2 className="text-white font-bold">AI Review</h2>

            <p className="text-zinc-400 text-xs">Powered by Gemini</p>
          </div>
        </div>

        {review && (
          <button
            onClick={copyReview}
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl text-white transition"
          >
            {copied ? (
              <>
                <CheckCircle2 size={18} />
                Copied
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {/* Body */}

      <div className="flex-1 overflow-y-auto p-6">
        {loading ? (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-16 h-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>

            <h2 className="text-white text-xl font-semibold mt-8">
              AI is Reviewing...
            </h2>

            <p className="text-zinc-400 mt-2">
              Checking bugs, performance & security...
            </p>
          </div>
        ) : review ? (
          <article
            className="
prose
prose-invert
max-w-none
prose-headings:text-white
prose-h2:text-blue-400
prose-h3:text-white
prose-strong:text-blue-400
prose-pre:bg-[#0f172a]
prose-pre:border
prose-pre:border-zinc-700
prose-pre:rounded-xl
"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {review}
            </ReactMarkdown>
          </article>
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <Bot size={70} className="text-zinc-600" />

            <h2 className="text-white text-2xl font-bold mt-6">
              Ready to Review
            </h2>

            <p className="text-zinc-400 mt-2 text-center max-w-md">
              Paste your code in the editor and click
              <span className="text-blue-400 font-semibold">
                {" "}
                Review Code
              </span>{" "}
              to receive an AI powered review.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
