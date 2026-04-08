import React from 'react';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import { Key, Shield, Bell, Moon, Sun, Save, Search, Filter, Download, ExternalLink } from 'lucide-react';
import './Pages.css';

export const Settings = () => {
  return (
    <div className="settings-page">
      <div className="settings-grid">
        <div className="settings-nav">
          <button className="nav-item active">API Keys</button>
          <button className="nav-item">Account</button>
          <button className="nav-item">Notifications</button>
          <button className="nav-item">Privacy & Security</button>
          <button className="nav-item">Billing</button>
        </div>
        
        <div className="settings-content">
          <Card title="API Keys" subtitle="Manage your keys for external service integrations.">
            <div className="api-key-list">
              <div className="api-key-item">
                <div className="key-info">
                  <p className="key-label">Deepgram API Key</p>
                  <code className="key-value">dg_live_••••••••••••••••••••</code>
                </div>
                <div className="key-actions">
                  <Button variant="secondary" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm">Show</Button>
                </div>
              </div>
              <div className="api-key-item">
                <div className="key-info">
                  <p className="key-label">Grok API Key</p>
                  <code className="key-value">xai_••••••••••••••••••••</code>
                </div>
                <div className="key-actions">
                  <Button variant="secondary" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm">Show</Button>
                </div>
              </div>
            </div>
            <Button variant="primary" icon={Key} style={{ marginTop: '24px' }}>Add New Key</Button>
          </Card>

          <Card title="Preferences" style={{ marginTop: '24px' }}>
            <div className="preferences-list">
              <div className="pref-item">
                <div>
                  <p className="pref-label">Auto-run workflows</p>
                  <p className="pref-desc">Automatically trigger flows when input is received.</p>
                </div>
                <div className="toggle active"></div>
              </div>
              <div className="pref-item">
                <div>
                  <p className="pref-label">Dark Mode</p>
                  <p className="pref-desc">Switch between light and dark themes.</p>
                </div>
                <div className="toggle active"></div>
              </div>
            </div>
          </Card>

          <div className="settings-footer">
            <Button variant="primary" icon={Save}>Save Changes</Button>
            <Button variant="secondary">Reset Defaults</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const History = () => {
  const historyData = [
    { id: '1', input: 'podcast_episode_01.mp3', output: 'Summary generated', time: '2 mins ago', status: 'Success' },
    { id: '2', input: 'meeting_record_12.wav', output: 'Failed to process', time: '1 hour ago', status: 'Failed' },
    { id: '3', input: 'daily_standup.m4a', output: 'Notes added to Notion', time: '3 hours ago', status: 'Success' },
    { id: '4', input: 'support_call_99.wav', output: 'Sentiment: Negative', time: 'Yesterday', status: 'Success' },
  ];

  return (
    <div className="history-page">
      <div className="table-actions">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Search history..." />
        </div>
        <div className="filters">
          <Button variant="secondary" size="sm" icon={Filter}>Filter</Button>
          <Button variant="secondary" size="sm" icon={Download}>Export</Button>
        </div>
      </div>

      <div className="history-table-wrapper glass">
        <table className="history-table">
          <thead>
            <tr>
              <th>Input Source</th>
              <th>Final Output</th>
              <th>Timestamp</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((item) => (
              <tr key={item.id}>
                <td>{item.input}</td>
                <td className="output-cell">{item.output}</td>
                <td>{item.time}</td>
                <td>
                  <Badge variant={item.status === 'Success' ? 'success' : 'accent'}>
                    {item.status}
                  </Badge>
                </td>
                <td>
                  <button className="icon-btn"><ExternalLink size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Templates = () => {
  const templates = [
    { title: 'Voice to Notion', desc: 'Auto-convert voice notes into clean Notion database entries.', icon: Mic },
    { title: 'Podcast Highlights', desc: 'Extract key moments and quotes from long audio files.', icon: Brain },
    { title: 'CRM Auto-update', desc: 'Update sales leads based on recorded call summaries.', icon: Send },
    { title: 'Smart Subtitles', desc: 'Generate multi-language subtitles with timestamp accuracy.', icon: Globe },
  ];

  return (
    <div className="templates-page">
      <div className="templates-grid">
        {templates.map((temp, i) => (
          <Card 
            key={i} 
            title={temp.title} 
            subtitle={temp.desc} 
            icon={temp.icon}
            className="template-card"
          >
            <Button variant="secondary" size="sm" style={{ width: '100%', marginTop: '16px' }}>Use Template</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
