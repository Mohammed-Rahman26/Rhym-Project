import React, { useState, useEffect } from 'react';
import { 
  Shield, Sword, Bug, Menu, X, AlertTriangle, Globe, Calendar,
  Activity, Zap, Cpu, Lock
} from 'lucide-react';

type Tab = 'threats' | 'techniques' | 'malware' | 'dashboard';

// Enhanced mock data with more visual elements
const mockData = {
  dashboard: {
    stats: [
      { id: 1, name: 'Active Threats', value: 42, change: '+12%', icon: Activity, color: 'red' },
      { id: 2, name: 'New Techniques', value: 18, change: '+5%', icon: Zap, color: 'blue' },
      { id: 3, name: 'Malware Variants', value: 27, change: '+8%', icon: Cpu, color: 'purple' },
      { id: 4, name: 'Protected Assets', value: 156, change: '-3%', icon: Lock, color: 'teal' }
    ],
    recentActivity: [
      { id: 1, type: 'Threat', name: 'APT29', time: '2 min ago', severity: 'high' },
      { id: 2, type: 'Technique', name: 'Phishing', time: '15 min ago', severity: 'critical' },
      { id: 3, type: 'Malware', name: 'Emotet', time: '1 hour ago', severity: 'medium' }
    ]
  },
  threats: [
    { id: 1, name: 'APT29', origin: 'Russia', target: 'Government', lastSeen: '2024-03-15', risk: 'Critical', description: 'Known for sophisticated cyber espionage campaigns.' },
    { id: 2, name: 'Lazarus Group', origin: 'North Korea', target: 'Financial', lastSeen: '2024-03-10', risk: 'High', description: 'Focuses on financial theft and cryptocurrency attacks.' },
    { id: 3, name: 'Sandworm', origin: 'Russia', target: 'Infrastructure', lastSeen: '2024-03-08', risk: 'Critical', description: 'Targets critical infrastructure and industrial systems.' },
  ],
  techniques: [
    { id: 1, name: 'Phishing', category: 'Initial Access', mitreTactic: 'TA0001', severity: 'High', impact: 'Widespread', trend: 'Increasing' },
    { id: 2, name: 'Brute Force', category: 'Credential Access', mitreTactic: 'TA0006', severity: 'Medium', impact: 'Moderate', trend: 'Stable' },
    { id: 3, name: 'Supply Chain', category: 'Initial Access', mitreTactic: 'TA0001', severity: 'Critical', impact: 'Severe', trend: 'Increasing' },
  ],
  malware: [
    { id: 1, name: 'Emotet', type: 'Banking Trojan', platform: 'Windows', discovered: '2024-02-28', status: 'Active', spread: 'Rapid' },
    { id: 2, name: 'Conti', type: 'Ransomware', platform: 'Cross-platform', discovered: '2024-03-01', status: 'Active', spread: 'Moderate' },
    { id: 3, name: 'BlackCat', type: 'Ransomware', platform: 'Linux/Windows', discovered: '2024-03-05', status: 'Emerging', spread: 'Fast' },
  ],
};

