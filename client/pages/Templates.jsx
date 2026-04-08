import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { Mic, FileText, Mail, MessageSquare, ArrowRight } from "lucide-react";

export default function Templates() {
  const templates = [
    {
      icon: FileText,
      title: "Voice to Summary",
      description: "Transform voice recordings into concise written summaries",
      category: "Productivity",
      color: "from-[#B03052] to-[#D76C82]",
    },
    {
      icon: Mail,
      title: "Voice to Email",
      description: "Convert voice notes directly into formatted email drafts",
      category: "Communication",
      color: "from-[#D76C82] to-[#B03052]",
    },
    {
      icon: MessageSquare,
      title: "Voice to Notes",
      description: "Extract key points and create structured notes from audio",
      category: "Note-taking",
      color: "from-[#B03052] to-[#D76C82]",
    },
    {
      icon: Mic,
      title: "Meeting Transcription",
      description: "Real-time transcription with speaker identification",
      category: "Meetings",
      color: "from-[#D76C82] to-[#B03052]",
    },
    {
      icon: FileText,
      title: "Interview Analysis",
      description: "Analyze interviews and extract insights automatically",
      category: "Research",
      color: "from-[#B03052] to-[#D76C82]",
    },
    {
      icon: MessageSquare,
      title: "Podcast Summary",
      description: "Generate episode summaries and show notes from podcasts",
      category: "Content",
      color: "from-[#D76C82] to-[#B03052]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B10]">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#F5F5F7] mb-2">Workflow Templates</h1>
          <p className="text-[#9CA3AF]">Start with pre-built templates and customize to your needs</p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <Card
              key={i}
              className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl hover:border-[rgba(176,48,82,0.4)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(176,48,82,0.2)] group cursor-pointer"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[rgba(176,48,82,0.3)] group-hover:scale-110 transition-transform`}>
                <template.icon className="w-7 h-7 text-white" />
              </div>

              <div className="mb-2">
                <span className="text-xs font-medium text-[#B03052] bg-[#B03052]/10 px-2 py-1 rounded-full">
                  {template.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#F5F5F7] mb-2">{template.title}</h3>
              <p className="text-[#9CA3AF] mb-4 text-sm">{template.description}</p>

              <Button className="w-full bg-[#B03052] hover:bg-[#8f2642] text-white rounded-lg transition-all duration-200 group">
                Use Template
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Custom Template CTA */}
        <Card className="bg-gradient-to-br from-[#12121A] to-[#1A1A24] border-[rgba(176,48,82,0.3)] p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-3">Can't find what you need?</h2>
          <p className="text-[#9CA3AF] mb-6">Create a custom workflow from scratch with our visual builder</p>
          <Button className="bg-[#B03052] hover:bg-[#8f2642] text-white rounded-lg transition-all duration-200">
            Start from Scratch
          </Button>
        </Card>
      </div>
    </div>
  );
}
