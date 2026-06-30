import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import { Star, Clock, MapPin, Award, CheckCircle, Calendar, ArrowLeft, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const coachData = {
  name: 'Elena Ramos',
  title: 'Executive Career Coach',
  specialty: ['Leadership', 'Executive Transition', 'C-Suite Coaching', 'Career Strategy'],
  rating: 4.9,
  reviewCount: 142,
  sessions: 340,
  price: 180,
  currency: '£',
  location: 'London, UK',
  availability: 'Available this week',
  color: '#7A8D7A',
  match: 96,
  bio: [
    'Former Fortune 500 VP turned career coach. I specialize in helping senior professionals make bold transitions and step into executive roles with confidence and clarity.',
    'After 15 years in corporate leadership across global organizations, I transitioned to coaching because I saw too many talented professionals stuck — not from lack of skill, but from lack of direction and self-belief.',
    "My approach combines strategic career planning with deep personal reflection. Together, we'll clarify your vision, identify your blind spots, and build a roadmap that aligns with who you truly are."
  ],
  experience: [
    { role: 'VP of Strategy', company: 'Global Dynamics Inc.', years: '2008–2018' },
    { role: 'Head of People', company: 'TechForward Group', years: '2018–2021' },
    { role: 'Executive Coach', company: 'Independent Practice', years: '2021–Present' },
  ],
  credentials: [
    'ICF Certified Coach (PCC)',
    'Harvard Business School Executive Education',
    'EMCC Senior Practitioner'
  ],
  packages: [
    { name: 'Discovery Session', price: 80, duration: '60 min', desc: 'A focused introductory session to assess fit and clarify your priorities.' },
    { name: 'Transformation Package', price: 450, duration: '3 sessions', desc: 'Deep-dive coaching across strategy, mindset, and execution planning.' },
    { name: 'Executive Accelerator', price: 980, duration: '6 sessions', desc: 'Full 3-month program with ongoing accountability and structured milestones.' },
  ],
  clientReviews: [
    { name: 'Alex M.', role: 'Head of Product', rating: 5, text: 'Elena helped me land my dream VP role in 8 weeks. Her structured approach and honest feedback were exactly what I needed.', date: 'March 2025' },
    { name: 'Sarah K.', role: 'Career Changer', rating: 5, text: "I came to Elena completely lost. She helped me rebuild my confidence and craft a narrative I'm proud of. Truly transformational.", date: 'February 2025' },
    { name: 'Michael T.', role: 'Senior Consultant', rating: 5, text: "Best investment in my career. Elena's industry insight is unmatched and she genuinely cares about your success.", date: 'January 2025' },
  ]
};

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
    </div>
  );
}