function App() {
  // Add particle styles to head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFall {
        to { transform: translateY(100vh); }
      }
      .particle {
        animation: particleFall linear forwards;
        border-radius: 50%;
        opacity: 0.7;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);
  const [activeTab, setActiveTab] = useState<Tab>('threats');

  // Add optimized particle animation effect
  useEffect(() => {
    const particles: HTMLDivElement[] = [];
    const particleCount = 30; // Reduced number of particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.position = 'fixed';
      particle.style.top = '0';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.background = `hsl(${Math.random() * 60 + 200}, 100%, 70%)`;
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`; // Longer duration
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '0';
      particle.style.willChange = 'transform, opacity'; // Optimize for animation
      document.body.appendChild(particle);
      particles.push(particle);
      
      particle.addEventListener('animationend', () => {
        if (particle.parentNode === document.body) {
          particle.remove();
        }
      });
    };

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      setTimeout(createParticle, i * 200); // Stagger creation
    }

    // Cleanup all particles on unmount
    return () => {
      particles.forEach(particle => {
        if (particle.parentNode === document.body) {
          particle.remove();
        }
      });
    };
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            {/* Dashboard Summary */}
            <div className="bg-cyber-dark/50 rounded-xl p-6 border border-cyber-teal/20">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-cyber-teal" />
                Security Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {mockData.dashboard.stats.map((stat) => (
                  <div key={stat.id} className={`bg-gradient-to-br from-cyber-${stat.color}/10 to-cyber-${stat.color}/20 p-6 rounded-xl border border-cyber-${stat.color}/30 hover:shadow-cyber-glow transition-all duration-300`}>
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-cyber-dark/50">
                        <stat.icon className={`w-6 h-6 text-cyber-${stat.color}`} />
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full bg-cyber-${stat.color}/20 text-cyber-${stat.color}`}>
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-400 mt-4">{stat.name}</h3>
                    <p className="text-3xl font-bold mt-2 text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-cyber-dark/50 rounded-xl p-6 border border-cyber-purple/20">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2 text-cyber-teal" />
                Recent Activity
              </h2>
              <div className="space-y-4">
                {mockData.dashboard.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start pb-4 border-b border-cyber-dark/50 last:border-0">
                    <div className={`p-2 rounded-lg mr-4 ${
                      activity.severity === 'critical' ? 'bg-cyber-red/20 text-cyber-red' :
                      activity.severity === 'high' ? 'bg-cyber-yellow/20 text-cyber-yellow' :
                      'bg-cyber-blue/20 text-cyber-blue'
                    }`}>
                      {activity.type === 'Threat' ? <Shield className="w-4 h-4" /> :
                       activity.type === 'Technique' ? <Sword className="w-4 h-4" /> :
                       <Bug className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-white">{activity.name}</h3>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{activity.type} detected</p>
                    </div>
                    <button className="ml-4 px-3 py-1 text-sm rounded-lg bg-cyber-dark/50 hover:bg-cyber-dark/70 transition-colors">
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'threats':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.threats.map((threat) => (
              <div key={threat.id} className="bg-gradient-to-br from-cyber-dark to-cyber-darker p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-cyber-purple/20 hover:border-cyber-red/50 group animate-glow hover:animate-none">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyber-red/20 rounded-lg group-hover:bg-cyber-red/30 transition-colors">
                    <Shield className="w-6 h-6 text-cyber-red group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold ml-3 text-white group-hover:text-cyber-teal transition-colors">{threat.name}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-300">
                    <Globe className="w-4 h-4 mr-2" />
                    <span className="font-medium">Origin:</span>
                    <span className="ml-2">{threat.origin}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    <span className="font-medium">Target:</span>
                    <span className="ml-2">{threat.target}</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">Last Seen:</span>
                    <span className="ml-2">{threat.lastSeen}</span>
                  </div>
                  <div className="mt-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      threat.risk === 'Critical' ? 'bg-cyber-red/30 text-cyber-red animate-pulse-slow' : 'bg-cyber-yellow/20 text-cyber-yellow'
                    }`}>
                      {threat.risk} Risk
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mt-3">{threat.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'techniques':
        return (
          <div className="space-y-8">
            {/* Technique Summary */}
            <div className="bg-cyber-dark/50 rounded-xl p-6 border border-cyber-blue/20">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Sword className="w-5 h-5 mr-2 text-cyber-blue" />
                Technique Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-cyber-dark/70 p-4 rounded-lg border border-cyber-blue/30">
                  <p className="text-sm text-gray-400">Total Techniques</p>
                  <p className="text-2xl font-bold text-white">{mockData.techniques.length}</p>
                </div>
                <div className="bg-cyber-dark/70 p-4 rounded-lg border border-cyber-blue/30">
                  <p className="text-sm text-gray-400">Critical Severity</p>
                  <p className="text-2xl font-bold text-cyber-red">
                    {mockData.techniques.filter(t => t.severity === 'Critical').length}
                  </p>
                </div>
                <div className="bg-cyber-dark/70 p-4 rounded-lg border border-cyber-blue/30">
                  <p className="text-sm text-gray-400">Increasing Trend</p>
                  <p className="text-2xl font-bold text-cyber-yellow">
                    {mockData.techniques.filter(t => t.trend === 'Increasing').length}
                  </p>
                </div>
                <div className="bg-cyber-dark/70 p-4 rounded-lg border border-cyber-blue/30">
                  <p className="text-sm text-gray-400">Initial Access</p>
                  <p className="text-2xl font-bold text-cyber-teal">
                    {mockData.techniques.filter(t => t.category === 'Initial Access').length}
                  </p>
                </div>
              </div>
            </div>

            {/* Technique Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.techniques.map((technique) => (
                <div key={technique.id} className="bg-gradient-to-br from-cyber-dark to-cyber-darker p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-cyber-blue/20 hover:border-cyber-blue/50 group animate-glow hover:animate-none">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-cyber-blue/20 rounded-lg group-hover:bg-cyber-blue/30 transition-colors">
                      <Sword className="w-6 h-6 text-cyber-blue group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold ml-3 text-white group-hover:text-cyber-teal transition-colors">{technique.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-blue-200"><span className="font-medium">Category:</span> {technique.category}</p>
                    <p className="text-blue-200"><span className="font-medium">MITRE:</span> {technique.mitreTactic}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      technique.severity === 'Critical' ? 'bg-cyber-red/30 text-cyber-red animate-pulse-slow' :
                      technique.severity === 'High' ? 'bg-cyber-yellow/20 text-cyber-yellow' :
                      'bg-cyber-blue/20 text-cyber-blue'
                      }`}>
                        {technique.severity}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      technique.trend === 'Increasing' ? 'bg-cyber-red/20 text-cyber-red' : 'bg-cyber-teal/20 text-cyber-teal'
                      }`}>
                        {technique.trend}
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-blue-800">
                      <p className="text-blue-300 text-sm">Impact: {technique.impact}</p>
                    </div>
                    <button className="mt-4 w-full py-2 text-sm font-medium rounded-lg bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20 transition-colors duration-200">
                      View MITRE Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'malware':
        return (
          <div className="space-y-8">
            {/* Malware Summary */}
            <div className="bg-cyber-dark/50 rounded-xl p-6 border border-cyber-purple/20">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Bug className="w-5 h-5 mr-2 text-cyber-purple" />
                Malware Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-cyber-dark/70 p-4 rounded-lg border border-cyber-purple/30">
                  <p className="text-sm text-gray-400">Total Variants</p>
                  <p className="text-2xl font-bold text-white">{mockData.malware.length}</p>
                </div>
                <div className="bg-cyber-dark/70 p-4 rounded-lg border border-cyber-purple/30">
                  <p className="text-sm text-gray-400">Active Threats</p>
                  <p className="text-2xl font-bold text-cyber-red">
                    {mockData.malware.filter(m => m.status === 'Active').length}
                  </p>
                </div>
                <div className="bg-cyber-dark/70 p-4 rounded-lg border border-cyber-purple/30">
                  <p className="text-sm text-gray-400">Rapid Spread</p>
                  <p className="text-2xl font-bold text-cyber-yellow">
                    {mockData.malware.filter(m => m.spread === 'Rapid').length}
                  </p>
                </div>
                <div className="bg-cyber-dark/70 p-4 rounded-lg border border-cyber-purple/30">
                  <p className="text-sm text-gray-400">Cross-platform</p>
                  <p className="text-2xl font-bold text-cyber-teal">
                    {mockData.malware.filter(m => m.platform === 'Cross-platform').length}
                  </p>
                </div>
              </div>
            </div>

            {/* Malware Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.malware.map((malware) => (
                <div key={malware.id} className="bg-gradient-to-br from-cyber-dark to-cyber-darker p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-cyber-purple/20 hover:border-cyber-purple/50 group animate-glow hover:animate-none">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-cyber-purple/20 rounded-lg group-hover:bg-cyber-purple/30 transition-colors">
                      <Bug className="w-6 h-6 text-cyber-purple group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold ml-3 text-white group-hover:text-cyber-teal transition-colors">{malware.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-purple-200"><span className="font-medium">Type:</span> {malware.type}</p>
                    <p className="text-purple-200"><span className="font-medium">Platform:</span> {malware.platform}</p>
                    <p className="text-purple-200"><span className="font-medium">Discovered:</span> {malware.discovered}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      malware.status === 'Active' ? 'bg-cyber-red/30 text-cyber-red animate-pulse-slow' :
                      'bg-cyber-yellow/20 text-cyber-yellow'
                      }`}>
                        {malware.status}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      malware.spread === 'Rapid' ? 'bg-cyber-red/20 text-cyber-red' :
                      malware.spread === 'Fast' ? 'bg-cyber-yellow/20 text-cyber-yellow' :
                      'bg-cyber-purple/20 text-cyber-purple'
                      }`}>
                        {malware.spread} Spread
                      </span>
                    </div>
                    <button className="mt-4 w-full py-2 text-sm font-medium rounded-lg bg-cyber-purple/10 text-cyber-purple hover:bg-cyber-purple/20 transition-colors duration-200">
                      View Analysis
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-darker to-cyber-dark text-white overflow-y-auto" style={{
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(100,100,100,0.4) rgba(0,0,0,0.1)',
      overscrollBehavior: 'none',
      height: '100vh',
      position: 'relative'
    }}>
      {/* Header */}
      <header className="bg-cyber-dark/80 backdrop-blur-lg border-b border-cyber-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
            <div className="p-2 bg-cyber-neon-blue/10 rounded-lg border border-cyber-neon-blue/30 shadow-cyber-glow">
              <Shield className="h-8 w-8 text-cyber-neon-blue" />
            </div>
              <h1 className="ml-3 text-2xl font-bold text-white">
                RHYM
              </h1>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-300 hover:bg-gray-800 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'dashboard'
                    ? 'bg-cyber-teal/20 text-cyber-teal border border-cyber-teal/30 shadow-glow'
                    : 'text-cyber-teal/80 hover:text-cyber-teal hover:bg-cyber-dark/50'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('threats')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'threats'
                    ? 'bg-cyber-red/20 text-cyber-red border border-cyber-red/30 shadow-glow'
                    : 'text-cyber-teal/80 hover:text-cyber-teal hover:bg-cyber-dark/50'
                }`}
              >
                Threat Actors
              </button>
              <button
                onClick={() => setActiveTab('techniques')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'techniques'
                    ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30 shadow-glow'
                    : 'text-cyber-blue/80 hover:text-cyber-blue hover:bg-cyber-dark/50'
                }`}
              >
                Techniques
              </button>
              <button
                onClick={() => setActiveTab('malware')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === 'malware'
                    ? 'bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 shadow-glow'
                    : 'text-cyber-purple/80 hover:text-cyber-purple hover:bg-cyber-dark/50'
                }`}
              >
                Malware
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setActiveTab('dashboard');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full px-3 py-2 rounded-lg text-base font-medium text-left ${
                  activeTab === 'dashboard'
                    ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setActiveTab('threats');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full px-3 py-2 rounded-lg text-base font-medium text-left ${
                  activeTab === 'threats'
                    ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                }`}
              >
                Threat Actors
              </button>
              <button
                onClick={() => {
                  setActiveTab('techniques');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full px-3 py-2 rounded-lg text-base font-medium text-left ${
                  activeTab === 'techniques'
                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                }`}
              >
                Techniques
              </button>
              <button
                onClick={() => {
                  setActiveTab('malware');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full px-3 py-2 rounded-lg text-base font-medium text-left ${
                  activeTab === 'malware'
                    ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                }`}
              >
                Malware
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {activeTab === 'threats' && 'Latest Threat Actors'}
            {activeTab === 'techniques' && 'Attack Techniques'}
            {activeTab === 'malware' && 'Malware Analysis'}
          </h2>
          <p className="mt-2 text-gray-400">
            {activeTab === 'threats' && 'Monitor and track the most recent threat actor activities and their targets.'}
            {activeTab === 'techniques' && 'Explore various attack techniques and their severity levels.'}
            {activeTab === 'malware' && 'Stay informed about the latest malware threats and their characteristics.'}
          </p>
        </div>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;