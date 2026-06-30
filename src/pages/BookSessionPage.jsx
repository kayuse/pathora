import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle, ChevronLeft, ChevronRight, Calendar, Video, ArrowRight } from 'lucide-react';

export default function BookSessionPage() {
  const navigate = useNavigate();
  const [isBooked, setIsBooked] = useState(false);
  const [selectedTime, setSelectedTime] = useState('01:00 PM');
  
  const handleBooking = () => {
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }}>
        {/* Navigation */}
        <div style={{ padding: 'var(--space-6) var(--space-8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 18, color: 'var(--neutral-800)', cursor: 'pointer' }} onClick={() => navigate('/')}>
            SEAS Pathora
          </div>
        </div>

        <div className="animate-in" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-8)' }}>
          <div className="card" style={{ width: '100%', maxWidth: 500, padding: 'var(--space-10)', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#E8F3EB', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-6)' }}>
              <CheckCircle size={24} />
            </div>
            
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500, marginBottom: 'var(--space-3)', color: 'var(--neutral-800)' }}>
              You're all set, Alex!
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.6, marginBottom: 'var(--space-8)' }}>
              Your career clarity session is officially booked. We've sent a calendar invite to your email.
            </p>
            
            <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', border: '1px solid var(--neutral-100)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', textAlign: 'left', marginBottom: 'var(--space-8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#D9D9D9', overflow: 'hidden' }}>
                  {/* Avatar placeholder */}
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Coach" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 0.5 }}>WITH CAREER COACH</div>
                  <div style={{ fontWeight: 600, color: 'var(--neutral-800)' }}>Dr. Elena Rostova</div>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  <Calendar size={16} color="var(--neutral-400)" style={{ marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>DATE & TIME</div>
                    <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--neutral-800)', lineHeight: 1.5 }}>
                      Thursday, Oct 24<br/>
                      10:00 AM - 11:00 AM PST
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  <Video size={16} color="var(--neutral-400)" style={{ marginTop: 2 }} />
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>MEETING LINK</div>
                    <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--primary)', lineHeight: 1.5, wordBreak: 'break-all' }}>
                      seaspathora.com/meet/er...
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="btn w-full" style={{ background: 'white', border: '1px solid var(--neutral-200)', color: 'var(--neutral-700)', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 11, fontWeight: 600 }}>
                <Calendar size={14} /> ADD TO CALENDAR
              </button>
            </div>
            
            <button className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)', padding: '0 32px', textTransform: 'uppercase', fontSize: 11, letterSpacing: 0.5 }} onClick={() => navigate('/dashboard')}>
              RETURN TO DASHBOARD
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <div style={{ padding: 'var(--space-6) var(--space-8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 18, color: 'var(--neutral-800)', cursor: 'pointer' }} onClick={() => navigate('/')}>
          SEAS Pathora
        </div>
        <button className="btn btn-ghost" style={{ padding: 4 }} onClick={() => navigate(-1)}>
          <X size={18} />
        </button>
      </div>

      <div className="animate-in" style={{ flex: 1, padding: 'var(--space-8)', maxWidth: 640, margin: '0 auto', width: '100%' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', background: 'white', padding: '6px 16px', borderRadius: 'var(--radius-full)', marginBottom: 'var(--space-6)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', border: '1px solid var(--neutral-100)' }}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Dr. Elena Rostova" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ textAlign: 'left' }}>
               <div style={{ fontSize: 8, fontWeight: 700, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 0.5 }}>BOOKING WITH</div>
               <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--neutral-800)' }}>Dr. Elena Rostova</div>
            </div>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 500, color: 'var(--neutral-800)', marginBottom: 'var(--space-3)' }}>
            Reserve Your Space
          </h1>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.6 }}>
            Take the next step in your professional journey. Please complete the<br/>details below to secure your session.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line connecting steps */}
          <div style={{ position: 'absolute', left: 15, top: 20, bottom: 40, width: 2, background: 'var(--neutral-200)', zIndex: 0 }} />

          {/* Step 1 */}
          <div style={{ display: 'flex', gap: 'var(--space-6)', marginBottom: 'var(--space-8)', position: 'relative', zIndex: 1 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#F2F7F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
              <CheckCircle size={16} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500, color: 'var(--neutral-800)' }}>1. Session Type</h3>
                <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-400)', cursor: 'pointer', letterSpacing: 0.5 }}>EDIT</span>
              </div>
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--neutral-100)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                   <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#F9F7F5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neutral-500)' }}>
                      <Video size={14} />
                   </div>
                   <div>
                      <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)' }}>Career Strategy Deep-Dive</div>
                      <div style={{ fontSize: 11, color: 'var(--neutral-500)' }}>60 Minutes • Video Call</div>
                   </div>
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 500, color: 'var(--neutral-800)' }}>$150</div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display: 'flex', gap: 'var(--space-6)', marginBottom: 'var(--space-8)', position: 'relative', zIndex: 1 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, fontSize: 12, fontWeight: 600 }}>
              2
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500, color: 'var(--neutral-800)', marginBottom: 'var(--space-4)' }}>2. Select Date & Time</h3>
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', display: 'flex', gap: 'var(--space-6)', border: '1px solid var(--neutral-100)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                
                {/* Calendar Side */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                    <ChevronLeft size={16} color="var(--neutral-400)" cursor="pointer" />
                    <span style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>October 2024</span>
                    <ChevronRight size={16} color="var(--neutral-800)" cursor="pointer" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: 10, fontWeight: 600, color: 'var(--neutral-400)', marginBottom: 'var(--space-2)' }}>
                    {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d}>{d}</div>)}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: 11, gap: 4 }}>
                    <div style={{ color: 'var(--neutral-300)' }}>29</div>
                    <div style={{ color: 'var(--neutral-300)' }}>30</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div style={{ background: 'var(--primary)', color: 'white', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                  </div>
                </div>
                
                {/* Time Side */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--neutral-500)', marginBottom: 'var(--space-4)' }}>Tuesday, October 8</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                    {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map(time => (
                      <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        style={{ 
                          padding: '8px 0', 
                          borderRadius: 'var(--radius-md)', 
                          border: `1.5px solid ${selectedTime === time ? 'var(--primary)' : 'var(--neutral-200)'}`, 
                          background: selectedTime === time ? '#F2F7F2' : 'white',
                          color: selectedTime === time ? 'var(--primary)' : 'var(--neutral-600)',
                          fontSize: 11, fontWeight: 600, cursor: 'pointer'
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: 'flex', gap: 'var(--space-6)', marginBottom: 'var(--space-8)', position: 'relative', zIndex: 1 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--neutral-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neutral-400)', flexShrink: 0, fontSize: 12, fontWeight: 600 }}>
              3
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500, color: 'var(--neutral-800)', marginBottom: 'var(--space-4)' }}>
                3. Preparation Notes <span style={{ fontSize: 11, color: 'var(--neutral-400)', fontWeight: 400 }}>(Optional)</span>
              </h3>
              <textarea 
                placeholder="What are your main goals for this session? Any specific topics you'd like to cover?"
                style={{ width: '100%', height: 100, background: 'white', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', fontSize: 'var(--text-sm)', outline: 'none', resize: 'none' }}
              />
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ display: 'flex', gap: 'var(--space-6)', position: 'relative', zIndex: 1 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--neutral-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neutral-400)', flexShrink: 0, fontSize: 12, fontWeight: 600 }}>
              4
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500, color: 'var(--neutral-800)', marginBottom: 'var(--space-4)' }}>
                4. Review & Confirm
              </h3>
              <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', border: '1px solid var(--neutral-100)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontSize: 11, color: 'var(--neutral-500)', fontWeight: 600 }}>Session</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--neutral-800)' }}>Career Strategy Deep-Dive</div>
                    <div style={{ fontSize: 10, color: 'var(--neutral-400)' }}>60 min</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-6)' }}>
                  <span style={{ fontSize: 11, color: 'var(--neutral-500)', fontWeight: 600 }}>Date & Time</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--neutral-800)' }}>Tue, Oct 8, 2024</div>
                    <div style={{ fontSize: 10, color: 'var(--neutral-400)' }}>{selectedTime} EST</div>
                  </div>
                </div>
                
                <div style={{ height: 1, background: 'var(--neutral-100)', marginBottom: 'var(--space-4)' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--neutral-800)' }}>Total</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500, color: 'var(--neutral-800)' }}>$150.00</span>
                </div>
                
                <button className="btn btn-primary w-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 'var(--radius-md)' }} onClick={handleBooking}>
                  CONFIRM & PAY
                </button>
                <p style={{ fontSize: 9, color: 'var(--neutral-400)', textAlign: 'center', marginTop: 'var(--space-3)' }}>
                  Payments are secure and encrypted. Cancellation policy applies.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
