import React, { useState } from "react";
import {
  FaFilePdf,
  FaUpload,
  FaMagic,
  FaDownload
} from "react-icons/fa";

const PdfSummarizer = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please upload a PDF file");
      return;
    }

    console.log("Uploaded File:", file);

    // API call here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center px-4 py-10">

      {/* Main Card */}
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="p-10 flex flex-col justify-center text-white">

          <div className="mb-6">
            <span className="bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              🚀 AI Powered
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            PDF <span className="text-yellow-300">Summarizer</span>
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Upload your study materials, notes, research papers, or ebooks
            and get an instant AI-generated summary in seconds.
          </p>

          {/* Features */}
          <div className="space-y-4">

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
              <FaFilePdf className="text-red-400 text-2xl" />
              <p>Upload PDF Notes Easily</p>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
              <FaMagic className="text-yellow-300 text-2xl" />
              <p>AI Generated Smart Summary</p>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
              <FaDownload className="text-green-400 text-2xl" />
              <p>Download Summary Anytime</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-10 flex flex-col justify-center items-center relative overflow-hidden">

          {/* Decorative Circle */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-pink-300 rounded-full opacity-30 blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-300 rounded-full opacity-30 blur-3xl"></div>

          {/* Image */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="PDF"
            className="w-40 mb-6 drop-shadow-2xl animate-bounce"
          />

          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Upload Your PDF
          </h2>

          <p className="text-gray-500 text-center mb-8">
            Drag & drop your file or browse from your device
          </p>

          {/* Upload Box */}
          <label className="w-full border-2 border-dashed border-purple-400 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-purple-50 transition duration-300">

            <FaUpload className="text-5xl text-purple-500 mb-4" />




            <p className="text-gray-600 font-medium">
              {file ? file.name : "Choose PDF File"}
            </p>

            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Button */}
          <button
            onClick={handleUpload}
            className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg shadow-xl hover:scale-105 transition duration-300"
          >
            ✨ Generate Summary
          </button>

        </div>
      </div>
    </div>
  );
};

export default PdfSummarizer;