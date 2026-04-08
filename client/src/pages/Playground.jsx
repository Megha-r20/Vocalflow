import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { Send, Trash2, Sliders, Zap, Clock, Terminal, Check, Copy, Ghost, Sparkles } from "lucide-react";
import "./Playground.css";

export default function Playground() {
  const [prompt, setPrompt] = useState("");
  const [activeModel, setActiveModel] = useState("grok-1");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([
    {
      id: 1,
      status: "Success",
      time: "250ms",
      content: "This is a pre-generated result showing how the playground tracks your previous transcriptions and AI processing attempts. You can copy these results or export them to your workflows.",
      timestamp: "Today, 10:45 AM"
    }
  ]);

  const models = [
    { id: "grok-1", name: "Grok-1", description: "Advanced reasoning & logic", badge: "Premium" },
    { id: "nova-2", name: "Deepgram Nova-2", description: "Lightning fast transcription", badge: "Speed" },
    { id: "whisper", name: "OpenAI Whisper", description: "Extremely high accuracy", badge: "Accurate" },
  ];

  const handleRun = () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    
    setTimeout(() => {
      const newResult = {
        id: Date.now(),
        status: "Success",
        time: "180ms",
        content: `Processed using ${activeModel}: "${prompt.slice(0, 50)}..."\n\nResult: This AI transformation successfully parsed your input and mapped it to the selected workflow parameters.`,
        timestamp: "Just now"
      };
      setResults([newResult, ...results]);
      setIsLoading(false);
      setPrompt("");
    }, 1500);
  };

  return (
    <div className="playground-container dashboard-animate-in">
      {/* Sidebar: Models & Parameters */}
      <aside className="playground-sidebar">
        <div className="playground-sidebar-header">
           <h2 className="playground-sidebar-title">Model Lab</h2>
           <p className="text-xs text-[#6B7280]">Configure your AI engine</p>
        </div>

        <div className="playground-section">
           <h3 className="playground-section-title">AI Engines</h3>
           <div className="space-y-3">
              {models.map(model => (
                <div 
                  key={model.id}
                  onClick={() => setActiveModel(model.id)}
                  className={`playground-model-card ${activeModel === model.id ? 'playground-model-card-active' : ''}`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="playground-model-name">{model.name}</span>
                    <span className="text-[9px] bg-[#B03052]/20 text-[#D76C82] px-2 py-0.5 rounded-full font-bold uppercase">{model.badge}</span>
                  </div>
                  <p className="text-[11px] text-[#6B7280]">{model.description}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="playground-section">
           <h3 className="playground-section-title">Parameters</h3>
           <div className="space-y-6">
              <div className="playground-parameter">
                 <div className="playground-parameter-label">
                    <span>Temperature</span>
                    <span className="playground-parameter-value">0.7</span>
                 </div>
                 <input type="range" className="playground-slider" min="0" max="1" step="0.1" defaultValue="0.7" />
              </div>
              <div className="playground-parameter">
                 <div className="playground-parameter-label">
                    <span>Top P</span>
                    <span className="playground-parameter-value">1.0</span>
                 </div>
                 <input type="range" className="playground-slider" min="0" max="1" step="0.1" defaultValue="1.0" />
              </div>
              <div className="playground-parameter">
                 <div className="playground-parameter-label">
                    <span>Max Tokens</span>
                    <span className="playground-parameter-value">2048</span>
                 </div>
                 <input type="range" className="playground-slider" min="256" max="4096" step="128" defaultValue="2048" />
              </div>
           </div>
        </div>
      </aside>

      {/* Main: Prompt Editor */}
      <main className="playground-main">
        <Navbar />
        <div className="playground-editor-header">
           <h2 className="playground-editor-title">Prompt Engineering</h2>
           <div className="flex gap-3">
              <button 
                onClick={() => setResults([])}
                className="p-2 text-[#6B7280] hover:text-[#F5F5F7] transition-colors"
              >
                <Trash2 size={20} />
              </button>
              <button 
                onClick={handleRun}
                disabled={isLoading}
                className="bg-gradient-to-r from-[#B03052] to-[#D76C82] hover:scale-105 transition-transform text-white font-bold py-2 px-6 rounded-xl flex items-center gap-2 shadow-lg shadow-[rgba(176,48,82,0.3)]"
              >
                {isLoading ? <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Zap size={16} fill="white" />}
                Run Lab
              </button>
           </div>
        </div>

        <div className="playground-editor">
           <div className="playground-input-area">
              <div className="flex items-center gap-2 mb-4 text-[#6B7280]">
                 <Terminal size={14} />
                 <span className="text-[10px] font-bold uppercase tracking-wider">System Input</span>
              </div>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Paste transcribe output or write your custom prompt instructions here..."
                className="playground-textarea"
              />
              <div className="flex justify-between items-center mt-4">
                 <div className="flex gap-2">
                    <button className="text-[10px] bg-[#1A1A24] text-[#9CA3AF] px-3 py-1 rounded-md border border-white/5 hover:border-white/10">Summarize</button>
                    <button className="text-[10px] bg-[#1A1A24] text-[#9CA3AF] px-3 py-1 rounded-md border border-white/5 hover:border-white/10">Fix Grammar</button>
                 </div>
                 <span className="text-[10px] text-[#6B7280] uppercase font-bold">{prompt.length} Characters</span>
              </div>
           </div>
        </div>
      </main>

      {/* Output: Results History */}
      <section className="playground-output">
         <div className="p-6 border-bottom border-white/5">
            <h3 className="text-[#F5F5F7] font-bold">Execution History</h3>
            <p className="text-[11px] text-[#6B7280]">Real-time transformation monitoring</p>
         </div>
         
         <div className="p-6 space-y-4">
            {results.map(res => (
              <div key={res.id} className="playground-result">
                 <div className="flex justify-between items-start mb-3">
                    <div className="playground-result-status">
                       <div className="playground-result-status-dot" />
                       {res.status}
                    </div>
                    <span className="text-[9px] text-[#6B7280] font-mono">{res.time}</span>
                 </div>
                 <p className="text-[12px] text-[#9CA3AF] leading-relaxed mb-4 border-l-2 border-[#B03052]/30 pl-3">
                    {res.content}
                 </p>
                 <div className="flex justify-between items-center text-[10px] text-[#6B7280]">
                    <span>{res.timestamp}</span>
                    <button className="hover:text-[#F5F5F7] transition-colors"><Copy size={12} /></button>
                 </div>
              </div>
            ))}

            {results.length === 0 && (
              <div className="flex flex-col items-center justify-center p-12 text-center opacity-30">
                 <Sparkles size={48} className="mb-4" />
                 <p className="text-xs">No lab executions yet</p>
              </div>
            )}
         </div>
      </section>
    </div>
  );
}
