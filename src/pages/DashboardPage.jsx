import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../components/TopNav';
import {
  Calendar, TrendingUp, MessageSquare, ArrowRight, Star, Clock,
  CheckCircle, ChevronRight, Sparkles, BarChart3, Users, Zap
} from 'lucide-react';

const upcomingSessions = [
  { coach: 'Elena Ramos', date: 'Today, 3:00 PM', type: 'Career Strategy', color: '#7A8D7A' },
  { coach: 'Marcus Chen', date: 'Thu, May 15 · 10:30 AM', type: 'Resume Review', color: '#A17F86' },
];

const milestones = [
  { label: 'Career Assessment Complete', done: true },
  { label: 'First Coaching Session Booked', done: true },
  { label: 'CV Updated & Reviewed', done: false },
  { label: 'Career Clarity Report Generated', done: false },
  { label: '5 Job Applications Tracked', done: false },
];

const quickActions = [
  { icon: BarChart3, label: 'View AI Report', to: '/assessments', color: 'var(--primary)' },
  { icon: Users, label: 'Find Coaches', to: '/coaches', color: 'var(--tertiary)' },
  { icon: Calendar, label: 'Book Session', to: '/book-session', color: 'var(--secondary)' },
  { icon: MessageSquare, label: 'AI Companion', to: '/messages', color: '#6B8FBF' },
];

export default function DashboardPage({ setOpen }) {
  return (
    <>
      <TopNav title="Dashboard" setOpen={setOpen} />
      <div className="page-content animate-in" style={{ maxWidth: 1200 }}>

        {/* Welcome Banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 60%, var(--primary-light) 100%)',
          borderRadius: 'var(--radius-2xl)', padding: 'var(--space-8)', marginBottom: 'var(--space-6)',
          position: 'relative', overflow: 'hidden', color: 'white'
        }}>
          <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -20, right: 100, width: 100, height: 100, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginBottom: 6 }}>Good morning</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>Welcome back, Alex.</h2>
            <p style={{ opacity: 0.8, maxWidth: 480, lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
              You have a coaching session with Elena Ramos today at 3:00 PM. Your Career Clarity Report score has improved by 12 points.
            </p>
            <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
              <Link to="/assessments" className="btn btn-inverted btn-sm">View My Report <ArrowRight size={14} /></Link>
              <Link to="/book-session" className="btn btn-sm" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }}>
                <Calendar size={14} /> Manage Sessions
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid-4 mb-6" style={{ marginBottom: 'var(--space-6)' }}>
          {[
            { label: 'Career Clarity Score', value: '74', unit: '/100', change: '+12', up: true, icon: TrendingUp },
            { label: 'Sessions Completed', value: '8', unit: '', change: '+2 this month', up: true, icon: CheckCircle },
            { label: 'Active Goals', value: '3', unit: '', change: '1 near completion', up: true, icon: Zap },
            { label: 'Coach Rating Given', value: '4.9', unit: '★', change: 'Excellent feedback', up: true, icon: Star },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="flex justify-between items-center">
                <div style={{ width: 36, height: 36, background: 'var(--primary-50)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <stat.icon size={16} />
                </div>
              </div>
              <div className="stat-value">{stat.value}<span style={{ fontSize: 'var(--text-lg)', color: 'var(--neutral-400)' }}>{stat.unit}</span></div>
              <div className="stat-label">{stat.label}</div>
              <div className={`stat-change ${stat.up ? 'up' : 'down'}`}>{stat.change}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>

          {/* Upcoming Sessions */}
          <div className="card">
            <div className="section-header">
              <span className="section-title">Upcoming Sessions</span>
              <Link to="/book-session" className="btn btn-ghost btn-sm">View all</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {upcomingSessions.map((session, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
                  padding: 'var(--space-4)', background: 'var(--neutral-50)',
                  borderRadius: 'var(--radius-lg)', border: '1px solid var(--neutral-100)'
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%', background: session.color + '22',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: session.color, fontSize: 16, fontFamily: 'var(--font-serif)', fontWeight: 600, flexShrink: 0
                  }}>
                    {session.coach.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)' }}>{session.coach}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', marginTop: 2 }}>
                      <Clock size={10} style={{ display: 'inline', marginRight: 4 }} />{session.date}
                    </div>
                    <div className="badge badge-primary" style={{ marginTop: 6, fontSize: 10 }}>{session.type}</div>
                  </div>
                  <Link to="/book-session" className="btn btn-outlined btn-sm">Join</Link>
                </div>
              ))}
              <Link to="/book-session" className="btn btn-ghost w-full" style={{ justifyContent: 'center', border: '1.5px dashed var(--neutral-200)' }}>
                + Book New Session
              </Link>
            </div>
          </div>

          {/* Career Milestones */}
          <div className="card">
            <div className="section-header">
              <span className="section-title">Growth Milestones</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>2/5 complete</span>
            </div>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '40%' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                <span style={{ fontSize: 10, color: 'var(--neutral-400)' }}>2 of 5 milestones</span>
                <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--primary)' }}>40%</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {milestones.map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                    background: m.done ? 'var(--primary)' : 'var(--neutral-100)',
                    border: m.done ? 'none' : '2px solid var(--neutral-200)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: 10
                  }}>
                    {m.done && <CheckCircle size={10} />}
                  </div>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: m.done ? 'var(--neutral-800)' : 'var(--neutral-400)',
                    fontWeight: m.done ? 500 : 400,
                    textDecoration: m.done ? 'none' : 'none'
                  }}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-6)' }}>
          {/* Quick Actions */}
          <div className="card">
            <div className="section-header">
              <span className="section-title">Quick Actions</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
              {quickActions.map((action, i) => (
                <Link key={i} to={action.to} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'var(--neutral-50)', borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-5)', textAlign: 'center', cursor: 'pointer',
                    border: '1px solid var(--neutral-100)', transition: 'all 0.2s',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = action.color; e.currentTarget.style.background = action.color + '11'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--neutral-100)'; e.currentTarget.style.background = 'var(--neutral-50)'; }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: action.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', color: action.color }}>
                      <action.icon size={20} />
                    </div>
                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--neutral-700)' }}>{action.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI Companion */}
          <div className="ai-panel">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} />
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, opacity: 0.9 }}>Pathora AI</span>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', opacity: 0.85, lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              "Based on your profile, I recommend focusing on leadership communication skills before your next interview. Want me to prepare you?"
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {['Prepare me', 'Tell me more', 'Not now'].map(opt => (
                <button key={opt} style={{
                  background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.25)',
                  borderRadius: 'var(--radius-md)', padding: '0.4rem 0.75rem',
                  color: 'white', fontSize: 'var(--text-xs)', cursor: 'pointer',
                  transition: 'background 0.2s', fontFamily: 'var(--font-sans)', fontWeight: 500
                }}
                  onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.25)'}
                  onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
                >{opt}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
