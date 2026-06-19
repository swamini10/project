import React, { useState } from "react";
import axios from "axios";

const Quiz = () => {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    try {
      setLoading(true);
      setQuiz("");

      const response = await axios.post(
        "http://localhost:8080/api/quiz/generate",
        { topic }
      );

      setQuiz(response.data);
    } catch (error) {
      console.error(error);
      alert("Error generating quiz");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-4">

      {/* Glass Card */}
      <div className="w-full max-w-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 text-white">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-2">
          🧠 AI Quiz Generator
        </h1>

        <p className="text-center text-white/70 mb-8">
          Enter a topic and generate smart AI quizzes instantly
        </p>

        {/* Input Box */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter topic (e.g. Java, DBMS, AI)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 outline-none"
          />

          <button
            onClick={generateQuiz}
            disabled={loading}
            className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 transition duration-300 shadow-lg"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        {/* Output */}
        {quiz && (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mt-6 max-h-[400px] overflow-y-auto">
            <h3 className="text-xl font-bold mb-3">📘 Your Quiz</h3>
            <pre className="whitespace-pre-wrap text-white/80 leading-relaxed">
              {quiz}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
};

export default Quiz;