import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Award, Target, BookOpen, Briefcase, BarChart3,
  ArrowRight, CheckCircle, AlertCircle, ChevronDown, ChevronUp, Star
} from 'lucide-react';

const scoreData = [
  { label: 'Strategic Thinking', score: 82, max: 100 },
  { label: 'Communication', score: 71, max: 100 },
  { label: 'Leadership Potential', score: 68, max: 100 },
  { label: 'Industry Knowledge', score: 79, max: 100 },
  { label: 'Adaptability', score: 88, max: 100 },
  { label: 'Network Leverage', score: 55, max: 100 },
];

const suggestions = [
  {
    type: 'Career Path',
    title: 'Strategic Growth Builder',
    desc: 'You are a Strategic Growth Builder',
    icon: TrendingUp,
    color: 'var(--primary)',
    bg: 'var(--primary-50)',
    roles: ['Head of Product', 'VP of Strategy', 'Chief of Staff'],
    match: 91,
  },
  {
    type: 'Alternative Path',
    title: 'Innovation Catalyst',
    desc: 'Strong alignment with innovation-led roles',
    icon: Star,
    color: 'var(--tertiary)',
    bg: 'var(--tertiary-50)',
    roles: ['Product Director', 'Chief Innovation Officer', 'Venture Advisor'],
    match: 78,
  },
];

const gaps = [
  { area: 'Executive Presence', action: 'Consider our "Leadership Communication" coaching package', priority: 'High' },
  { area: 'Financial Acumen', action: 'Explore our CFO-readiness workshop series', priority: 'Medium' },
  { area: 'Network Depth', action: 'Book a networking strategy session', priority: 'Medium' },
];

const strengths = [
  'Systems thinking and big-picture strategy',
  'Cross-functional collaboration and stakeholder management',
  'Data-driven decision making',
  'Adaptability in ambiguous environments',
];

function ScoreRing({ value, size = 120, color = 'var(--primary)' }) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', position: 'absolute' }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--neutral-100)" strokeWidth={10} />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={10}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: size > 100 ? 'var(--text-3xl)' : 'var(--text-xl)', fontWeight: 500, color: 'var(--neutral-800)' }}>{value}</div>
        <div style={{ fontSize: 10, color: 'var(--neutral-400)' }}>/ 100</div>
      </div>
    </div>
  );
}

