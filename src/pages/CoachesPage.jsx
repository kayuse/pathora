import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

const coaches = [
  {
    id: 1, name: 'Elena Ramos', title: 'Executive Career Coach', specialty: ['Leadership', 'Executive Transition', 'C-Suite Coaching'],
    rating: 4.9, reviews: 142, sessions: 340, price: 180, currency: '£', location: 'London, UK',
    availability: 'Available this week', bio: 'Former Fortune 500 VP turned career coach. I specialize in helping senior professionals make bold transitions and step into executive roles with confidence.',
    color: '#7A8D7A', match: 96
  },
  {
    id: 2, name: 'Marcus Chen', title: 'Tech & Product Career Specialist', specialty: ['Product Strategy', 'Tech Leadership', 'Startup Careers'],
    rating: 4.8, reviews: 98, sessions: 210, price: 150, currency: '£', location: 'Remote',
    availability: 'Available next week', bio: 'Ex-Google PM with 12+ years building products. I help technical professionals articulate their impact and navigate the PM and leadership ladder.',
    color: '#A17F86', match: 84
  },
  {
    id: 3, name: 'Amara Osei', title: 'Career Transition Specialist', specialty: ['Career Change', 'Sector Transition', 'Rebranding'],
    rating: 5.0, reviews: 87, sessions: 178, price: 120, currency: '£', location: 'Manchester, UK',
    availability: 'Available today', bio: 'I\'ve guided over 150 professionals through major career pivots — from academia to tech, from corporate to entrepreneurship. Change is my specialty.',
    color: '#E86F51', match: 79
  },
  {
    id: 4, name: 'David Okafor', title: 'Finance & Strategy Career Coach', specialty: ['Finance', 'Investment Banking', 'Corporate Strategy'],
    rating: 4.7, reviews: 63, sessions: 145, price: 160, currency: '£', location: 'London, UK',
    availability: 'Available this week', bio: 'Former Goldman Sachs VP sharing insider knowledge to help finance professionals climb faster and smarter.',
    color: '#6B8FAD', match: 71
  },
  {
    id: 5, name: 'Sophia Williams', title: 'Healthcare & Nonprofit Coach', specialty: ['Healthcare', 'Nonprofit', 'Social Impact'],
    rating: 4.9, reviews: 52, sessions: 98, price: 100, currency: '£', location: 'Remote',
    availability: 'Available this week', bio: 'Helping mission-driven professionals find alignment between purpose and career. NHS alumna with deep sector knowledge.',
    color: '#8FA88F', match: 65
  },
  {
    id: 6, name: 'James Adebayo', title: 'Entrepreneurship & Startup Coach', specialty: ['Entrepreneurship', 'Fundraising', 'Startups'],
    rating: 4.8, reviews: 74, sessions: 156, price: 140, currency: '£', location: 'London, UK',
    availability: 'Available next week', bio: '3x founder, angel investor, and startup advisor. I help ambitious professionals turn career capital into entrepreneurial ventures.',
    color: '#C09B6E', match: 62
  },
];

const specialties = ['All', 'Leadership', 'Tech', 'Career Change', 'Finance', 'Healthcare', 'Entrepreneurship'];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={12} fill={i <= Math.round(rating) ? 'currentColor' : 'none'} color="var(--secondary)" />
      ))}
    </div>
  );
}

