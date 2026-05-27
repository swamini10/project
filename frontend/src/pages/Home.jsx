import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0F172A] min-h-screen">

      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 h-screen w-64 z-50">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="ml-64">

        {/* NAVBAR */}
        <div className="sticky top-0 z-40 backdrop-blur-xl bg-[#0F172A]/80 border-b border-white/10">
          <Navbar />
        </div>

        {/* PAGE CONTENT */}
        <div className="overflow-y-auto">

          {/* HERO SECTION */}
          {/* HERO SECTION */}
<section className="relative px-10 py-16 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

  <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

    {/* LEFT SIDE */}
    <div>

      {/* Badge */}
      <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg mb-6">
        <span className="text-pink-400 font-semibold">
          🚀 AI Powered Learning
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-6xl font-extrabold text-white leading-tight mb-6">
        Welcome to <br />

        <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          AI Study Assistant
        </span>
      </h1>

      {/* Description */}
      <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-10">
        Upload PDFs, generate smart summaries, create flashcards,
        quizzes, and chat with your study notes using AI.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/summarizer")}
        className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-8 py-4 rounded-2xl text-white font-bold shadow-2xl hover:scale-105 transition duration-300"
      >
        ✨ Lets Start
      </button>

    </div>

   {/* RIGHT SIDE IMAGE */}
<div className="relative flex justify-center items-center">

  {/* Glow */}
  <div className="absolute w-[550px] h-[550px] bg-purple-500/20 blur-[140px] rounded-full"></div>

  {/* Robot GIF */}
  <img
    src="/1.gif"
    alt="AI Robot"
    className="relative z-10 w-[950px] object-contain mix-blend-screen"
  />

</div>
  </div>

</section>

          {/* FEATURES SECTION */}
          <section className="px-10 py-10">

            <div className="mb-14">
              <h2 className="text-4xl font-bold text-white mb-3">
                Powerful AI Features
              </h2>

              <p className="text-white/50">
                Everything you need to learn smarter and faster.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {[
                {
                  title: "PDF Summary",
                  icon: "📄",
                  desc: "Instantly summarize long PDFs into short notes."
                },
                {
                  title: "AI Quiz",
                  icon: "🧠",
                  desc: "Generate quizzes automatically from notes."
                },
                {
                  title: "Chat With PDF",
                  icon: "💬",
                  desc: "Ask questions directly from your PDFs."
                },
                {
                  title: "Voice Summary",
                  icon: "🎤",
                  desc: "Listen to summaries with AI voice."
                },
                {
                  title: "Mind Maps",
                  icon: "🗺️",
                  desc: "Visualize concepts using AI-generated mindmaps."
                },
                {
                  title: "Flashcards",
                  icon: "📚",
                  desc: "Generate study flashcards instantly."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-pink-500/40 hover:-translate-y-2 transition duration-500 shadow-xl"
                >

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-pink-500/20 to-indigo-500/20 flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </section>

          {/* STATS SECTION */}
          <section className="px-10 py-16">

            <div className="grid md:grid-cols-4 gap-6">

              {[
                { number: "10K+", label: "Users" },
                { number: "50K+", label: "PDFs Summarized" },
                { number: "99%", label: "Accuracy" },
                { number: "24/7", label: "AI Support" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl"
                >
                  <h2 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent mb-3">
                    {item.number}
                  </h2>

                  <p className="text-white/60 text-lg">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </section>

          {/* CTA SECTION */}
          <section className="px-10 pb-20">

            <div className="relative overflow-hidden bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-white/10 rounded-[40px] p-14 text-center backdrop-blur-2xl">

              {/* Glow */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

              <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

              <div className="relative z-10">

                <h2 className="text-5xl font-extrabold text-white mb-6">
                  Start Learning Smarter 🚀
                </h2>

                <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                  Upload your notes and let AI help you summarize,
                  analyze, and understand concepts faster.
                </p>

                <button
                  onClick={() => navigate("/summarizer")}
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-10 py-5 rounded-2xl text-white text-xl font-bold shadow-2xl hover:scale-105 transition duration-300"
                >
                  ✨ Get Started Now
                </button>

              </div>

            </div>

          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;