export default function AssessmentsPage({ setOpen }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <TopNav title="AI Career Assessment" setOpen={setOpen} />
      <div className="page-content animate-in" style={{ maxWidth: 1100 }}>

        {/* Header card */}
        <div style={{
          background: 'linear-gradient(135deg, #3D5242 0%, var(--primary) 100%)',
          borderRadius: 'var(--radius-2xl)', padding: 'var(--space-8)',
          marginBottom: 'var(--space-6)', color: 'white',
          display: 'flex', gap: 'var(--space-8)', alignItems: 'center', flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginBottom: 8 }}>
              Career Clarity Report · Generated May 2025
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-3)', fontStyle: 'italic' }}>
              You are a<br /><em>Strategic Growth Builder</em>
            </h2>
            <p style={{ opacity: 0.8, lineHeight: 1.7, maxWidth: 440, marginBottom: 'var(--space-5)' }}>
              Your profile shows exceptional strategic thinking and adaptability. You thrive in ambiguous environments where you can build systems and drive long-term growth.
            </p>
            <Link to="/coaches" className="btn btn-inverted btn-sm">
              Match with a Coach <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <ScoreRing value={74} size={140} color="rgba(255,255,255,0.9)" />
              <div style={{ marginTop: 8, fontSize: 'var(--text-xs)', opacity: 0.7 }}>Overall Score</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>

          {/* Competency Scores */}
          <div className="card">
            <div className="section-header">
              <span className="section-title">Competency Scores</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {scoreData.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--neutral-700)' }}>{item.label}</span>
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: item.score >= 80 ? 'var(--primary)' : item.score >= 65 ? 'var(--neutral-600)' : 'var(--secondary)' }}>{item.score}</span>
                  </div>
                  <div className="progress-bar" style={{ height: 8 }}>
                    <div className="progress-fill" style={{
                      width: `${item.score}%`,
                      background: item.score >= 80 ? 'var(--primary)' : item.score >= 65 ? 'var(--tertiary)' : 'var(--secondary)'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Gaps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div className="card">
              <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle size={16} color="var(--primary)" /> Core Strengths
              </h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {strengths.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <AlertCircle size={16} color="var(--secondary)" /> Development Areas
              </h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {gaps.map((g, i) => (
                  <div key={i} style={{ padding: 'var(--space-3)', background: 'var(--neutral-50)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--secondary-100)' }}>
                    <div className="flex justify-between items-center">
                      <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--neutral-800)' }}>{g.area}</span>
                      <span className={`badge ${g.priority === 'High' ? 'badge-secondary' : 'badge-neutral'}`}>{g.priority}</span>
                    </div>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', marginTop: 4 }}>{g.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Career Paths */}
        <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
          <div className="section-header">
            <span className="section-title">Suggested Career Directions</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
            {suggestions.map((s, i) => (
              <div key={i} style={{
                background: s.bg, borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)',
                border: `1.5px solid ${s.color}22`, cursor: 'pointer', transition: 'all 0.2s'
              }}
                onClick={() => setExpanded(expanded === i ? null : i)}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="badge" style={{ background: s.color + '22', color: s.color, marginBottom: 8 }}>{s.type}</span>
                    <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--neutral-800)' }}>{s.title}</h5>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', color: s.color, fontWeight: 500 }}>{s.match}%</div>
                    <div style={{ fontSize: 10, color: 'var(--neutral-400)' }}>match</div>
                  </div>
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', marginBottom: 'var(--space-3)' }}>{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.roles.map(r => <span key={r} className="badge badge-neutral" style={{ fontSize: 10 }}>{r}</span>)}
                </div>
                {expanded === i && (
                  <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: `1px solid ${s.color}22` }}>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', lineHeight: 1.7 }}>
                      Based on your competency profile, you show particular strength in the areas most valued for this career direction. Your strategic mindset and adaptability make you well-suited for senior leadership roles.
                    </p>
                    <Link to="/coaches" className="btn btn-sm btn-outlined" style={{ marginTop: 'var(--space-3)', borderColor: s.color, color: s.color }}>
                      Find coaches for this path
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Services */}
        <div className="card">
          <div className="section-header">
            <span className="section-title">Recommended Next Steps</span>
            <Link to="/services" className="btn btn-ghost btn-sm">View All Services</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            {[
              { title: 'Executive Coaching', desc: '6-session leadership development program', price: '£480', icon: Award, color: 'var(--primary)' },
              { title: 'CV Rewrite', desc: 'Professional CV tailored for senior roles', price: '£120', icon: BookOpen, color: 'var(--tertiary)' },
              { title: 'Mock Interview', desc: 'Practice with industry experts', price: '£85', icon: Target, color: 'var(--secondary)' },
            ].map((service, i) => (
              <div key={i} style={{
                background: 'var(--neutral-50)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)',
                border: '1px solid var(--neutral-100)', transition: 'all 0.2s'
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: service.color + '22', display: 'flex', alignItems: 'center', justifyContent: 'center', color: service.color, marginBottom: 'var(--space-3)' }}>
                  <service.icon size={16} />
                </div>
                <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)', marginBottom: 4 }}>{service.title}</div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', marginBottom: 'var(--space-3)', lineHeight: 1.6 }}>{service.desc}</p>
                <div className="flex justify-between items-center">
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--primary)' }}>{service.price}</span>
                  <Link to="/services" className="btn btn-primary btn-sm">Book</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
