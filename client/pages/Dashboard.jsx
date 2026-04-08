import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { ArrowUpRight, Plus, TrendingUp, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B0B10]">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#F5F5F7] mb-2">Dashboard</h1>
            <p className="text-[#9CA3AF]">Welcome back! Here's your workflow overview</p>
          </div>
          <Link to="/app">
            <Button className="bg-[#B03052] hover:bg-[#8f2642] text-white rounded-lg transition-all duration-200 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Workflow
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl hover:border-[rgba(176,48,82,0.4)] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#B03052]/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#B03052]" />
              </div>
              <span className="text-sm text-[#9CA3AF]">+12% this week</span>
            </div>
            <div className="text-3xl font-bold text-[#F5F5F7] mb-1">24</div>
            <div className="text-sm text-[#9CA3AF]">Total Workflows</div>
          </Card>

          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl hover:border-[rgba(176,48,82,0.4)] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#D76C82]/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#D76C82]" />
              </div>
              <span className="text-sm text-[#9CA3AF]">+8% this week</span>
            </div>
            <div className="text-3xl font-bold text-[#F5F5F7] mb-1">1,247</div>
            <div className="text-sm text-[#9CA3AF]">API Calls Today</div>
          </Card>

          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl hover:border-[rgba(176,48,82,0.4)] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#B03052]/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#B03052]" />
              </div>
              <span className="text-sm text-[#9CA3AF]">2 mins ago</span>
            </div>
            <div className="text-3xl font-bold text-[#F5F5F7] mb-1">3:42 PM</div>
            <div className="text-sm text-[#9CA3AF]">Last Workflow Run</div>
          </Card>
        </div>

        {/* Usage Chart Placeholder */}
        <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-[#F5F5F7] mb-6">API Usage</h2>
          <div className="h-64 bg-[#1A1A24] rounded-xl flex items-center justify-center border border-[rgba(176,48,82,0.1)]">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-[#9CA3AF] mx-auto mb-3 opacity-50" />
              <p className="text-[#9CA3AF]">Usage analytics coming soon</p>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#F5F5F7]">Recent Workflows</h2>
            <Link to="/history" className="text-sm text-[#B03052] hover:text-[#D76C82] flex items-center gap-1 transition-colors">
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { name: "Voice to Summary", status: "Completed", time: "2 mins ago", runs: 156 },
              { name: "Transcription Pipeline", status: "Active", time: "15 mins ago", runs: 89 },
              { name: "AI Voice Analysis", status: "Completed", time: "1 hour ago", runs: 234 },
              { name: "Email from Voice", status: "Draft", time: "3 hours ago", runs: 45 }
            ].map((workflow, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#1A1A24] rounded-xl hover:bg-[#1A1A24]/80 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-[#F5F5F7] group-hover:text-[#B03052] transition-colors">{workflow.name}</div>
                    <div className="text-sm text-[#9CA3AF]">{workflow.time} • {workflow.runs} runs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    workflow.status === "Completed" ? "bg-green-500/20 text-green-400" :
                    workflow.status === "Active" ? "bg-blue-500/20 text-blue-400" :
                    "bg-[#9CA3AF]/20 text-[#9CA3AF]"
                  }`}>
                    {workflow.status}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#B03052] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
