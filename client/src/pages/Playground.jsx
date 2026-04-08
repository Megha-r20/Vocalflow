import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Textarea from "../components/common/Textarea";
import { Send, Trash2, Copy, Check } from "lucide-react";

export default function Playground() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleSend = () => {
    if (!prompt.trim()) return;

    const userMessage = { role: "user", content: prompt };
    setMessages([...messages, userMessage]);
    setPrompt("");
    setIsProcessing(true);

    setTimeout(() => {
      const assistantMessage = {
        role: "assistant",
        content: "This is a sample AI response. In a real implementation, this would connect to your AI processing pipeline and return intelligent responses based on your voice workflow configuration."
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsProcessing(false);
    }, 1500);
  };

  const handleClear = () => {
    setMessages([]);
  };

  const handleCopy = (content, index) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B0B10]">
      <Navbar />

      <div className="max-w-5xl mx-auto p-8 h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#F5F5F7] mb-2">AI Playground</h1>
              <p className="text-[#9CA3AF]">Test and experiment with AI processing</p>
            </div>
            {messages.length > 0 && (
              <Button
                onClick={handleClear}
                variant="outline"
                className="bg-[#12121A] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] text-[#F5F5F7] flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear Chat
              </Button>
            )}
          </div>
        </div>

        {/* Messages Area */}
        <Card className="flex-1 bg-[#12121A] border-[rgba(176,48,82,0.2)] rounded-2xl p-6 overflow-y-auto mb-6 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-full flex items-center justify-center mx-auto mb-4 opacity-50">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#9CA3AF] mb-2">Start a conversation</p>
                <p className="text-sm text-[#9CA3AF]/60">Send a message to test AI processing</p>
              </div>
            </div>
          ) : (
            messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-[#B03052] to-[#D76C82] text-white"
                      : "bg-[#1A1A24] text-[#F5F5F7] border border-[rgba(176,48,82,0.2)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    {message.role === "assistant" && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopy(message.content, i)}
                        className="flex-shrink-0 h-6 w-6 p-0 hover:bg-[#B03052]/20"
                      >
                        {copiedIndex === i ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-[#9CA3AF]" />
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
          {isProcessing && (
            <div className="flex justify-start">
              <div className="bg-[#1A1A24] border border-[rgba(176,48,82,0.2)] rounded-2xl p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B03052] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#D76C82] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-[#B03052] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Input Area */}
        <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] rounded-2xl p-4">
          <div className="flex gap-3">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Type your message here... (Shift+Enter for new line)"
              className="min-h-[80px] bg-[#1A1A24] border-[rgba(176,48,82,0.2)] text-[#F5F5F7] placeholder:text-[#9CA3AF] focus:border-[#B03052] resize-none"
            />
            <Button
              onClick={handleSend}
              disabled={!prompt.trim() || isProcessing}
              className="bg-gradient-to-br from-[#B03052] to-[#D76C82] hover:opacity-90 text-white rounded-lg transition-all duration-200 px-6 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
