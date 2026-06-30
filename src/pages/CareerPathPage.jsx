import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { TrendingUp, Target, CheckCircle, Clock, ChevronRight, Plus } from 'lucide-react';

const paths = [
  {
    title: 'Head of Product',
    company: 'Tech or Scale-up',
    match: 91, timeframe: '12-18 months',
    skills: { ready: ['Strategic Thinking', 'Stakeholder Management', 'Data Analysis'], needed: ['P&L Ownership', 'Team Management'] },
    steps: [
      { label: 'Complete Leadership Communication coaching', done: true },
      { label: 'Obtain formal P&L responsibility in current role', done: false },
      { label: 'Build portfolio of 0→1 product launches', done: false },
      { label: 'Expand network in product leadership community', done: false },
    ]
  },
  {
    title: 'VP of Strategy',
    company: 'Enterprise or Consulting',
    match: 78, timeframe: '18-24 months',
    skills: { ready: ['Strategic Planning', 'Executive Communication'], needed: ['Consulting Methodology', 'Client Management', 'Financial Modeling'] },
    steps: [
      { label: 'Gain consulting or advisory experience', done: false },
      { label: 'Complete financial modeling certification', done: false },
      { label: 'Build public thought leadership profile', done: false },
    ]
  }
];

const milestones = [
  { label: 'Career Assessment Completed', date: 'April 2025', done: true },
  { label: 'CV Updated & Optimized', date: 'April 2025', done: true },
  { label: 'First Coaching Session', date: 'May 2025', done: true },
  { label: 'Leadership Communication Workshop', date: 'May 2025', done: false },
  { label: 'Networking Strategy Session', date: 'June 2025', done: false },
  { label: 'Mock Interview Practice', date: 'June 2025', done: false },
  { label: 'Target Role Applications', date: 'July 2025', done: false },
];

export default function CareerPathPage({ setOpen }) {
  const [activePath, setActivePath] = useState(0);
  const path = paths[activePath];

  return (
    <>
      <TopNav title="Career Path" setOpen={setOpen} />
      <div className="page-content animate-in" style={{ maxWidth: 1100 }}>

        {/* Header */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-2)' }}>Your Career Roadmap</h2>
          <p style={{ color: 'var(--neutral-400)' }}>Based on your AI assessment, here are your recommended career directions and the steps to get there.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'var(--space-6)', alignItems: 'start' }}>

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>

            {/* Path selector */}
            <div className="flex gap-3">
              {paths.map((p, i) => (
                <button key={i} onClick={() => setActivePath(i)}
                  className="card"
                  style={{
                    flex: 1, textAlign: 'left', cursor: 'pointer', border: `2px solid ${activePath === i ? 'var(--primary)' : 'var(--neutral-100)'}`,
                    background: activePath === i ? 'var(--primary-50)' : 'var(--white)', transition: 'all 0.2s', padding: 'var(--space-4)'
                  }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--neutral-800)', marginBottom: 2 }}>{p.title}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>{p.company}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', color: 'var(--primary)', fontWeight: 500 }}>{p.match}%</div>
                      <div style={{ fontSize: 10, color: 'var(--neutral-400)' }}>match</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <Clock size={12} color="var(--neutral-400)" />
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>{p.timeframe}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Skills Readiness */}
            <div className="card">
              <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-5)' }}>Skills Readiness for {path.title}</h5>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)', marginBottom: 'var(--space-3)' }}>✓ Ready Skills</div>
                  {path.skills.ready.map((s, i) => (
                    <div key={i} className="flex items-center gap-2" style={{ marginBottom: 'var(--space-2)' }}>
                      <CheckCircle size={14} color="var(--primary)" />
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-700)' }}>{s}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--secondary)', marginBottom: 'var(--space-3)' }}>↑ Skills to Build</div>
                  {path.skills.needed.map((s, i) => (
                    <div key={i} className="flex items-center gap-2" style={{ marginBottom: 'var(--space-2)' }}>
                      <Target size={14} color="var(--secondary)" />
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-700)' }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Steps */}
            <div className="card">
              <div className="section-header">
                <span className="section-title">Your Action Steps</span>
                <button className="btn btn-ghost btn-sm"><Plus size={14} /> Add step</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {path.steps.map((step, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                    padding: 'var(--space-3)', borderRadius: 'var(--radius-lg)',
                    background: step.done ? 'var(--primary-50)' : 'var(--neutral-50)',
                    border: `1px solid ${step.done ? 'var(--primary-100)' : 'var(--neutral-100)'}`
                  }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: step.done ? 'var(--primary)' : 'var(--neutral-200)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontSize: 12, flexShrink: 0
                    }}>
                      {step.done ? <CheckCircle size={12} /> : <span style={{ color: 'var(--neutral-400)', fontWeight: 700 }}>{i + 1}</span>}
                    </div>
                    <span style={{
                      fontSize: 'var(--text-sm)', flex: 1,
                      color: step.done ? 'var(--primary-dark)' : 'var(--neutral-700)',
                      textDecoration: step.done ? 'line-through' : 'none', fontWeight: step.done ? 400 : 500
                    }}>{step.label}</span>
                    {!step.done && <ChevronRight size={16} color="var(--neutral-300)" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="card">
              <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-2)' }}>Growth Timeline</h5>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', marginBottom: 'var(--space-5)' }}>Your milestone journey to {path.title}</p>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: 10, top: 0, bottom: 0, width: 2, background: 'var(--neutral-100)' }} />
                {milestones.map((m, i) => (
                  <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)', position: 'relative' }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: '50%', flexShrink: 0, zIndex: 1,
                      background: m.done ? 'var(--primary)' : 'var(--white)',
                      border: `2px solid ${m.done ? 'var(--primary)' : 'var(--neutral-200)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {m.done && <CheckCircle size={10} color="white" />}
                    </div>
                    <div style={{ paddingTop: 2 }}>
                      <div style={{
                        fontSize: 'var(--text-sm)', fontWeight: m.done ? 500 : 400,
                        color: m.done ? 'var(--neutral-800)' : 'var(--neutral-500)',
                        marginBottom: 2
                      }}>{m.label}</div>
                      <div style={{ fontSize: 11, color: 'var(--neutral-400)' }}>{m.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall progress */}
            <div className="card" style={{ background: 'var(--primary)', color: 'white' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginBottom: 'var(--space-2)' }}>
                Overall Progress
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 48, fontWeight: 400, lineHeight: 1, marginBottom: 8 }}>43%</div>
              <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 999, height: 6, marginBottom: 'var(--space-3)' }}>
                <div style={{ height: '100%', width: '43%', background: 'white', borderRadius: 999 }} />
              </div>
              <p style={{ opacity: 0.8, fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                3 of 7 milestones completed. Keep going — you're building momentum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
