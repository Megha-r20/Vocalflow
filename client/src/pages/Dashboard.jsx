import React from "react";
import Navbar from "../components/layout/Navbar";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { ArrowUpRight, Plus, TrendingUp, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container dashboard-animate-in">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="dashboard-title mb-2">Dashboard</h1>
            <p className="dashboard-stat-label">Welcome back! Here's your workflow overview</p>
          </div>
          <Link to="/recorder">
            <Button className="bg-[#B03052] hover:bg-[#8f2642] text-white rounded-lg transition-all duration-200 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Workflow
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="dashboard-stats-grid">
          <Card className="dashboard-stat-card">
            <div className="dashboard-stat-header">
              <div className="dashboard-stat-icon">
                <Zap className="w-6 h-6" />
              </div>
              <span className="dashboard-stat-change dashboard-stat-change-positive">+12% this week</span>
            </div>
            <div className="dashboard-stat-value">24</div>
            <div className="dashboard-stat-label">Total Workflows</div>
          </Card>

          <Card className="dashboard-stat-card">
            <div className="dashboard-stat-header">
              <div className="dashboard-stat-icon">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="dashboard-stat-change dashboard-stat-change-positive">+8% this week</span>
            </div>
            <div className="dashboard-stat-value">1,247</div>
            <div className="dashboard-stat-label">API Calls Today</div>
          </Card>

          <Card className="dashboard-stat-card">
            <div className="dashboard-stat-header">
              <div className="dashboard-stat-icon">
                <Clock className="w-6 h-6" />
              </div>
              <span className="dashboard-stat-change">2 mins ago</span>
            </div>
            <div className="dashboard-stat-value text-2xl">3:42 PM</div>
            <div className="dashboard-stat-label">Last Workflow Run</div>
          </Card>
        </div>

        {/* Usage Chart Placeholder */}
        <Card className="dashboard-chart-card">
          <div className="dashboard-chart-header">
            <h2 className="dashboard-chart-title">API Usage</h2>
            <select className="dashboard-chart-dropdown text-xs">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div className="h-64 bg-[#1A1A24]/40 rounded-xl flex items-center justify-center border border-[rgba(176,48,82,0.1)]">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-[#9CA3AF] mx-auto mb-3 opacity-30" />
              <p className="text-[#9CA3AF]">Usage analytics coming soon</p>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="dashboard-activity-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="dashboard-chart-title font-semibold">Recent Workflows</h2>
            <Link to="/history" className="text-sm text-[#B03052] hover:text-[#D76C82] flex items-center gap-1 transition-colors">
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="dashboard-activity-list">
            {[
              { name: "Voice to Summary", status: "Completed", time: "2 mins ago", runs: 156 },
              { name: "Transcription Pipeline", status: "Active", time: "15 mins ago", runs: 89 },
              { name: "AI Voice Analysis", status: "Completed", time: "1 hour ago", runs: 234 },
              { name: "Email from Voice", status: "Draft", time: "3 hours ago", runs: 45 }
            ].map((workflow, i) => (
              <div key={i} className="dashboard-activity-item group">
                <div className="flex items-center gap-4 flex-1">
                  <div className="dashboard-activity-icon">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="dashboard-activity-content">
                    <div className="dashboard-activity-title group-hover:text-[#B03052] transition-colors">{workflow.name}</div>
                    <div className="dashboard-activity-description">{workflow.time} • {workflow.runs} runs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`dashboard-badge ${
                    workflow.status === "Completed" ? "dashboard-badge-success" :
                    workflow.status === "Active" ? "dashboard-badge-info" :
                    "dashboard-badge-default"
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
