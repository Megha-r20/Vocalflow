import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { User, Key, Sliders, Bell, Shield, CreditCard, Trash2, Mail, Lock, Check } from "lucide-react";
import Switch from "../components/common/Switch";
import "./Settings.css";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("account");

  const navItems = [
    { id: "account", label: "My Account", icon: <User size={18} /> },
    { id: "api", label: "API Keys", icon: <Key size={18} /> },
    { id: "preferences", label: "Studio Prefs", icon: <Sliders size={18} /> },
    { id: "security", label: "Security", icon: <Shield size={18} /> },
    { id: "billing", label: "Billing", icon: <CreditCard size={18} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return (
          <div className="settings-section">
            <div className="settings-section-header">
              <h2 className="settings-section-title">Account Profile</h2>
              <p className="settings-item-description">Manage your personal information and public profile.</p>
            </div>
            <div className="space-y-6">
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">Full Name</div>
                     <div className="settings-item-description">Displayed on your invoices and studio exports.</div>
                  </div>
                  <input type="text" className="settings-input" defaultValue="Alex Rivera" />
               </div>
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">Email Address</div>
                     <div className="settings-item-description">Used for login and vital notifications.</div>
                  </div>
                  <input type="email" className="settings-input" defaultValue="alex@vocalflow.ai" />
               </div>
               <button className="settings-button settings-button-primary mt-4">Save Changes</button>
            </div>
          </div>
        );
      case "api":
        return (
          <div className="settings-section">
            <div className="settings-section-header">
              <h2 className="settings-section-title">API Keys</h2>
              <p className="settings-item-description">Integrate your studio with Grok, Deepgram, and OpenAI.</p>
            </div>
            <div className="space-y-6">
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">Deepgram Secret</div>
                     <div className="settings-item-description">Used for real-time transcription.</div>
                  </div>
                  <input type="password" underline="true" className="settings-input" defaultValue="sk_dg_8y23h890h123h12" />
               </div>
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">Grok API Key</div>
                     <div className="settings-item-description">Powers your advanced logic nodes.</div>
                  </div>
                  <input type="password" password="true" className="settings-input" defaultValue="xai-bh12h3b12h3b12h" />
               </div>
               <button className="settings-button settings-button-primary mt-4">Update Keys</button>
            </div>
          </div>
        );
      case "preferences":
        return (
          <div className="settings-section">
            <div className="settings-section-header">
              <h2 className="settings-section-title">Studio Preferences</h2>
              <p className="settings-item-description">Tailor the workflow builder to your specific style.</p>
            </div>
            <div className="space-y-4">
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">Auto-save Workflows</div>
                     <div className="settings-item-description">Saves your canvas state every 30 seconds.</div>
                  </div>
                  <Switch defaultChecked />
               </div>
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">Snap to Grid</div>
                     <div className="settings-item-description">Ensures nodes align perfectly for clean layouts.</div>
                  </div>
                  <Switch />
               </div>
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">High Visibility Ports</div>
                     <div className="settings-item-description">Increases the size of node connection points.</div>
                  </div>
                  <Switch defaultChecked />
               </div>
            </div>
          </div>
        );
      case "security":
        return (
          <div className="settings-section">
            <div className="settings-section-header">
              <h2 className="settings-section-title">Security</h2>
              <p className="settings-item-description">Manage security settings</p>
            </div>
            <div className="space-y-6">
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">Change Password</div>
                     <div className="settings-item-description">Update your login credentials regularly.</div>
                  </div>
                  <button className="settings-button">Update</button>
               </div>
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">Two-Factor Authentication</div>
                     <div className="settings-item-description">Adds an extra layer of protection to your account.</div>
                  </div>
                  <button className="settings-button text-green-400 border-green-500/20 bg-green-500/10">Enabled</button>
               </div>
               <div className="settings-item">
                  <div className="settings-item-info">
                     <div className="settings-item-title">View Active Sessions</div>
                     <div className="settings-item-description">Manage your logged-in devices and sessions.</div>
                  </div>
                  <button className="settings-button">View All</button>
               </div>
               
               <div className="mt-12 pt-8 border-t border-[rgba(239,68,68,0.1)]">
                  <h3 className="text-red-500 font-bold mb-1">Danger Zone</h3>
                  <p className="text-xs text-[#6B7280] mb-4">Irreversible actions</p>
                  <div className="flex flex-col items-start gap-4">
                    <p className="text-xs text-[#9CA3AF]">Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="settings-button border-red-500/20 bg-red-500/10 text-red-500 hover:bg-red-500/20">Delete Account</button>
                  </div>
               </div>
            </div>
          </div>
        );
      case "billing":
        return (
          <div className="settings-section">
             <div className="settings-section-header">
              <h2 className="settings-section-title">Billing & Plan</h2>
              <p className="settings-item-description">Manage your subscription and usage balance.</p>
            </div>
            <div className="settings-plan-card">
               <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-bold uppercase tracking-widest text-white/50">Current Plan</span>
                    <h3 className="settings-plan-price mt-2 italic">Pro Architect</h3>
                  </div>
                  <CreditCard className="text-[#B03052]" />
               </div>
               <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-extrabold text-white">$49</span>
                  <span className="text-[#6B7280]">/ month</span>
               </div>
               <div className="mt-6 flex gap-2">
                  <button className="settings-button settings-button-primary">Manage Sync</button>
                  <button className="settings-button">Usage Insights</button>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-[#0B0B10] flex flex-col overflow-hidden">
      <Navbar />

      <div className="settings-container">
        {/* Sidebar */}
        <aside className="settings-sidebar">
           <div className="settings-nav-group">
              <h3 className="settings-nav-title">Personal Center</h3>
              {navItems.slice(0, 1).map(item => (
                <div 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`settings-nav-item ${activeTab === item.id ? 'settings-nav-item-active' : ''}`}
                >
                  {item.icon} {item.label}
                </div>
              ))}
           </div>
           
           <div className="settings-nav-group">
              <h3 className="settings-nav-title">Studio Core</h3>
              {navItems.slice(1, 3).map(item => (
                <div 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`settings-nav-item ${activeTab === item.id ? 'settings-nav-item-active' : ''}`}
                >
                  {item.icon} {item.label}
                </div>
              ))}
           </div>

           <div className="settings-nav-group">
              <h3 className="settings-nav-title">Security & Billing</h3>
              {navItems.slice(3, 5).map(item => (
                <div 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`settings-nav-item ${activeTab === item.id ? 'settings-nav-item-active' : ''}`}
                >
                  {item.icon} {item.label}
                </div>
              ))}
           </div>
        </aside>

        {/* Main Content */}
        <main className="settings-main">
           <header className="settings-header">
              <h1 className="settings-title">
                {navItems.find(i => i.id === activeTab)?.label}
              </h1>
              <p className="text-[#9CA3AF] text-sm">Configure your VocalFlow workspace environment and identity.</p>
           </header>
           
           <div className="max-w-3xl">
              {renderContent()}
           </div>
        </main>
      </div>
    </div>
  );
}
