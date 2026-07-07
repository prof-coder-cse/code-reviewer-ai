import Editor from "@monaco-editor/react";
import { Trash2, Copy, FileCode, Play } from "lucide-react";

const sampleCodes = {
  javascript: `function sum(){

return a+b;

}`,

  cpp: `#include<iostream>
using namespace std;

int main(){

int arr[5]={1,2,3,4,5};

for(int i=0;i<=5;i++){

cout<<arr[i];

}

}`,

  python: `def sum():
    return a+b`,

  java: `public class Main{

public static void main(String[] args){

System.out.println("Hello");

}

}`,
};

export default function EditorPanel({
  code,
  setCode,
  reviewCode,
  loading,
  language,
  setLanguage,
}) {
  function handleEditorWillMount(monaco) {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
  }

  return (
    <div className="flex flex-col h-full rounded-3xl border border-zinc-700 bg-[#161b22]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Header */}

      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-700">
        <div className="flex items-center gap-3">
          <h2 className="text-white font-bold text-lg">Code Editor</h2>

          <span className="text-green-400 text-sm">● Ready</span>
        </div>

        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setCode(sampleCodes[e.target.value]);
          }}
          className="bg-zinc-900 text-white px-3 py-2 rounded-lg outline-none"
        >
          <option value="javascript">JavaScript</option>
          <option value="cpp">C++</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>
      </div>

      {/* Editor */}

      <div className="flex-1">
        <Editor
          beforeMount={handleEditorWillMount}
          language={language}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          height="100%"
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 15,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            roundedSelection: true,
          }}
        />
      </div>

      {/* Footer */}

      <div className="border-t border-zinc-700 p-4 flex gap-3 flex-wrap">
        <button
          onClick={() => setCode("")}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-xl text-white"
        >
          <Trash2 size={18} />
          Clear
        </button>

        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-xl text-white"
        >
          <Copy size={18} />
          Copy
        </button>

        <button
          onClick={() => setCode(sampleCodes[language])}
          className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-xl text-white"
        >
          <FileCode size={18} />
          Sample
        </button>

        <button
          disabled={loading}
          onClick={reviewCode}
          className="ml-auto flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all px-8 py-3 rounded-xl font-bold text-white shadow-lg disabled:opacity-60"
        >
          <Play size={18} />

          {loading ? "Reviewing..." : "Review Code"}
        </button>
      </div>
    </div>
  );
}
