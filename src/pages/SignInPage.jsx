import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{
      minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr'
    }}>
      {/* Left Panel */}
      <div style={{
        background: 'linear-gradient(135deg, #3D5242 0%, var(--primary) 60%, var(--primary-light) 100%)',
        display: 'flex', flexDirection: 'column', padding: 'var(--space-12)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 350, height: 350, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: 50, left: -100, width: 300, height: 300, background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }} />

        <div className="flex items-center gap-3 mb-auto">
          <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 18 }}>S</div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', color: 'white', fontWeight: 600, fontSize: 15, lineHeight: 1.1 }}>SEAS Pathora</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Career Clinic</div>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', marginBottom: 'auto' }}>
          <div style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
            "The clarity I needed was always there — Pathora helped me find it."
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'white', fontWeight: 400, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.3, marginBottom: 'var(--space-6)' }}>
            Your career deserves a <em>dedicated</em> guide.
          </h2>
          <div className="flex items-center gap-3">
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: 14 }}>AK</div>
            <div>
              <div style={{ color: 'white', fontWeight: 600, fontSize: 'var(--text-sm)' }}>Amara Kofi</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-xs)' }}>Senior Designer → Creative Director</div>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: 'var(--space-8)' }}>
          {[['500+', 'Coaches'], ['98%', 'Satisfaction'], ['4.9★', 'Rated']].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-serif)', color: 'white', fontSize: 'var(--text-2xl)', fontWeight: 500 }}>{val}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-xs)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-12)', background: 'var(--cream)' }}>
        <div style={{ width: '100%', maxWidth: 420 }}>
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-2)' }}>Welcome back</h2>
            <p style={{ color: 'var(--neutral-400)', fontSize: 'var(--text-sm)' }}>Sign in to continue your career journey.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="input-group">
              <label className="input-label">Email address</label>
              <input className="input-field" type="email" placeholder="you@example.com" id="signin-email" />
            </div>
            <div className="input-group">
              <div className="flex justify-between">
                <label className="input-label">Password</label>
                <a href="#" style={{ fontSize: 'var(--text-xs)', color: 'var(--primary)' }}>Forgot password?</a>
              </div>
              <div style={{ position: 'relative' }}>
                <input className="input-field" type={showPassword ? 'text' : 'password'} placeholder="Your password" id="signin-password" style={{ paddingRight: 44 }} />
                <button onClick={() => setShowPassword(p => !p)}
                  style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--neutral-400)' }}>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" style={{ accentColor: 'var(--primary)' }} />
              <label htmlFor="remember" style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', cursor: 'pointer' }}>Remember me for 30 days</label>
            </div>

            <Link to="/dashboard" className="btn btn-primary btn-lg" style={{ display: 'flex', justifyContent: 'center' }}>
              Sign In <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ position: 'relative', textAlign: 'center', margin: 'var(--space-6) 0' }}>
            <hr style={{ border: 'none', borderTop: '1px solid var(--neutral-200)' }} />
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--cream)', padding: '0 var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>
              OR
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {[
              { label: 'Continue with Google', icon: '🔑' },
              { label: 'Continue with LinkedIn', icon: '💼' },
            ].map(({ label, icon }) => (
              <button key={label} className="btn btn-outlined w-full" style={{ justifyContent: 'center', gap: 'var(--space-3)' }}>
                <span>{icon}</span> {label}
              </button>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--neutral-400)', marginTop: 'var(--space-6)' }}>
            Don't have an account?{' '}
            <Link to="/onboarding" style={{ color: 'var(--primary)', fontWeight: 600 }}>Get started free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
