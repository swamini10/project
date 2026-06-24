
import React, { useState, useRef, useEffect } from "react";
import {
  FaFilePdf,
  FaPaperPlane,
  FaRobot,
  FaUpload,
} from "react-icons/fa";

const ChatPDF = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [streamingText, setStreamingText] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, streamingText]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      return;
    }

    setPdfFile(file);

    // Optional backend upload
    // uploadPDF(file);
  };

  const streamResponse = (text) => {
    let index = 0;

    setStreamingText("");

    const interval = setInterval(() => {
      if (index < text.length) {
        setStreamingText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);

        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text,
          },
        ]);

        setStreamingText("");
      }
    }, 20);
  };

  const handleSend = () => {
    if (!question.trim()) return;

    const userQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userQuestion,
      },
    ]);

    setQuestion("");

    // Replace with your Spring Boot API call
    const aiAnswer =
      "working on it....";

    setTimeout(() => {
      streamResponse(aiAnswer);
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">

      {/* Animated Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-bounce"></div>

      <div className="relative z-10 flex h-screen p-6 gap-6">

        {/* Sidebar */}
        <div className="w-80 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col">

          <h1 className="text-3xl font-extrabold text-white mb-6">
            📄 ChatPDF
          </h1>

          {/* Upload Area */}
          <label
            htmlFor="pdf-upload"
            className="border-2 border-dashed border-white/30 rounded-2xl p-6 text-center hover:bg-white/10 transition duration-300 cursor-pointer block"
          >
            <FaUpload className="mx-auto text-4xl text-white mb-3" />

            <h3 className="text-white font-semibold">
              Upload PDF
            </h3>

            <p className="text-white/70 text-sm mt-2">
              Click to Upload
            </p>

            <input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              hidden
              onChange={handleFileUpload}
            />
          </label>

          {/* Uploaded File */}
          <div className="mt-6">
            <h2 className="text-white font-semibold mb-3">
              Uploaded Files
            </h2>

            {pdfFile ? (
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl hover:scale-105 transition duration-300">

                <FaFilePdf className="text-red-400 text-2xl" />

                <div>
                  <p className="text-white text-sm font-medium">
                    {pdfFile.name}
                  </p>

                  <p className="text-green-300 text-xs">
                    Ready to chat
                  </p>
                </div>

              </div>
            ) : (
              <p className="text-white/60 text-sm">
                No PDF uploaded
              </p>
            )}
          </div>

        </div>

        {/* Chat Area */}
        <div className="flex-1 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="p-6 border-b border-white/20">

            <h2 className="text-2xl font-bold text-white">
              🤖 Chat With Your PDF
            </h2>

            <p className="text-white/70">
              Ask questions directly from your PDFs
            </p>

          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">

            {messages.map((msg, index) => (
              <div key={index}>
                {msg.sender === "user" ? (
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-3 rounded-2xl max-w-lg shadow-lg">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">

                    <div className="bg-white/20 p-3 rounded-full">
                      <FaRobot className="text-white" />
                    </div>

                    <div className="bg-white/15 backdrop-blur-lg text-white p-5 rounded-2xl max-w-xl border border-white/10">
                      {msg.text}
                    </div>

                  </div>
                )}
              </div>
            ))}

            {/* Streaming Message */}
            {streamingText && (
              <div className="flex items-start gap-3">

                <div className="bg-white/20 p-3 rounded-full">
                  <FaRobot className="text-white" />
                </div>

                <div className="bg-white/15 backdrop-blur-lg text-white p-5 rounded-2xl max-w-xl border border-white/10">
                  {streamingText}
                  <span className="animate-pulse">|</span>
                </div>

              </div>
            )}

            <div ref={messagesEndRef}></div>

          </div>

          {/* Input */}
          <div className="p-5 border-t border-white/20">

            <div className="flex items-center gap-4">

              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSend()
                }
                placeholder="Ask something from your PDF..."
                className="flex-1 bg-white/20 backdrop-blur-lg border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/60 outline-none"
              />

              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-4 rounded-xl text-white shadow-lg hover:scale-110 transition duration-300"
              >
                <FaPaperPlane />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ChatPDF;
