import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FileText, Star, CheckCircle, Clock, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: FileText,
      title: 'CV Rewrite',
      badge: 'Most Popular',
      desc: 'A comprehensive overhaul of your curriculum vitae to highlight your strengths, align with industry standards, and effectively communicate your unique value proposition to prospective employers.',
      bullets: [
        { icon: Clock, text: '3–5 days turnaround' },
        { icon: Star, text: 'Includes 2 revision rounds' }
      ],
      price: '$149',
      color: '#F4ECEF',
      iconColor: '#A98E9A'
    },
    {
      icon: Star,
      title: 'LinkedIn Optimisation',
      desc: 'Strategic enhancement of your digital professional profile. We optimize your headline, summary, and experience sections to improve discoverability by recruiters and strengthen your network.',
      bullets: [
        { icon: Clock, text: '2–4 days turnaround' },
        { icon: CheckCircle, text: 'Keyword strategy included' }
      ],
      price: '$99',
      color: '#FCF2E8',
      iconColor: '#E86F51'
    },
    {
      icon: FileText,
      title: 'Mock Interview',
      desc: 'A simulated 60-minute interview session tailored to your target role, followed by detailed, constructive feedback on your delivery, body language, and response structuring.',
      bullets: [
        { icon: Clock, text: 'Scheduled upon booking' },
        { icon: Star, text: '60 min video session + recording' }
      ],
      price: '$189',
      color: '#F4ECEF',
      iconColor: '#A98E9A'
    },
    {
      icon: CheckCircle,
      title: 'Career Strategy Session',
      badge: 'Premium',
      desc: 'An intensive 90-minute consultation to map out your long-term career trajectory. We\'ll identify blockers, define clear milestones, and create a sustainable action plan for your professional growth.',
      bullets: [
        { icon: Clock, text: 'Scheduled upon booking' },
        { icon: FileText, text: 'Includes personalized roadmap PDF' }
      ],
      price: '$249',
      color: '#E8F3EB',
      iconColor: '#7A8D7A'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <div style={{
        background: 'transparent', padding: 'var(--space-6) var(--space-8)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 20, color: 'var(--neutral-800)', cursor: 'pointer' }} onClick={() => navigate('/')}>
          SEAS Pathora
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-8)' }}>
          <Link to="/coaches" style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--neutral-600)', textDecoration: 'none' }}>Explore Coaches</Link>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--neutral-800)', borderBottom: '2px solid var(--primary)', paddingBottom: 2 }}>Services</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <button className="btn btn-ghost" style={{ fontWeight: 600 }} onClick={() => navigate('/signin')}>Login</button>
          <button className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)' }} onClick={() => navigate('/onboarding')}>Sign Up</button>
        </div>
      </div>

      <div style={{ flex: 1, padding: 'var(--space-12) var(--space-8)', maxWidth: 1000, margin: '0 auto', width: '100%' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 500, color: 'var(--neutral-800)', marginBottom: 'var(--space-4)' }}>
          Career Services Marketplace
        </h1>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-600)', maxWidth: 600, lineHeight: 1.6, marginBottom: 'var(--space-10)' }}>
          Invest in your professional trajectory with our curated selection of targeted career services. Each offering is designed to provide clarity, momentum, and tangible results.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
          {services.map((svc, i) => (
            <div key={i} className="card animate-in" style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', animationDelay: `${i * 0.1}s` }}>
              <div style={{ position: 'absolute', top: -50, right: -50, width: 150, height: 150, borderRadius: '50%', background: svc.color, opacity: 0.5 }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-6)', position: 'relative', zIndex: 1 }}>
                <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: '#F9F7F5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neutral-500)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <svc.icon size={18} />
                </div>
                {svc.badge && (
                  <div style={{ background: svc.badge === 'Premium' ? '#E8F3EB' : '#F2F2F2', color: svc.badge === 'Premium' ? 'var(--primary)' : 'var(--neutral-600)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    {svc.badge}
                  </div>
                )}
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500, color: 'var(--neutral-800)', marginBottom: 'var(--space-3)' }}>{svc.title}</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.6, marginBottom: 'var(--space-6)', minHeight: 65 }}>{svc.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-8)', flex: 1 }}>
                {svc.bullets.map((b, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--neutral-500)' }}>
                    <b.icon size={12} />
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>

              <div style={{ height: 1, background: 'var(--neutral-100)', margin: '0 -var(--space-8) var(--space-6) -var(--space-8)' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>Investment</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500, color: 'var(--neutral-800)' }}>{svc.price}</div>
                </div>
                <button className="btn btn-outlined" style={{ borderRadius: 'var(--radius-full)', padding: '0 20px', background: 'transparent' }} onClick={() => navigate('/book-session')}>
                  Purchase Service <ArrowRight size={14} style={{ marginLeft: 6 }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ padding: 'var(--space-10) var(--space-8)', background: '#F5F3ED', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500, color: 'var(--neutral-800)', marginBottom: 4 }}>SEAS Pathora</div>
          <div style={{ fontSize: 11, color: 'var(--neutral-500)' }}>© 2024 SEAS Pathora. Cultivating professional clarity.</div>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-6)', fontSize: 11, fontWeight: 600, color: 'var(--neutral-500)', textDecoration: 'underline' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
          <a href="#">Careers</a>
        </div>
      </footer>
    </div>
  );
}
