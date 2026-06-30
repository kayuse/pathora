import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, CheckCircle, ChevronRight, Users, BarChart3,
  MessageCircle, Award, BookOpen, TrendingUp, Briefcase, Menu, X,
  Copy, Share2, Loader2, Sparkles, Check
} from 'lucide-react';

const coaches = [
  { name: 'Elena Ramos', title: 'Executive Career Coach', rating: 4.9, reviews: 142, specialty: 'Leadership', color: '#9BAF9B' },
  { name: 'Marcus Chen', title: 'Tech Career Specialist', rating: 4.8, reviews: 98, specialty: 'Product & Tech', color: '#A17F86' },
  { name: 'Amara Osei', title: 'Career Transition Expert', rating: 5.0, reviews: 87, specialty: 'Career Change', color: '#E86F51' },
];

const features = [
  { icon: BarChart3, title: 'AI Career Assessment', desc: 'Deep-dive reports that map your strengths, gaps, and ideal career trajectory with precision.' },
  { icon: Users, title: 'Expert Coaches', desc: 'Handpicked professionals who meet you where you are and guide you toward where you want to be.' },
  { icon: TrendingUp, title: 'Career Clarity Report', desc: 'Turn raw data into a meaningful professional narrative that resonates with employers.' },
  { icon: Briefcase, title: 'Services Marketplace', desc: 'CV rewrites, mock interviews, and professional interventions on demand.' },
  { icon: MessageCircle, title: 'AI Companion', desc: 'Always-available guidance for quick reflections, session prep, or career advice.' },
  { icon: Award, title: 'Growth Milestones', desc: 'Track your journey with insightful scores and celebrate every professional win.' },
];

const steps = [
  { num: '01', title: 'Upload Your CV', desc: 'Start with a CV upload and a guided career reflection to build your professional snapshot.' },
  { num: '02', title: 'AI Assessment', desc: 'Receive a comprehensive Career Clarity Report that identifies your unique strengths and blind spots.' },
  { num: '03', title: 'Match with a Coach', desc: 'Browse our curated directory and book sessions with coaches aligned to your goals.' },
  { num: '04', title: 'Grow with Purpose', desc: 'Execute on a personalized roadmap with ongoing support, resources, and milestone tracking.' },
];

const testimonials = [
  { name: 'Aisha T.', role: 'Product Manager → Director', text: "Propela didn't just help me find a new job — it helped me understand who I am professionally. The AI report was eye-opening.", rating: 5 },
  { name: 'James O.', role: 'Engineer → Startup Founder', text: 'The coaching marketplace connected me with someone who had walked my exact path. Three months later, I launched my startup.', rating: 5 },
  { name: 'Priya M.', role: 'Academia → Tech Industry', text: "Propela gave me the clarity and confidence I needed. Best investment I've made.", rating: 5 },
];

