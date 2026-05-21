import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./AIChat.css";

function AIChat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const bottomRef = useRef();

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = input;

        setMessages((prev) => [
            ...prev,
            { user: userMsg, bot: "Typing..." }
        ]);

        setInput("");

        try {
            const res = await axios.post(
                "http://localhost:8080/api/chat",
                { message: userMsg }
            );

            setMessages((prev) =>
                prev.map((msg, i) =>
                    i === prev.length - 1
                        ? { ...msg, bot: res.data.response }
                        : msg
                )
            );
        }catch (err) {
    console.error(err.response?.data || err.message);
}
    };

    // auto scroll
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="relative min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">

            {/* 🤖 SIDE AI AVATAR */}
            <div className="hidden md:flex absolute left-10 top-10 flex-col items-center animate-float z-10">
        <img
                    src="/ai_left.gif"
                    alt="AI Bot"
                    className="w-64 h-auto object-contain animate-float"
                />
        {/* <p className="text-white mt-2 text-sm">AI Assistant</p> */}
      </div>
            {/* 🤖 RIGHT SIDE IMAGE */}
            <div className="hidden lg:flex absolute right-10 bottom-10 z-10">
                <img
                    src="/ai.gif"
                    alt="AI Bot"
                    className="w-64 h-auto object-contain animate-float"
                />
            </div>
            {/* 💎 CHAT CONTAINER */}
            <div className="relative z-20 w-full max-w-3xl h-[85vh] flex flex-col 
      backdrop-blur-2xl bg-white/10 border border-white/20 
      shadow-2xl rounded-3xl overflow-hidden">

                {/* HEADER */}
                <div className="p-4 text-center text-white text-xl font-bold border-b border-white/20">
                    🤖 AI Assistant
                </div>

                {/* CHAT AREA */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">

                    {messages.map((m, i) => (
                        <div key={i} className="space-y-2">

                            {/* USER */}
                            <div className="flex justify-end items-end gap-2">
                                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-2xl max-w-xs shadow-lg">
                                    {m.user}
                                </div>
                                <div className="avatar">U</div>
                            </div>

                            {/* BOT */}
                            <div className="flex justify-start items-end gap-2">
                                <div className="avatar bot">🤖</div>
                                <div className="bg-white/20 text-white px-4 py-2 rounded-2xl max-w-xs backdrop-blur-md">
                                    {m.bot}
                                </div>
                            </div>

                        </div>
                    ))}

                    <div ref={bottomRef}></div>
                </div>

                {/* INPUT AREA */}
                <div className="p-4 border-t border-white/20 bg-white/10 backdrop-blur-md">

                    <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-2 shadow-md">

                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask anything..."
                            className="flex-1 outline-none text-gray-800"
                        />

                        <button
                            onClick={sendMessage}
                            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-4 py-2 rounded-xl font-bold hover:scale-110 active:scale-95 transition"  >
                            ➤
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default AIChat;