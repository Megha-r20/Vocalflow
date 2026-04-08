import React from "react";
import Navbar from "../components/layout/Navbar";
import { User, Mail, Calendar, Camera, Github, Twitter, Linkedin, Zap, TrendingUp, Award, Clock, ChevronRight } from "lucide-react";
import "./Profile.css";

export default function Profile() {
  const activities = [
    { id: 1, title: "Workflow Executed", desc: "Voice to Summary successfully processed", time: "2 hours ago" },
    { id: 2, title: "Template Saved", desc: "New custom template 'Podcast Master' added", time: "5 hours ago" },
    { id: 3, title: "Achievement Unlocked", desc: "Power User: 1,000 transcriptions completed", time: "1 day ago" },
  ];

  const achievements = [
    { title: "Creator", desc: "24 Workflows", icon: <Award size={24} /> },
    { title: "Power User", desc: "1k+ Executions", icon: <Zap size={24} /> },
    { title: "Fast Lane", desc: "High API usage", icon: <TrendingUp size={24} /> },
  ];

  return (
    <div className="profile-container dashboard-animate-in">
      <Navbar />

      <div className="profile-grid">
        {/* Left Sidebar: Identity */}
        <aside className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar-wrapper">
                <div className="profile-avatar">
                  <User size={60} />
                </div>
                <div className="profile-avatar-upload">
                  <Camera size={16} />
                </div>
              </div>
              <h2 className="profile-name">Alex Rivera</h2>
              <p className="profile-username">@arivera_vocal</p>
              <p className="profile-bio">
                Building the future of audio-first productivity. Power user of Grok-1 and Deepgram Nova-2.
              </p>
              <div className="flex justify-center">
                 <span className="profile-badge">Pro Architect</span>
              </div>
            </div>

            <div className="profile-stats">
              <div className="profile-stat">
                <div className="profile-stat-value">24</div>
                <div className="profile-stat-label">Flows</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">1.2k</div>
                <div className="profile-stat-label">Execs</div>
              </div>
              <div className="profile-stat">
                <div className="profile-stat-value">98%</div>
                <div className="profile-stat-label">Accuracy</div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
               <button className="text-[#6B7280] hover:text-[#D76C82] transition-colors"><Github size={20} /></button>
               <button className="text-[#6B7280] hover:text-[#D76C82] transition-colors"><Twitter size={20} /></button>
               <button className="text-[#6B7280] hover:text-[#D76C82] transition-colors"><Linkedin size={20} /></button>
            </div>
          </div>

          <div className="profile-card">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#6B7280] mb-4">Membership Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <Calendar size={16} className="text-[#B03052]" />
                <span>Joined March 2026</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <Mail size={16} className="text-[#B03052]" />
                <span>alex@vocalflow.ai</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Main Area: Activity & Settings */}
        <div className="profile-content">
          
          {/* Personal Information Section */}
          <section className="profile-section">
            <div className="profile-section-header">
              <h2 className="profile-section-title">Personal Information</h2>
              <button className="profile-section-action">Edit Profile</button>
            </div>
            
            <form className="space-y-6">
              <div className="profile-form-row">
                <div className="profile-form-group">
                  <label className="profile-form-label">First Name</label>
                  <input type="text" className="profile-form-input" defaultValue="Alex" />
                </div>
                <div className="profile-form-group">
                  <label className="profile-form-label">Last Name</label>
                  <input type="text" className="profile-form-input" defaultValue="Rivera" />
                </div>
              </div>
              
              <div className="profile-form-group">
                <label className="profile-form-label">Biography</label>
                <textarea 
                  className="profile-form-input min-h-[100px] py-3" 
                  defaultValue="Building the future of audio-first productivity. Power user of Grok-1 and Deepgram Nova-2."
                />
              </div>

              <div className="flex justify-end">
                 <button className="bg-gradient-to-r from-[#B03052] to-[#D76C82] text-white font-bold py-2.5 px-8 rounded-xl shadow-lg">Save Profile</button>
              </div>
            </form>
          </section>

          {/* Activity Feed */}
          <section className="profile-section">
            <div className="profile-section-header">
              <h2 className="profile-section-title">Recent Activity</h2>
              <button className="text-[#6B7280] hover:text-[#D76C82] text-sm font-semibold flex items-center gap-1">
                View All <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="space-y-1">
              {activities.map(activity => (
                <div key={activity.id} className="profile-activity-item">
                  <div className="w-10 h-10 rounded-xl bg-[#B03052]/10 border border-[#B03052]/20 flex items-center justify-center text-[#D76C82]">
                    <Clock size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-[#F5F5F7]">{activity.title}</div>
                    <div className="text-xs text-[#9CA3AF] mt-1">{activity.desc}</div>
                  </div>
                  <div className="text-[10px] text-[#6B7280] font-bold uppercase tracking-widest">{activity.time}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="profile-section">
            <div className="profile-section-header">
              <h2 className="profile-section-title">Achievements</h2>
            </div>
            <div className="profile-achievements-grid">
              {achievements.map((ach, i) => (
                <div key={i} className="profile-achievement">
                  <div className="profile-achievement-icon">
                    {ach.icon}
                  </div>
                  <div className="profile-achievement-title">{ach.title}</div>
                  <div className="profile-achievement-description">{ach.desc}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
