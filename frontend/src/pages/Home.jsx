import { useState } from "react";

import Navbar from "../components/Navbar";
import EditorPanel from "../components/EditorPanel";
import ReviewPanel from "../components/ReviewPanel";

import api from "../services/api";

export default function Home() {
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(`function sum(){

return a+b;

}`);

  const [review, setReview] = useState("");

  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    try {
      setLoading(true);

      const res = await api.post("/ai/get-response", {
        prompt: code,
        language,
      });

      setReview(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden">
      <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-600/20 blur-[150px] -top-40 -left-32"></div>

      <div className="absolute w-[450px] h-[450px] rounded-full bg-purple-700/20 blur-[160px] bottom-0 right-0"></div>

      <Navbar />

      <div className="px-8 py-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            AI Powered Code Review
          </h1>

          <p className="text-zinc-400 mt-2 text-lg">
            Analyze code quality, security, performance and receive AI generated
            suggestions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 h-[78vh]">
          <EditorPanel
            code={code}
            setCode={setCode}
            reviewCode={reviewCode}
            loading={loading}
            language={language}
            setLanguage={setLanguage}
          />

          <ReviewPanel review={review} loading={loading} />
        </div>
      </div>
    </div>
  );
}
