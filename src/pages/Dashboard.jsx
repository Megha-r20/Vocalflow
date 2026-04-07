import React from 'react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { 
  Plus, 
  Workflow, 
  Clock, 
  Activity, 
  ArrowUpRight,
  MoreVertical,
  Play
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { label: 'Active Workflows', value: '12', icon: Workflow, trend: '+2 this week' },
    { label: 'API Usage', value: '$124.50', icon: Activity, trend: '-10% vs last month' },
    { label: 'Total Runs', value: '1,420', icon: Play, trend: '85% success rate' },
    { label: 'Avg. Latency', value: '420ms', icon: Clock, trend: 'Top 5% speed' }
  ];

  const recentWorkflows = [
    { name: 'Customer Support Bot', status: 'Active', lastRun: '2 mins ago', runs: 420 },
    { name: 'Podcast Transcriber', status: 'Active', lastRun: '1 hour ago', runs: 85 },
    { name: 'Voice Notes to Notion', status: 'Idle', lastRun: 'Yesterday', runs: 12 },
    { name: 'Legal Summary Pro', status: 'Active', lastRun: '3 hours ago', runs: 156 },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1 className="dash-title">Good afternoon, Alex</h1>
          <p className="dash-subtitle">Here's what's happening with your workflows today.</p>
        </div>
        <Button variant="primary" icon={Plus}>Create Workflow</Button>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card glass">
            <div className="stat-icon-wrapper">
              <stat.icon size={20} />
            </div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-trend">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="main-col">
          <Card title="Usage Summary" subtitle="Total processing time over the last 30 days.">
            <div className="chart-placeholder">
              <div className="bar-grid">
                {[40, 70, 45, 90, 65, 80, 50, 85, 40, 60, 75, 55].map((h, i) => (
                  <div key={i} className="bar-wrapper">
                    <div className="bar" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
              <div className="chart-footer">
                <span>Mar 01</span>
                <span>Mar 15</span>
                <span>Mar 30</span>
              </div>
            </div>
          </Card>

          <div className="recent-workflows">
            <div className="section-title-group">
              <h3>Recent Workflows</h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="workflow-list">
              {recentWorkflows.map((flow, i) => (
                <div key={i} className="workflow-row glass">
                  <div className="workflow-info">
                    <div className="workflow-icon"><Workflow size={18} /></div>
                    <div>
                      <p className="workflow-name">{flow.name}</p>
                      <p className="workflow-meta">Last run: {flow.lastRun}</p>
                    </div>
                  </div>
                  <div className="workflow-stats">
                    <p>{flow.runs} runs</p>
                    <Badge variant={flow.status === 'Active' ? 'success' : 'default'}>
                      {flow.status}
                    </Badge>
                  </div>
                  <button className="icon-btn"><MoreVertical size={18} /></button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="side-col">
          <Card title="Quick Actions">
            <div className="quick-actions-list">
              <button className="action-item">
                <div className="action-icon"><Mic size={18} /></div>
                <span>Start Recording</span>
              </button>
              <button className="action-item">
                <div className="action-icon"><Layers size={18} /></div>
                <span>Browse Templates</span>
              </button>
              <button className="action-item">
                <div className="action-icon"><Activity size={18} /></div>
                <span>View API Logs</span>
              </button>
            </div>
          </Card>

          <Card title="API Credits" className="credits-card">
            <div className="credits-usage">
              <div className="usage-header">
                <span>$12.50 left</span>
                <span>80% used</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '80%' }}></div>
              </div>
              <p className="usage-desc">Your balance is running low. Auto-recharge is enabled.</p>
              <Button variant="secondary" size="sm" style={{ width: '100%' }}>Top Up Balance</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
