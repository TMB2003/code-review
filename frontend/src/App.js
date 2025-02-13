// App.js
import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import axios from "axios";
import RehypeHighlight from "rehype-highlight";
import Markdown from "react-markdown";
import './App.css';

function App() {
  const [code, setCode] = useState(`function sum() {\n return 1 + 1;\n}`);
  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3001/ai/get-response", { code });
      setReview(response.data);
    } catch (error) {
      console.error("API request failed:", error);
      setReview("❌ Error: Could not fetch review. Check console for details.");
    }
  }


  return (
    <main>
      <h1>AI Code Reviewer</h1>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div onClick={reviewCode} className="review">Review</div>
      </div>
      <div className="right">
        <Markdown rehypePlugins={[RehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
  );
}

export default App;