export default function CoachesPage({ setOpen }) {
  const [search, setSearch] = useState('');
  const [activeSpecialty, setActiveSpecialty] = useState('All');

  const filtered = coaches.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.specialty.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchSpecialty = activeSpecialty === 'All' || c.specialty.some(s => s.includes(activeSpecialty));
    return matchSearch && matchSpecialty;
  });

  return (
    <>
      <TopNav title="Find Your Guide" setOpen={setOpen} />
      <div className="page-content animate-in" style={{ maxWidth: 1200 }}>

        {/* Header */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-2)' }}>Coaches Directory</h2>
          <p style={{ color: 'var(--neutral-400)' }}>Browse our curated network of expert career coaches. Each guide is vetted, experienced, and ready to meet you where you are.</p>
        </div>

        {/* Search & Filter */}
        <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex', alignItems: 'center', background: 'var(--white)',
            border: '1.5px solid var(--neutral-200)', borderRadius: 'var(--radius-full)',
            padding: '0.5rem 1rem', gap: 'var(--space-2)', flex: 1, minWidth: 240
          }}>
            <Search size={16} color="var(--neutral-400)" />
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by name or specialty..."
              style={{ background: 'transparent', fontSize: 'var(--text-sm)', color: 'var(--neutral-800)', width: '100%', border: 'none', outline: 'none' }}
            />
          </div>
          <button className="btn btn-outlined btn-sm">
            <Filter size={14} /> Filters
          </button>
        </div>

        {/* Specialty Filters */}
        <div className="flex gap-2 mb-6" style={{ marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
          {specialties.map(s => (
            <button key={s} className={`btn btn-sm ${activeSpecialty === s ? 'btn-primary' : 'btn-ghost'}`}
              style={{ borderRadius: 'var(--radius-full)', border: '1.5px solid var(--neutral-200)' }}
              onClick={() => setActiveSpecialty(s)}>
              {s}
            </button>
          ))}
        </div>

        {/* Coaches Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--space-5)' }}>
          {filtered.map(coach => (
            <div key={coach.id} className="coach-card animate-in">
              {/* Card top */}
              <div style={{
                height: 160, background: `linear-gradient(135deg, ${coach.color}22, ${coach.color}55)`,
                display: 'flex', alignItems: 'center', padding: 'var(--space-5)', gap: 'var(--space-4)',
                position: 'relative'
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%', background: coach.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 24, fontFamily: 'var(--font-serif)', fontWeight: 600,
                  flexShrink: 0, boxShadow: 'var(--shadow-md)'
                }}>
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--neutral-800)', marginBottom: 4 }}>{coach.name}</h5>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-600)', marginBottom: 6 }}>{coach.title}</p>
                  <div className="flex items-center gap-2">
                    <Stars rating={coach.rating} />
                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--neutral-800)' }}>{coach.rating}</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>({coach.reviews})</span>
                  </div>
                </div>
                {/* Match badge */}
                <div style={{
                  position: 'absolute', top: 'var(--space-3)', right: 'var(--space-3)',
                  background: 'var(--white)', borderRadius: 'var(--radius-full)',
                  padding: '0.2rem 0.6rem', fontSize: 11, fontWeight: 700,
                  color: coach.match >= 85 ? 'var(--primary)' : 'var(--neutral-600)',
                  boxShadow: 'var(--shadow-sm)', border: '1px solid var(--neutral-100)'
                }}>
                  {coach.match}% match
                </div>
              </div>

              {/* Card body */}
              <div className="coach-card-body">
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  {coach.bio.length > 120 ? coach.bio.substring(0, 120) + '...' : coach.bio}
                </p>

                <div className="flex flex-wrap gap-2" style={{ marginBottom: 'var(--space-4)' }}>
                  {coach.specialty.map(s => <span key={s} className="badge badge-primary" style={{ fontSize: 10 }}>{s}</span>)}
                </div>

                <div className="flex gap-4 mb-4" style={{ marginBottom: 'var(--space-4)' }}>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} color="var(--neutral-400)" />
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>{coach.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} color="var(--primary)" />
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--primary)', fontWeight: 500 }}>{coach.availability}</span>
                  </div>
                </div>

                <hr className="divider" />

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', color: 'var(--neutral-800)', fontWeight: 500 }}>
                      {coach.currency}{coach.price}
                    </span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>/session</span>
                  </div>
                  <Link to={`/coach/${coach.id}`} className="btn btn-primary btn-sm">
                    View Profile <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
