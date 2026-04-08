import React, { useState } from "react";
import { Settings, Play, Info, Terminal } from "lucide-react";

export default function OutputPanel({ selectedNode }) {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <aside className="app-right-panel">
      {/* Tabs */}
      <div className="app-panel-tabs">
        <button 
          onClick={() => setActiveTab("settings")}
          className={`app-panel-tab ${activeTab === "settings" ? "app-panel-tab-active" : ""}`}
        >
          <Settings size={14} className="inline mr-2" />
          Settings
        </button>
        <button 
          onClick={() => setActiveTab("output")}
          className={`app-panel-tab ${activeTab === "output" ? "app-panel-tab-active" : ""}`}
        >
          <Terminal size={14} className="inline mr-2" />
          Output
        </button>
      </div>

      {/* Content */}
      <div className="app-panel-content flex-1">
        {activeTab === "settings" ? (
          <div className="space-y-6">
            <h3 className="app-sidebar-section-title">Node Configuration</h3>
            {selectedNode ? (
              <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-xs text-[#6B7280] mb-1">Node ID</div>
                  <div className="text-[#F5F5F7] font-mono">{selectedNode}</div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#9CA3AF]">Node Label</label>
                  <input 
                    type="text" 
                    placeholder="Enter label..."
                    className="w-full bg-[#1A1A24] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#F5F5F7] focus:outline-none focus:border-[#B03052]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#9CA3AF]">API Endpoint</label>
                  <select className="w-full bg-[#1A1A24] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#F5F5F7] focus:outline-none focus:border-[#B03052]">
                    <option>Deepgram Nova-2</option>
                    <option>Deepgram Whisper</option>
                    <option>Grok-1</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-center px-4">
                <Info size={32} className="text-[#6B7280] mb-4 opacity-50" />
                <p className="text-sm text-[#6B7280]">Select a node on the canvas to configure its properties</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
             <h3 className="app-sidebar-section-title">Execution Log</h3>
             <div className="font-mono text-[11px] text-[#9CA3AF] space-y-2 p-3 bg-black/40 rounded-lg border border-white/5">
                <div className="text-green-500">[SYSTEM] Pipeline initialized...</div>
                <div>[AUDIO] Fetching input stream...</div>
                <div>[TRANS] Processing with Deepgram...</div>
                <div className="text-blue-400">[AI] Analyzing transcription context...</div>
                <div className="animate-pulse">_</div>
             </div>
          </div>
        )}
      </div>

      {/* Footer Action */}
      <div className="p-4 border-top border-white/5">
        <button className="w-full bg-gradient-to-r from-[#B03052] to-[#D76C82] hover:scale-[1.02] transition-transform text-white font-bold py-3 rounded-xl shadow-lg shadow-[rgba(176,48,82,0.2)] flex items-center justify-center gap-2">
           <Play size={16} /> Run Workflow
        </button>
      </div>
    </aside>
  );
}
