import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { Mic, Square, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Recorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setTranscript("This is a sample transcript of your recorded audio. The AI has processed your voice input and converted it to text with high accuracy. You can now use this transcript in your workflows or export it for further use.");
      }, 2000);
    } else {
      setIsRecording(true);
      setTranscript("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B10]">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#F5F5F7] mb-2">Voice Recorder</h1>
          <p className="text-[#9CA3AF]">Record audio and transcribe in real-time</p>
        </div>

        {/* Recorder Card */}
        <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-12 rounded-2xl">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Recording Button */}
            <div className="relative">
              {isRecording && (
                <>
                  <motion.div
                    className="absolute inset-0 bg-[#B03052] rounded-full opacity-20"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#D76C82] rounded-full opacity-20"
                    animate={{ scale: [1, 1.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </>
              )}
              <Button
                onClick={handleRecord}
                className={`w-32 h-32 rounded-full transition-all duration-300 ${
                  isRecording
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gradient-to-br from-[#B03052] to-[#D76C82] hover:scale-105"
                } shadow-lg shadow-[rgba(176,48,82,0.5)]`}
              >
                {isRecording ? (
                  <Square className="w-12 h-12 text-white" />
                ) : (
                  <Mic className="w-12 h-12 text-white" />
                )}
              </Button>
            </div>

            {/* Status */}
            <div className="text-center">
              {isProcessing ? (
                <div className="text-[#D76C82] font-medium">Processing audio...</div>
              ) : isRecording ? (
                <div className="space-y-2">
                  <div className="text-[#F5F5F7] font-medium">Recording...</div>
                  <div className="text-sm text-[#9CA3AF]">Click to stop</div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-[#F5F5F7] font-medium">Ready to record</div>
                  <div className="text-sm text-[#9CA3AF]">Click to start recording</div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Transcript Output */}
        {transcript && (
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#F5F5F7]">Transcript</h2>
              <Button
                variant="outline"
                size="sm"
                className="bg-[#1A1A24] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] text-[#F5F5F7] flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
            <div className="bg-[#1A1A24] border border-[rgba(176,48,82,0.1)] rounded-xl p-4">
              <p className="text-[#F5F5F7] leading-relaxed">{transcript}</p>
            </div>
          </Card>
        )}

        {/* Info Card */}
        <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl">
          <h3 className="font-semibold text-[#F5F5F7] mb-3">How it works</h3>
          <ul className="space-y-2 text-sm text-[#9CA3AF]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-[#B03052] rounded-full mt-2"></span>
              <span>Click the microphone button to start recording</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-[#B03052] rounded-full mt-2"></span>
              <span>Speak clearly into your device's microphone</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-[#B03052] rounded-full mt-2"></span>
              <span>Click the stop button when you're done</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-[#B03052] rounded-full mt-2"></span>
              <span>Your audio will be transcribed automatically using AI</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
