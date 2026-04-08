import React from "react";
import Navbar from "../components/layout/Navbar";
import Card from "../components/common/Card";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Switch from "../components/common/Switch";
import { Key, Bell, Palette, Shield } from "lucide-react";

export default function Settings() {
  return (
    <div className="h-screen bg-[#0B0B10] flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8 space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-[#F5F5F7] mb-2">Settings</h1>
            <p className="text-[#9CA3AF]">Manage your account and API integrations</p>
          </div>

          {/* API Keys Section */}
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[rgba(176,48,82,0.15)]">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-xl flex items-center justify-center">
                <Key className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#F5F5F7]">API Keys</h2>
                <p className="text-sm text-[#9CA3AF]">Configure your AI service credentials</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#F5F5F7] mb-2 block">
                  Deepgram API Key
                </label>
                <Input
                  type="password"
                  placeholder="sk-deepgram-••••••••••••••••"
                  className="bg-[#1A1A24] border-[rgba(176,48,82,0.2)] text-[#F5F5F7] placeholder:text-[#9CA3AF] focus:border-[#B03052]"
                />
                <p className="text-xs text-[#9CA3AF] mt-2">
                  Used for voice transcription services
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-[#F5F5F7] mb-2 block">
                  Grok API Key
                </label>
                <Input
                  type="password"
                  placeholder="xai-••••••••••••••••••••••••"
                  className="bg-[#1A1A24] border-[rgba(176,48,82,0.2)] text-[#F5F5F7] placeholder:text-[#9CA3AF] focus:border-[#B03052]"
                />
                <p className="text-xs text-[#9CA3AF] mt-2">
                  Used for AI processing and analysis
                </p>
              </div>
            </div>

            <Button className="bg-[#B03052] hover:bg-[#8f2642] text-white rounded-lg transition-all duration-200">
              Save API Keys
            </Button>
          </Card>

          {/* Preferences Section */}
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[rgba(176,48,82,0.15)]">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-xl flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#F5F5F7]">Preferences</h2>
                <p className="text-sm text-[#9CA3AF]">Customize your experience</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[#F5F5F7]">Auto-save workflows</div>
                  <div className="text-xs text-[#9CA3AF] mt-1">Automatically save changes as you work</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[#F5F5F7]">Show grid</div>
                  <div className="text-xs text-[#9CA3AF] mt-1">Display grid on workflow canvas</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[#F5F5F7]">Snap to grid</div>
                  <div className="text-xs text-[#9CA3AF] mt-1">Align nodes to grid automatically</div>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          {/* Notifications Section */}
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[rgba(176,48,82,0.15)]">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#F5F5F7]">Notifications</h2>
                <p className="text-sm text-[#9CA3AF]">Manage notification preferences</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[#F5F5F7]">Workflow completion</div>
                  <div className="text-xs text-[#9CA3AF] mt-1">Get notified when workflows finish</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[#F5F5F7]">API balance alerts</div>
                  <div className="text-xs text-[#9CA3AF] mt-1">Alert when balance is low</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-[#F5F5F7]">Error notifications</div>
                  <div className="text-xs text-[#9CA3AF] mt-1">Notify about workflow errors</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          {/* Security Section */}
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[rgba(176,48,82,0.15)]">
              <div className="w-10 h-10 bg-gradient-to-br from-[#B03052] to-[#D76C82] rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#F5F5F7]">Security</h2>
                <p className="text-sm text-[#9CA3AF]">Manage security settings</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start bg-[#1A1A24] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.4)] text-[#F5F5F7]"
              >
                Change Password
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-[#1A1A24] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.4)] text-[#F5F5F7]"
              >
                Enable Two-Factor Authentication
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-[#1A1A24] border-[rgba(176,48,82,0.2)] hover:bg-[#1A1A24] hover:border-[rgba(176,48,82,0.4)] text-[#F5F5F7]"
              >
                View Active Sessions
              </Button>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="bg-[#12121A] border-[rgba(176,48,82,0.2)] p-6 rounded-2xl space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-[#F5F5F7] mb-1">Danger Zone</h3>
              <p className="text-xs text-[#9CA3AF]">Irreversible actions</p>
            </div>
            <Button
              variant="destructive"
              className="bg-[#d4183d]/20 hover:bg-[#d4183d]/30 text-[#d4183d] border border-[#d4183d]/30"
            >
              Delete Account
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
