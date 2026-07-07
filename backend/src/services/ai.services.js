import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function aiService(prompt, language) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",

    systemInstruction: `
You are CodeLens AI.

You are a Senior Software Engineer.

Review code like GitHub Pull Request Review.

Return ONLY markdown.

Never teach programming.
Example:

# 🚀 AI Code Review

## ⭐ Overall Score

7.5 / 10

## 🔴 Critical Issues

- Undefined variables.

Now review the user's code using EXACTLY this format.
`,

    contents: `
Programming Language: ${language}

Review the following code.

Return ONLY markdown.

Follow EXACTLY this format.

# 🚀 AI Code Review

## ⭐ Overall Score

Give score out of 10.

---

## 🟢 Strengths

Maximum 3 points.

---

## 🔴 Critical Issues

Explain WHY.

---

## 🟡 Improvements

Mention best practices.

---

## ⚡ Performance

Time Complexity

Space Complexity

Optimization Suggestions

---

## 🔒 Security

Mention security issues.

---

## ✨ Improved Code

Return complete improved code inside a markdown code block.

---

## 🎯 Final Verdict

Maximum 3 lines.

DO NOT explain the programming language.

DO NOT teach syntax.

Review ONLY.

Code:

\`\`\`${language}
${prompt}
\`\`\`
`,
  });

  return response.text.trim();
}

export default aiService;
