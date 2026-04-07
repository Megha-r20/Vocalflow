import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { Search, Filter, Download, Eye } from "lucide-react";

export default function History() {
  const historyData = [
    { id: 1, input: "Meeting recording.mp3", output: "Summary generated", timestamp: "2026-04-07 14:30", status: "Success" },
    { id: 2, input: "Voice memo.wav", output: "Email draft created", timestamp: "2026-04-07 13:15", status: "Success" },
    { id: 3, input: "Interview audio.mp3", output: "Transcription complete", timestamp: "2026-04-07 11:45", status: "Success" },
    { id: 4, input: "Podcast episode.mp3", output: "Failed to process", timestamp: "2026-04-07 10:20", status: "Error" },
    { id: 5, input: "Call recording.wav", output: "Notes extracted", timestamp: "2026-04-07 09:00", status: "Success" },
    { id: 6, input: "Lecture audio.mp3", output: "Summary generated", timestamp: "2026-04-06 16:45", status: "Success" },
    { id: 7, input: "Team standup.wav", output: "Action items listed", timestamp: "2026-04-06 15:30", status: "Success" },
    { id: 8, input: "Voice note.m4a", output: "Transcribed text", timestamp: "2026-04-06 14:10", status: "Success" },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B10]">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#F5F5F7] mb-2">Workflow History</h1>
          <p className="text-[#9CA3AF]">View all your past workflow executions</p>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF] z-10" />
            <Input
              placeholder="Search workflows..."
              className="pl-10 bg-[#12121A] border-[rgba(176,48,82,0.2)] text-[#F5F5F7] placeholder:text-[#9CA3AF] focus:border-[#B03052]"
            />
          </div>
          <Button
            variant="outline"
            className="bg-[#12121A] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] text-[#F5F5F7] flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button
            variant="outline"
            className="bg-[#12121A] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] text-[#F5F5F7] flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>

        {/* History Table */}
        <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] rounded-2xl overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(176,48,82,0.15)]">
                  <th className="text-left p-4 text-sm font-semibold text-[#F5F5F7]">Input</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#F5F5F7]">Output</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#F5F5F7]">Timestamp</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#F5F5F7]">Status</th>
                  <th className="text-left p-4 text-sm font-semibold text-[#F5F5F7]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[rgba(176,48,82,0.1)] hover:bg-[#1A1A24] transition-colors cursor-pointer"
                  >
                    <td className="p-4 text-sm text-[#F5F5F7]">{item.input}</td>
                    <td className="p-4 text-sm text-[#9CA3AF]">{item.output}</td>
                    <td className="p-4 text-sm text-[#9CA3AF]">{item.timestamp}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "Success"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#B03052] hover:text-[#D76C82] hover:bg-[#B03052]/10"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
