import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { 
  Mic, 
  Circle, 
  Square, 
  Loader2, 
  User as UserIcon, 
  Mail, 
  Calendar, 
  Activity,
  Send,
  Eraser,
  Bot
} from 'lucide-react';
import './ExtraPages.css';

export const Recorder = () => {
  const [status, setStatus] = useState('idle'); // idle, recording, processing

  return (
    <div className="recorder-page">
      <Card className="recorder-card glass">
        <div className="recorder-main">
          <div className={`mic-button-wrapper ${status}`}>
            <button 
              className={`mic-button ${status}`}
              onClick={() => setStatus(status === 'idle' ? 'recording' : status === 'recording' ? 'processing' : 'idle')}
            >
              {status === 'idle' && <Mic size={48} />}
              {status === 'recording' && <Square size={48} />}
              {status === 'processing' && <Loader2 size={48} className="animate-spin" />}
            </button>
            <div className="pulse-ring"></div>
            <div className="pulse-ring-2"></div>
          </div>
          
          <h2 className="status-text">
            {status === 'idle' && 'Ready to record'}
            {status === 'recording' && 'Recording...'}
            {status === 'processing' && 'AI is thinking...'}
          </h2>
          <p className="status-sub">
            {status === 'idle' && 'Click to start capturing voice data'}
            {status === 'recording' && '00:12:45'}
            {status === 'processing' && 'Summarizing your meeting notes'}
          </p>
        </div>

        {status === 'processing' && (
          <div className="recorder-output glass animate-slide-up">
            <h3>Transcript Preview</h3>
            <p>"Today we discussed the new visual builder architecture. The team agreed on using SVG for connectors to maintain a premium feel. We'll prioritize the landing page first to impress the investors..."</p>
            <div className="output-actions">
              <Button variant="secondary" size="sm">Edit</Button>
              <Button variant="primary" size="sm">Save to Notion</Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-grid">
        <Card className="profile-main-card">
          <div className="profile-header">
            <div className="profile-avatar-lg">
              <img src="https://ui-avatars.com/api/?name=Alex+Cooper&background=B03052&color=fff&size=128" alt="Alex" />
            </div>
            <div className="profile-info">
              <h2>Alex Cooper</h2>
              <p>Pro Developer • Joined March 2024</p>
              <div className="profile-badges">
                <Badge variant="accent">Early Adopter</Badge>
                <Badge variant="success">Verified</Badge>
              </div>
            </div>
          </div>
          
          <div className="profile-details">
            <div className="detail-item">
              <Mail size={18} />
              <span>alex.cooper@example.com</span>
            </div>
            <div className="detail-item">
              <Calendar size={18} />
              <span>Timezone: UTC-5 (EST)</span>
            </div>
          </div>
        </Card>

        <div className="profile-stats">
          <Card title="Active Plan" subtitle="Advanced Developer">
            <div className="plan-info">
              <h3>$49/mo</h3>
              <p>Next billing date: April 15, 2024</p>
              <Button variant="secondary" size="sm" style={{ width: '100%', marginTop: '16px' }}>Manage Subscription</Button>
            </div>
          </Card>
          
          <Card title="Usage Level" style={{ marginTop: '24px' }}>
            <div className="usage-stat">
              <div className="usage-header">
                <span>API Calls</span>
                <span>8.5k / 10k</span>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '85%' }}></div></div>
            </div>
            <div className="usage-stat" style={{ marginTop: '16px' }}>
              <div className="usage-header">
                <span>Storage</span>
                <span>1.2GB / 5GB</span>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: '24%' }}></div></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const Playground = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am your AI assistant. How can I help you test your voice workflows today?' }
  ]);

  return (
    <div className="playground-page">
      <div className="playground-container glass">
        <div className="chat-header">
          <div className="chat-bot-info">
            <div className="bot-icon"><Bot size={20} /></div>
            <div>
              <h3>AI Playground</h3>
              <p>Testing: Grok-1 Advanced</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" icon={Eraser}>Clear</Button>
        </div>
        
        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`message ${m.role}`}>
              <div className="message-bubble">{m.text}</div>
            </div>
          ))}
        </div>

        <div className="chat-input-wrapper">
          <div className="chat-input glass">
            <input type="text" placeholder="Type a message to test processing..." />
            <button className="send-btn"><Send size={20} /></button>
          </div>
          <p className="chat-hint">Press Enter to send. Powered by Grok-1.</p>
        </div>
      </div>
    </div>
  );
};
