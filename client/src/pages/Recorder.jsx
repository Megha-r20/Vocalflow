import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { Mic, Square, Download, Play, Trash2, Settings, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Recorder.css";

export default function Recorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [time, setTime] = useState(0);

  // Timer logic
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      setTime(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setTranscript("This is a sample transcript of your recorded audio. Our advanced AI has automatically identified key points from your recording, highlighting the primary focus on speech clarity and context extraction. You can now use this text in any of your active workflows.");
      }, 2500);
    } else {
      setTranscript("");
      setIsRecording(true);
    }
  };

  const recordings = [
    { id: 1, name: "Project Update.wav", duration: "02:45", date: "Today, 2:30 PM" },
    { id: 2, name: "Quick Memo.mp3", duration: "00:52", date: "Yesterday, 4:15 PM" },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden dashboard-animate-in">
      <Navbar />

      <div className="flex-1 overflow-y-auto custom-scrollbar pt-10 pb-20">
        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Header */}
        <div className="recorder-header">
          <h1 className="recorder-title">Voice Studio</h1>
          <p className="recorder-subtitle">High-fidelity recording with real-time AI transcription</p>
        </div>

        {/* Main Recorder Section */}
        <div className="recorder-card">
          <div className="flex flex-col items-center">
            
            {/* Visualizer */}
            <div className="recorder-visualizer w-full">
              {[...Array(24)].map((_, i) => (
                <div 
                  key={i} 
                  className={`recorder-visualizer-bar ${isRecording ? 'visualizer-pulse-active' : ''}`}
                  style={{ height: isRecording ? undefined : '4px' }}
                />
              ))}
            </div>

            {/* Timer */}
            <div className={`recorder-timer-display mb-8 ${isRecording ? 'recorder-timer-recording' : ''}`}>
               {formatTime(time)}
            </div>

            {/* Controls */}
            <div className="recorder-main-button-container">
               <button 
                onClick={handleRecord}
                className={`recorder-main-button ${isRecording ? 'recorder-button-recording' : ''}`}
               >
                 <div className="recorder-button-inner">
                    {isRecording ? <Square size={40} /> : <Mic size={40} />}
                 </div>
               </button>
               <div className="text-sm font-semibold tracking-widest text-[#6B7280] uppercase">
                  {isProcessing ? "Finalizing..." : isRecording ? "Recording Live" : "Ready to Start"}
               </div>
            </div>

            {/* Level Meter */}
            <div className="recorder-level-meter">
               <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-[#6B7280] font-bold uppercase tracking-wider">Input Level</span>
                  <Volume2 size={12} className="text-[#6B7280]" />
               </div>
               <div className="recorder-level-meter-bar">
                  <div className="recorder-level-meter-fill" style={{ width: isRecording ? '65%' : '0%' }}></div>
               </div>
            </div>
          </div>

          {/* Settings Subpanel */}
          <div className="recorder-settings">
             <h3 className="recorder-settings-title">Recording Settings</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] text-[#9CA3AF] font-bold uppercase">Source</label>
                  <select className="recorder-select">
                    <option>Built-in Microphone</option>
                    <option>USB Audio Interface</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] text-[#9CA3AF] font-bold uppercase">AI Model</label>
                  <select className="recorder-select">
                    <option>Deepgram Nova-2 (Fast)</option>
                    <option>Whisper Large-v3 (Accurate)</option>
                  </select>
                </div>
             </div>
          </div>
        </div>

        {/* Output & History Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           
           {/* Transcript Column */}
           <div className="lg:col-span-2">
              <AnimatePresence>
                {transcript && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#12121A] border border-[rgba(176,48,82,0.2)] p-6 rounded-3xl"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-bold text-[#F5F5F7]">Transcription Output</h2>
                      <Button className="bg-[#B03052] hover:bg-[#D76C82] text-xs h-8 px-4 flex items-center gap-2">
                        <Download size={14} /> Export
                      </Button>
                    </div>
                    <div className="bg-black/20 p-5 rounded-2xl border border-white/5 leading-relaxed text-[#9CA3AF]">
                      {transcript}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>

           {/* History Column */}
           <div className="recorder-recordings lg:mt-0">
              <h2 className="recorder-recordings-title">Recent Sessions</h2>
              <div className="space-y-3">
                 {recordings.map(rec => (
                   <div key={rec.id} className="recorder-recording-item">
                      <div className="recorder-recording-play">
                         <Play size={16} fill="currentColor" />
                      </div>
                      <div className="flex-1">
                         <div className="text-sm font-bold text-[#F5F5F7]">{rec.name}</div>
                         <div className="text-[10px] text-[#6B7280]">{rec.duration} • {rec.date}</div>
                      </div>
                      <button className="text-[#6B7280] hover:text-red-400 transition-colors">
                         <Trash2 size={16} />
                      </button>
                   </div>
                 ))}
              </div>
           </div>

        </div>
        </div>
      </div>
    </div>
  );
}
