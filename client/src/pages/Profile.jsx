import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { User, Mail, Calendar, Zap, TrendingUp } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#0B0B10]">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#F5F5F7] mb-2">Profile</h1>
          <p className="text-[#9CA3AF]">Manage your account and view your activity</p>
        </div>

        {/* Profile Card */}
        <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-8 rounded-2xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-full flex items-center justify-center shadow-lg">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#F5F5F7] mb-1">Alex Johnson</h2>
              <div className="flex items-center gap-2 text-[#9CA3AF] mb-3">
                <Mail className="w-4 h-4" />
                <span>alex.johnson@example.com</span>
              </div>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <Calendar className="w-4 h-4" />
                <span>Member since March 2026</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-[#1A1A24] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.4)] text-[#F5F5F7]"
            >
              Edit Profile
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[rgba(176,48,82,0.15)]">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F5F5F7] mb-1">24</div>
              <div className="text-sm text-[#9CA3AF]">Workflows Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F5F5F7] mb-1">1,247</div>
              <div className="text-sm text-[#9CA3AF]">Total Executions</div>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#B03052]/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#B03052]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#F5F5F7]">API Usage</h3>
                <p className="text-sm text-[#9CA3AF]">Current billing cycle</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA3AF]">Deepgram API</span>
                <span className="text-sm font-semibold text-[#F5F5F7]">$24.50</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA3AF]">Grok API</span>
                <span className="text-sm font-semibold text-[#F5F5F7]">$18.30</span>
              </div>
              <div className="pt-3 border-t border-[rgba(176,48,82,0.15)] flex items-center justify-between">
                <span className="text-sm font-semibold text-[#F5F5F7]">Total</span>
                <span className="font-bold text-[#B03052]">$42.80</span>
              </div>
            </div>
          </Card>

          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#D76C82]/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#D76C82]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#F5F5F7]">Activity</h3>
                <p className="text-sm text-[#9CA3AF]">Last 30 days</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA3AF]">Workflows Run</span>
                <span className="text-sm font-semibold text-[#F5F5F7]">342</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA3AF]">Avg. Success Rate</span>
                <span className="text-sm font-semibold text-green-400">98.5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA3AF]">Most Used Template</span>
                <span className="text-sm font-semibold text-[#F5F5F7]">Voice to Summary</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Account Actions */}
        <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl">
          <h3 className="font-semibold text-[#F5F5F7] mb-4">Account Actions</h3>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start bg-[#1A1A24] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.4)] text-[#F5F5F7]"
            >
              Download Account Data
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-[#1A1A24] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.4)] text-[#F5F5F7]"
            >
              Export Workflows
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-[#1A1A24] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.4)] text-[#F5F5F7]"
            >
              Manage Subscription
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
