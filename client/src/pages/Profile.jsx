import React from "react";
import Navbar from "../components/layout/Navbar";
import { User, Mail, Calendar, Camera } from "lucide-react";
import "./Profile.css";

export default function Profile() {
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
                Building the future of audio-first productivity.
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
                  defaultValue="Building the future of audio-first productivity."
                />
              </div>

              <div className="flex justify-end">
                 <button className="bg-gradient-to-r from-[#B03052] to-[#D76C82] text-white font-bold py-2.5 px-8 rounded-xl shadow-lg">Save Profile</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
