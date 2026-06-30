import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { User, Bell, Lock, CreditCard, HelpCircle, LogOut, ChevronRight, Camera } from 'lucide-react';

const sections = [
  { icon: User, label: 'Personal Information', id: 'personal' },
  { icon: Bell, label: 'Notifications', id: 'notifications' },
  { icon: Lock, label: 'Security', id: 'security' },
  { icon: CreditCard, label: 'Billing & Plan', id: 'billing' },
  { icon: HelpCircle, label: 'Help & Support', id: 'help' },
];

export default function ProfilePage({ setOpen }) {
  const [activeSection, setActiveSection] = useState('personal');
  const [name, setName] = useState('Kayde Mills');
  const [email, setEmail] = useState('kayde.mills@example.com');
  const [bio, setBio] = useState('Senior Product Manager with a passion for building products that make a difference. Currently exploring opportunities in strategic leadership.');
  const [notifications, setNotifications] = useState({
    sessionReminders: true, newMessages: true, weeklyReport: false, coachUpdates: true, promotions: false
  });

  return (
    <>
      <TopNav title="My Profile" setOpen={setOpen} />
      <div className="page-content animate-in" style={{ maxWidth: 1000 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {/* Profile preview */}
            <div className="card" style={{ textAlign: 'center', padding: 'var(--space-6)' }}>
              <div style={{ position: 'relative', width: 80, height: 80, margin: '0 auto var(--space-4)' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%', background: 'var(--primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 28, fontFamily: 'var(--font-serif)', fontWeight: 600
                }}>KM</div>
                <button style={{
                  position: 'absolute', bottom: 0, right: 0, width: 26, height: 26,
                  borderRadius: '50%', background: 'var(--secondary)', border: '2px solid white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  color: 'white'
                }}>
                  <Camera size={12} />
                </button>
              </div>
              <div style={{ fontWeight: 600, color: 'var(--neutral-800)', marginBottom: 2 }}>{name}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', marginBottom: 'var(--space-3)' }}>Career Explorer</div>
              <div className="badge badge-primary" style={{ fontSize: 11 }}>Career Explorer Plan</div>
            </div>

            {/* Nav */}
            <div className="card" style={{ padding: 'var(--space-2)' }}>
              {sections.map(s => (
                <button key={s.id} onClick={() => setActiveSection(s.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)',
                    borderRadius: 'var(--radius-md)', width: '100%', border: 'none', cursor: 'pointer',
                    background: activeSection === s.id ? 'var(--primary-50)' : 'transparent',
                    color: activeSection === s.id ? 'var(--primary)' : 'var(--neutral-600)',
                    fontWeight: activeSection === s.id ? 600 : 400,
                    fontSize: 'var(--text-sm)', fontFamily: 'var(--font-sans)', transition: 'all 0.2s'
                  }}>
                  <s.icon size={16} />
                  <span style={{ flex: 1, textAlign: 'left' }}>{s.label}</span>
                  <ChevronRight size={14} />
                </button>
              ))}
              <hr className="divider" />
              <button style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)',
                borderRadius: 'var(--radius-md)', width: '100%', border: 'none', cursor: 'pointer',
                background: 'transparent', color: 'var(--secondary)',
                fontSize: 'var(--text-sm)', fontFamily: 'var(--font-sans)', transition: 'all 0.2s',
                fontWeight: 500
              }}>
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>

            {activeSection === 'personal' && (
              <>
                <div className="card">
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-5)' }}>Personal Information</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                    <div className="input-group">
                      <label className="input-label">First name</label>
                      <input className="input-field" defaultValue="Kayde" />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Last name</label>
                      <input className="input-field" defaultValue="Mills" />
                    </div>
                    <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                      <label className="input-label">Email address</label>
                      <input className="input-field" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Current role</label>
                      <input className="input-field" defaultValue="Senior Product Manager" />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Industry</label>
                      <select className="input-field">
                        <option>Technology</option>
                        <option>Finance</option>
                        <option>Healthcare</option>
                        <option>Consulting</option>
                      </select>
                    </div>
                    <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                      <label className="input-label">Professional bio</label>
                      <textarea className="input-field" rows={4} value={bio} onChange={e => setBio(e.target.value)} style={{ resize: 'vertical' }} />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-5" style={{ marginTop: 'var(--space-5)' }}>
                    <button className="btn btn-primary">Save Changes</button>
                    <button className="btn btn-ghost">Cancel</button>
                  </div>
                </div>

                <div className="card">
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>Career Snapshot</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
                    {[['Career Clarity', '74/100'], ['Sessions', '8 completed'], ['Goals', '3 active']].map(([label, val]) => (
                      <div key={label} style={{ background: 'var(--primary-50)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', color: 'var(--primary)', fontWeight: 500 }}>{val}</div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', marginTop: 4 }}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeSection === 'notifications' && (
              <div className="card">
                <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-5)' }}>Notification Preferences</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {[
                    { key: 'sessionReminders', label: 'Session Reminders', desc: 'Get reminded 24h and 1h before coaching sessions' },
                    { key: 'newMessages', label: 'New Messages', desc: 'Notify me when I receive a message from a coach' },
                    { key: 'weeklyReport', label: 'Weekly Progress Report', desc: 'Receive a weekly summary of your career progress' },
                    { key: 'coachUpdates', label: 'Coach Updates', desc: 'Updates from coaches you follow' },
                    { key: 'promotions', label: 'Promotions & Offers', desc: 'Special offers and new service announcements' },
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="flex justify-between items-center" style={{ padding: 'var(--space-4)', background: 'var(--neutral-50)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--neutral-100)' }}>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)' }}>{label}</div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', marginTop: 2 }}>{desc}</div>
                      </div>
                      <div
                        onClick={() => setNotifications(n => ({ ...n, [key]: !n[key] }))}
                        style={{
                          width: 44, height: 24, borderRadius: 12, cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0,
                          background: notifications[key] ? 'var(--primary)' : 'var(--neutral-200)',
                          position: 'relative'
                        }}>
                        <div style={{
                          width: 18, height: 18, borderRadius: '50%', background: 'white',
                          position: 'absolute', top: 3, left: notifications[key] ? 23 : 3,
                          transition: 'left 0.2s', boxShadow: 'var(--shadow-sm)'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'billing' && (
              <div className="card">
                <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-5)' }}>Billing & Subscription</h4>
                <div style={{ background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', color: 'white', marginBottom: 'var(--space-5)' }}>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginBottom: 'var(--space-2)' }}>Current Plan</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-2)' }}>Career Explorer</h3>
                  <p style={{ opacity: 0.8, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>Access to coaches directory, 1 AI assessment per month, basic services</p>
                  <div className="flex gap-3">
                    <button className="btn btn-inverted btn-sm">Upgrade to Pro</button>
                  </div>
                </div>
                <div className="flex justify-between items-center" style={{ padding: 'var(--space-4)', background: 'var(--neutral-50)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-4)' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>Payment Method</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>Visa ending in 4242 · Expires 05/27</div>
                  </div>
                  <button className="btn btn-outlined btn-sm">Update</button>
                </div>
                <button className="btn btn-ghost btn-sm" style={{ color: 'var(--secondary)' }}>Cancel Subscription</button>
              </div>
            )}

            {(activeSection === 'security' || activeSection === 'help') && (
              <div className="card" style={{ textAlign: 'center', padding: 'var(--space-10)' }}>
                <div style={{ fontSize: 40, marginBottom: 'var(--space-4)' }}>
                  {activeSection === 'security' ? '🔒' : '💬'}
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-2)' }}>
                  {activeSection === 'security' ? 'Security Settings' : 'Help & Support'}
                </h4>
                <p style={{ color: 'var(--neutral-400)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)' }}>
                  {activeSection === 'security' ? 'Manage your password, two-factor authentication, and login sessions.' : 'Browse our help centre or reach out to our support team.'}
                </p>
                <button className="btn btn-primary">
                  {activeSection === 'security' ? 'Manage Security' : 'Contact Support'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