function Stars({ count }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="currentColor" />
      ))}
    </div>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    currentRole: 'Job Seeker',
    primaryInterest: 'AI Career Assessment',
    referralSource: '',
    message: '',
    consent: true
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(148);
  const [waitlistPosition, setWaitlistPosition] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  React.useEffect(() => {
    fetch(`${API_BASE_URL}/leads/count`)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error();
      })
      .then(count => {
        if (typeof count === 'number') {
          setWaitlistCount(148 + count);
        }
      })
      .catch(() => {
        setWaitlistCount(152);
      });
  }, [API_BASE_URL]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRoleSelect = (role) => {
    setFormData(prev => ({
      ...prev,
      currentRole: role
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in your name and email.');
      setSubmitStatus('error');
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setWaitlistPosition(data.position || waitlistCount + 1);
        setWaitlistCount(prev => prev + 1);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Could not connect to the waitlist server. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://propela.com?ref=' + (waitlistPosition || 'early-access'));
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const scrollToWaitlist = (e) => {
    e.preventDefault();
    const element = document.getElementById('join-waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = [
    { label: 'Job Seeker', icon: '💼' },
    { label: 'Executive', icon: '🚀' },
    { label: 'Student', icon: '🎓' },
    { label: 'Career Coach', icon: '🧠' },
    { label: 'Employer / HR', icon: '🏢' },
  ];

  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--cream)' }}>
      {/* Navbar */}
      <nav style={{
        background: 'var(--white)', borderBottom: '1px solid var(--neutral-100)',
        padding: '0 var(--space-8)', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 200
      }}>
        <div className="flex items-center gap-3">
          <div style={{
            width: 36, height: 36, background: 'var(--primary)', borderRadius: 'var(--radius-md)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--white)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 18
          }}>S</div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 15, lineHeight: 1.1, color: 'var(--neutral-800)' }}>SEAS Propela</div>
            <div style={{ fontSize: 11, color: 'var(--neutral-400)' }}>Career Clinic</div>
          </div>
        </div>

        <div className="flex items-center gap-6" style={{ display: 'flex' }}>
          {['Features', 'Coaches', 'Services', 'Pricing'].map(item => (
            <a key={item} href="#" style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--neutral-600)'}
            >{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/signin" className="btn btn-ghost btn-sm">Sign In</Link>
          <a href="#join-waitlist" onClick={scrollToWaitlist} className="btn btn-primary btn-sm">Get Started <ArrowRight size={14} /></a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #3D5242 0%, #5C6E5C 35%, #7A8D7A 70%, #9BAF9B 100%)',
        padding: '100px var(--space-8) 120px',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.05) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="badge badge-secondary" style={{ marginBottom: 'var(--space-5)', display: 'inline-flex', fontSize: 12, padding: '0.3rem 0.9rem' }}>
            ✦ Modern Career Coaching
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)', color: 'var(--white)', fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 400, lineHeight: 1.15, marginBottom: 'var(--space-6)',
            fontStyle: 'italic'
          }}>
            Your Handy Career Clinic
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'var(--text-lg)', lineHeight: 1.8, marginBottom: 'var(--space-10)', maxWidth: 540, margin: '0 auto var(--space-10)' }}>
            Navigating the future of work doesn't have to be lonely. Propela combines AI-powered career intelligence with human coaching expertise.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#join-waitlist" onClick={scrollToWaitlist} className="btn btn-inverted btn-lg">
              Join Exclusive Waitlist <ArrowRight size={18} />
            </a>
            <Link to="/coaches" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--white)', border: '1.5px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}>
              Browse Coaches
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8" style={{ marginTop: 'var(--space-8)' }}>
            {[['500+', 'Career Professionals'], ['98%', 'Satisfaction Rate'], ['4.9★', 'Average Rating']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', color: 'var(--white)', fontWeight: 500 }}>{val}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section style={{ background: 'var(--white)', padding: 'var(--space-6) var(--space-8)', borderBottom: '1px solid var(--neutral-100)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--neutral-400)', fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-5)' }}>
            Trusted by professionals from
          </p>
          <div className="flex items-center justify-center gap-8" style={{ flexWrap: 'wrap' }}>
            {['Google', 'Meta', 'Deloitte', 'McKinsey', 'NHS', 'Goldman Sachs'].map(company => (
              <span key={company} style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--neutral-300)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px var(--space-8)', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, marginBottom: 'var(--space-4)' }}>
            Everything you need to <em>thrive</em>
          </h2>
          <p style={{ color: 'var(--neutral-400)', maxWidth: 480, margin: '0 auto' }}>
            A comprehensive ecosystem built for modern career growth — from discovery to achievement.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-5)' }}>
          {features.map((f, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div style={{
                width: 44, height: 44, background: 'var(--primary-50)', borderRadius: 'var(--radius-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)'
              }}>
                <f.icon size={20} />
              </div>
              <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginTop: 4 }}>{f.title}</h5>
              <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'var(--white)', padding: '80px var(--space-8)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400 }}>How Propela works</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-8)' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--primary-100)', fontWeight: 700, lineHeight: 1 }}>{step.num}</div>
                <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}>{step.title}</h5>
                <p style={{ fontSize: 'var(--text-sm)' }}>{step.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight size={20} color="var(--neutral-200)" style={{ position: 'absolute', right: -20, top: 36, display: window.innerWidth > 768 ? 'block' : 'none' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Coaches */}
      <section style={{ padding: '80px var(--space-8)', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400, marginBottom: 'var(--space-4)' }}>
            Meet your guides
          </h2>
          <p style={{ color: 'var(--neutral-400)' }}>Curated coaches who've walked the path you're on.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
          {coaches.map((coach, i) => (
            <div key={i} className="coach-card">
              <div style={{ height: 180, background: `linear-gradient(135deg, ${coach.color}33, ${coach.color}88)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%', background: coach.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 28, fontFamily: 'var(--font-serif)', fontWeight: 600
                }}>
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="coach-card-body">
                <div className="badge badge-primary" style={{ marginBottom: 'var(--space-2)' }}>{coach.specialty}</div>
                <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 4 }}>{coach.name}</h5>
                <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>{coach.title}</p>
                <div className="flex items-center gap-2">
                  <Stars count={5} />
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--neutral-800)' }}>{coach.rating}</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>({coach.reviews} reviews)</span>
                </div>
                <Link to="/coaches" className="btn btn-outlined btn-sm w-full" style={{ marginTop: 'var(--space-4)', display: 'flex', justifyContent: 'center' }}>
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <Link to="/coaches" className="btn btn-primary">Browse All Coaches <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Join Waitlist Section */}
      <section id="join-waitlist" style={{
        background: 'linear-gradient(180deg, var(--white) 0%, var(--primary-50) 100%)',
        padding: '100px var(--space-8)',
        borderTop: '1px solid var(--neutral-100)',
        borderBottom: '1px solid var(--neutral-100)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{ position: 'absolute', top: -50, right: -50, width: 250, height: 250, background: 'var(--primary-100)', filter: 'blur(80px)', borderRadius: '50%', opacity: 0.5 }} />
        <div style={{ position: 'absolute', bottom: -50, left: -50, width: 250, height: 250, background: 'var(--tertiary-100)', filter: 'blur(80px)', borderRadius: '50%', opacity: 0.5 }} />

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <span className="badge badge-primary" style={{ display: 'inline-flex', gap: 6, fontSize: 12, padding: '0.4rem 1rem', marginBottom: 'var(--space-4)', borderRadius: 'var(--radius-full)', background: 'var(--primary-100)', color: 'var(--primary-dark)', fontWeight: 600 }}>
              <Sparkles size={12} style={{ color: 'var(--primary)' }} /> NOW OPEN FOR PRIVATE BETA
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 400, marginBottom: 'var(--space-3)' }}>
              Join the <em>Exclusive</em> Waitlist
            </h2>
            <p style={{ color: 'var(--neutral-600)', fontSize: 'var(--text-base)', maxWidth: 580, margin: '0 auto' }}>
              Secure your early access to Propela. Be the first to try our AI Career Assessment and match with top career coaches at launch.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 'var(--space-4)', background: 'var(--white)', padding: '6px 16px', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)', fontSize: 13, border: '1px solid var(--neutral-100)' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tertiary)', display: 'inline-block' }} className="pulse" />
              <strong style={{ color: 'var(--neutral-800)' }}>{waitlistCount}</strong> professionals signed up this week
            </div>
          </div>

          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: 'var(--shadow-lg)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-10) var(--space-8)'
          }}>
            {submitStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
                <div style={{
                  width: 64, height: 64, background: 'var(--tertiary-50)', color: 'var(--tertiary)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto var(--space-6) auto', border: '2px solid var(--tertiary-100)'
                }}>
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-2)' }}>
                  You're on the list, {formData.fullName.split(' ')[0]}! 🎉
                </h3>
                <p style={{ color: 'var(--neutral-600)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-8)', maxWidth: 460, margin: '0 auto var(--space-8)' }}>
                  We've reserved your spot and sent a verification email to <strong>{formData.email}</strong>. Stay tuned for early beta updates!
                </p>

                {/* Waitlist spot card */}
                <div style={{
                  background: 'var(--cream)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  maxWidth: 320,
                  margin: '0 auto var(--space-8) auto',
                  border: '1px solid var(--neutral-100)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Your Waitlist Position</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--primary-dark)', fontWeight: 700, margin: '8px 0' }}>
                    #{waitlistPosition}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--tertiary)', fontWeight: 600 }}>✦ Early-Bird Beta Invitee</div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid var(--neutral-200)', margin: 'var(--space-6) 0' }} />

                {/* Referral */}
                <div>
                  <h5 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--neutral-800)', marginBottom: 'var(--space-3)' }}>
                    Climb the Waitlist Queue
                  </h5>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', marginBottom: 'var(--space-4)' }}>
                    Share your unique referral link. For every colleague who joins, you advance 20 spots!
                  </p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', maxWidth: 440, margin: '0 auto' }}>
                    <input
                      readOnly
                      value={`https://propela.com?ref=${waitlistPosition}`}
                      style={{
                        padding: '0.5rem 0.75rem',
                        border: '1.5px solid var(--neutral-200)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: 12,
                        background: 'var(--neutral-50)',
                        color: 'var(--neutral-600)',
                        flex: 1,
                        outline: 'none'
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="btn btn-primary btn-sm"
                      style={{ borderRadius: 'var(--radius-md)', gap: 6 }}
                    >
                      {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                      {copiedLink ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 'var(--space-4)' }}>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I just joined the waitlist for Propela - the AI career assessment and coaching clinic! Spot #${waitlistPosition}. Join me here: https://propela.com?ref=${waitlistPosition}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                      style={{ fontSize: 12, color: '#1DA1F2', border: '1px solid rgba(29, 161, 242, 0.2)' }}
                    >
                      Share on X
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://propela.com?ref=${waitlistPosition}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                      style={{ fontSize: 12, color: '#0A66C2', border: '1px solid rgba(10, 102, 194, 0.2)' }}
                    >
                      Share on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                {submitStatus === 'error' && (
                  <div style={{
                    background: '#FDF2F2', border: '1.5px solid #FBD5D5', color: '#9B1C1C',
                    padding: 'var(--space-3) var(--space-4)', borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 8
                  }}>
                    <span>⚠️</span> {errorMessage}
                  </div>
                )}

                {/* Persona selector tabs */}
                <div>
                  <label className="input-label" style={{ display: 'block', marginBottom: 'var(--space-3)', fontWeight: 600, color: 'var(--neutral-700)', fontSize: 'var(--text-sm)' }}>
                    I am a...
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: 'var(--space-2)'
                  }}>
                    {roles.map(role => {
                      const isActive = formData.currentRole === role.label;
                      return (
                        <button
                          key={role.label}
                          type="button"
                          onClick={() => handleRoleSelect(role.label)}
                          style={{
                            background: isActive ? 'var(--primary)' : 'var(--white)',
                            color: isActive ? 'var(--white)' : 'var(--neutral-600)',
                            border: isActive ? '1.5px solid var(--primary)' : '1.5px solid var(--neutral-200)',
                            borderRadius: 'var(--radius-md)',
                            padding: '0.625rem 0.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 6,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow: isActive ? '0 4px 12px rgba(110,193,228,0.2)' : 'none'
                          }}
                          onMouseEnter={e => {
                            if (!isActive) {
                              e.currentTarget.style.borderColor = 'var(--primary)';
                              e.currentTarget.style.background = 'var(--primary-50)';
                            }
                          }}
                          onMouseLeave={e => {
                            if (!isActive) {
                              e.currentTarget.style.borderColor = 'var(--neutral-200)';
                              e.currentTarget.style.background = 'var(--white)';
                            }
                          }}
                        >
                          <span style={{ fontSize: 'var(--text-xl)' }}>{role.icon}</span>
                          <span style={{ fontSize: 12, fontWeight: 600 }}>{role.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Main fields (Grid) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
                  <div className="input-group">
                    <label className="input-label" htmlFor="fullName">Full Name</label>
                    <input
                      className="input-field"
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label" htmlFor="email">Email Address</label>
                    <input
                      className="input-field"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Additional fields (Grid) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
                  <div className="input-group">
                    <label className="input-label" htmlFor="primaryInterest">Primary Interest</label>
                    <select
                      className="input-field"
                      id="primaryInterest"
                      name="primaryInterest"
                      value={formData.primaryInterest}
                      onChange={handleInputChange}
                      style={{ appearance: 'none', background: 'var(--white) url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%237A7A7A\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E") no-repeat right 12px center', backgroundSize: '16px' }}
                    >
                      <option value="AI Career Assessment">AI Career Assessment</option>
                      <option value="Expert Career Coaching">Expert Career Coaching</option>
                      <option value="Services Marketplace (CV/Interviews)">Services Marketplace (CV/Interviews)</option>
                      <option value="Joining as a Career Coach">Joining as a Career Coach</option>
                      <option value="Partnering / Corporate Packages">Partnering / Corporate Packages</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label className="input-label" htmlFor="referralSource">How did you hear about us?</label>
                    <select
                      className="input-field"
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleInputChange}
                      style={{ appearance: 'none', background: 'var(--white) url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%237A7A7A\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E") no-repeat right 12px center', backgroundSize: '16px' }}
                    >
                      <option value="">Select option</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Twitter/X">Twitter/X</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Friend/Colleague">Friend / Colleague</option>
                      <option value="Online Forum / Community">Online Forum / Community</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div className="input-group">
                  <label className="input-label" htmlFor="message">Any specific goals or requests? (Optional)</label>
                  <textarea
                    className="input-field"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Tell us what you want to achieve or any features you'd love to see..."
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ resize: 'vertical', minHeight: 80 }}
                  />
                </div>

                {/* Consent Checkbox */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    style={{ marginTop: 4, cursor: 'pointer', accentColor: 'var(--primary)' }}
                  />
                  <label htmlFor="consent" style={{ fontSize: 13, color: 'var(--neutral-600)', cursor: 'pointer', lineHeight: 1.4 }}>
                    Yes, keep me in the loop! Send me occasional beta updates, career resources, and launch announcements. I can opt-out at any time.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary btn-lg"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    width: '100%',
                    marginTop: 'var(--space-2)',
                    opacity: submitting ? 0.8 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Securing Your Spot...
                    </>
                  ) : (
                    <>
                      Secure Early Access <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'var(--primary-50)', padding: '80px var(--space-8)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 400 }}>Stories of transformation</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="card" style={{ position: 'relative' }}>
                <div style={{ fontSize: 48, color: 'var(--primary-100)', fontFamily: 'Georgia', lineHeight: 1, marginBottom: 'var(--space-3)' }}>"</div>
                <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.8, marginBottom: 'var(--space-4)', fontStyle: 'italic' }}>{t.text}</p>
                <hr className="divider" />
                <div className="flex items-center gap-3">
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: 14, fontWeight: 600
                  }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)' }}>{t.name}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>{t.role}</div>
                  </div>
                  <div style={{ marginLeft: 'auto' }}><Stars count={t.rating} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #3D5242 0%, #5C6E5C 50%, #7A8D7A 100%)',
        padding: '100px var(--space-8)', textAlign: 'center'
      }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'white', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, marginBottom: 'var(--space-4)' }}>
          Ready to own your career?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 'var(--space-8)', maxWidth: 480, margin: '0 auto var(--space-8)' }}>
          Join thousands of professionals who've found clarity, confidence, and career momentum with Propela.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#join-waitlist" onClick={scrollToWaitlist} className="btn btn-inverted btn-lg">
            Request Early Access <ArrowRight size={18} />
          </a>
          <Link to="/coaches" className="btn btn-lg" style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)' }}>
            Browse Coaches
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--neutral-800)', padding: 'var(--space-10) var(--space-8)', color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div style={{ fontFamily: 'var(--font-serif)', color: 'var(--white)', fontSize: 'var(--text-lg)' }}>SEAS Propela Career Clinic</div>
          <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
            {['Privacy', 'Terms', 'Contact', 'Careers'].map(item => (
              <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{item}</a>
            ))}
          </div>
          <div>© 2026 SEAS Propela. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
