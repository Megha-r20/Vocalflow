import React from "react";
import Navbar from "../components/layout/Navbar";
import Card from "../components/common/Card";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { Search, Filter, Download, Eye, Clock, Calendar, FileText } from "lucide-react";
import "./History.css";

export default function History() {
  const historyData = [
    { id: 1, title: "Meeting Summary", input: "Meeting recording.mp3", output: "Full summary generated", timestamp: "2026-04-07", time: "14:30", status: "Success" },
    { id: 2, title: "Email Automator", input: "Voice memo.wav", output: "Email draft created", timestamp: "2026-04-07", time: "13:15", status: "Success" },
    { id: 3, title: "Interview Analysis", input: "Interview audio.mp3", output: "Transcription complete", timestamp: "2026-04-07", time: "11:45", status: "Success" },
    { id: 4, title: "Podcast Workflow", input: "Podcast episode.mp3", output: "Failed to process", timestamp: "2026-04-07", time: "10:20", status: "Error" },
    { id: 5, title: "Call Extract", input: "Call recording.wav", output: "Notes extracted", timestamp: "2026-04-07", time: "09:00", status: "Success" },
    { id: 6, title: "Lecture Note", input: "Lecture audio.mp3", output: "Summary generated", timestamp: "2026-04-06", time: "16:45", status: "Success" },
  ];

  return (
    <div className="history-container dashboard-animate-in">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="history-header">
          <div>
            <h1 className="history-title mb-2">Workflow History</h1>
            <p className="text-[#9CA3AF]">View all your past workflow executions</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="history-filter-button h-10 gap-2">
                <Download size={16} /> Export
             </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="history-filters">
           <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={18} />
              <Input 
                placeholder="Search history..." 
                className="history-search-input pl-12"
              />
           </div>
           <Button className="history-filter-button history-filter-button-active">All</Button>
           <Button className="history-filter-button">Successful</Button>
           <Button className="history-filter-button">Failed</Button>
           <Button className="history-filter-button gap-2"><Filter size={16} /> More</Button>
        </div>

        {/* Timeline View */}
        <div className="history-timeline">
           <div className="history-timeline-group">
              <div className="history-timeline-date">Recently Executed</div>
              <div className="history-timeline-items">
                {historyData.map((item) => (
                  <div key={item.id} className="history-item">
                    <div className="history-item-header">
                      <div className="flex items-center">
                        <div className="history-item-icon">
                          <FileText className="text-white" size={20} />
                        </div>
                        <div className="history-item-info">
                          <h3 className="history-item-title">{item.title}</h3>
                          <p className="history-item-description">Input: {item.input} → {item.output}</p>
                          <div className="history-item-meta">
                             <span className="history-item-meta-item"><Calendar size={14} /> {item.timestamp}</span>
                             <span className="history-item-meta-item"><Clock size={14} /> {item.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <span className={`history-status-badge ${
                          item.status === "Success" ? "history-status-success" : "history-status-failed"
                        }`}>
                          {item.status}
                        </span>
                        <div className="history-item-actions">
                           <button className="history-item-action-button"><Eye size={16} /></button>
                           <button className="history-item-action-button"><Download size={16} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