export default function CoachProfilePage({ setOpen }) {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      <TopNav title="Coach Profile" setOpen={setOpen} />
      <div className="page-content animate-in" style={{ maxWidth: 1100 }}>

        {/* Back */}
        <button className="btn btn-ghost btn-sm" onClick={() => navigate(-1)} style={{ marginBottom: 'var(--space-4)' }}>
          <ArrowLeft size={14} /> Back to Coaches
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 'var(--space-6)', alignItems: 'start' }}>

          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

            {/* Profile Header */}
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{
                height: 160,
                background: `linear-gradient(135deg, ${coachData.color}33, ${coachData.color}77)`,
                display: 'flex', alignItems: 'flex-end', padding: 'var(--space-6)', gap: 'var(--space-5)'
              }}>
                <div style={{
                  width: 90, height: 90, borderRadius: '50%', background: coachData.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 32, fontFamily: 'var(--font-serif)', fontWeight: 600,
                  border: '4px solid white', boxShadow: 'var(--shadow-lg)', marginBottom: -20, flexShrink: 0
                }}>ER</div>
                <div style={{ marginBottom: -14 }}>
                  <div style={{
                    background: 'white', borderRadius: 'var(--radius-full)', padding: '2px 10px',
                    display: 'inline-block', fontSize: 11, fontWeight: 700, color: coachData.color, marginBottom: 4
                  }}>
                    {coachData.match}% profile match
                  </div>
                </div>
              </div>
              <div style={{ padding: 'var(--space-6)', paddingTop: 'calc(var(--space-6) + 20px)' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 4 }}>{coachData.name}</h2>
                <p style={{ color: 'var(--neutral-500)', marginBottom: 'var(--space-3)' }}>{coachData.title}</p>
                <div className="flex items-center gap-4" style={{ flexWrap: 'wrap' }}>
                  <div className="flex items-center gap-2">
                    <Stars count={5} />
                    <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>{coachData.rating}</span>
                    <span style={{ color: 'var(--neutral-400)', fontSize: 'var(--text-sm)' }}>({coachData.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={13} color="var(--neutral-400)" />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-400)' }}>{coachData.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={13} color="var(--primary)" />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--primary)', fontWeight: 500 }}>{coachData.availability}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4" style={{ flexWrap: 'wrap' }}>
                  {coachData.specialty.map(s => <span key={s} className="badge badge-primary">{s}</span>)}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="card">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>About Elena</h4>
              {coachData.bio.map((para, i) => (
                <p key={i} style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8, marginBottom: 'var(--space-3)' }}>{para}</p>
              ))}
            </div>

            {/* Experience */}
            <div className="card">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-5)' }}>Professional Background</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {coachData.experience.map((exp, i) => (
                  <div key={i} className="flex gap-4">
                    <div style={{ width: 36, height: 36, background: 'var(--primary-50)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                      <Award size={16} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)' }}>{exp.role}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)' }}>{exp.company}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>{exp.years}</div>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="divider" />
              <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-3)' }}>Credentials</h5>
              {coachData.credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-2" style={{ marginBottom: 6 }}>
                  <CheckCircle size={14} color="var(--primary)" />
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)' }}>{c}</span>
                </div>
              ))}
            </div>

            {/* Reviews */}
            <div className="card">
              <div className="section-header">
                <span className="section-title">Client Reviews</span>
                <div className="flex items-center gap-2">
                  <Stars count={5} />
                  <span style={{ fontWeight: 700 }}>4.9</span>
                  <span style={{ color: 'var(--neutral-400)', fontSize: 'var(--text-sm)' }}>· {coachData.reviewCount} reviews</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                {coachData.clientReviews.map((r, i) => (
                  <div key={i} style={{ paddingBottom: 'var(--space-5)', borderBottom: i < coachData.clientReviews.length - 1 ? '1px solid var(--neutral-100)' : 'none' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 12, fontWeight: 700 }}>
                        {r.name[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{r.name}</div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>{r.role} · {r.date}</div>
                      </div>
                      <div style={{ marginLeft: 'auto' }}><Stars count={r.rating} /></div>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7, fontStyle: 'italic', color: 'var(--neutral-600)' }}>"{r.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Booking */}
          <div style={{ position: 'sticky', top: 'calc(var(--navbar-height) + var(--space-6))', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="card">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-5)' }}>Book a Session</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {coachData.packages.map((pkg, i) => (
                  <div key={i}
                    onClick={() => setSelectedPackage(i)}
                    style={{
                      border: `1.5px solid ${selectedPackage === i ? 'var(--primary)' : 'var(--neutral-200)'}`,
                      borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', cursor: 'pointer',
                      background: selectedPackage === i ? 'var(--primary-50)' : 'transparent',
                      transition: 'all 0.2s'
                    }}>
                    <div className="flex justify-between items-start">
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)' }}>{pkg.name}</div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', marginTop: 2 }}>{pkg.duration}</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: selectedPackage === i ? 'var(--primary)' : 'var(--neutral-800)' }}>
                        {coachData.currency}{pkg.price}
                      </div>
                    </div>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', marginTop: 6, lineHeight: 1.6 }}>{pkg.desc}</p>
                  </div>
                ))}
              </div>
              <Link to="/book-session" className="btn btn-primary w-full" style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-5)' }}>
                <Calendar size={15} /> Book Now
              </Link>
              <button className="btn btn-ghost w-full" style={{ marginTop: 'var(--space-2)', justifyContent: 'center' }}>
                <MessageSquare size={15} /> Message First
              </button>
            </div>

            {/* Stats */}
            <div className="card card-cream">
              {[
                ['340+', 'Sessions delivered'],
                ['4.9 ★', 'Average rating'],
                ['92%', 'Client goal achievement'],
              ].map(([val, label]) => (
                <div key={label} className="flex justify-between items-center" style={{ padding: 'var(--space-2) 0', borderBottom: '1px solid var(--neutral-100)' }}>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)' }}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--neutral-800)' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
