import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Upload, CheckCircle, Rocket, Compass, Anchor, Moon, Zap, GitBranch, Leaf, Map, Activity, Target, Sparkles, Send, X, AlertTriangle, ShoppingCart, CreditCard } from 'lucide-react';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  
  // Form states
  const [path, setPath] = useState(''); // 'launcher' or 'navigator'
  const [dragging, setDragging] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [careerState, setCareerState] = useState('');
  const [chatInput, setChatInput] = useState('');
  
  // Adaptive Assessment states
  const [assessmentStyle, setAssessmentStyle] = useState('');
  const [collaboration, setCollaboration] = useState(50);

  // Cart State
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    if (!cart.find(i => i.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  // Handle Assessment taking simulation
  const handleCompleteAssessment = () => {
    setStep(8); // Loading
    setTimeout(() => {
      setStep(9); // Final report
    }, 2000);
  };

  // Render header based on step
  const renderHeader = () => {
    if (step === 0 || step === 9) {
      return (
        <div style={{
          background: 'transparent',
          padding: 'var(--space-6) var(--space-8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 18, color: 'var(--neutral-800)' }}>
            SEAS Pathora
          </div>
          {step === 9 && (
            <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 btn btn-ghost btn-sm" style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              <X size={14} /> Save & Exit
            </button>
          )}
        </div>
      );
    }
    
    return (
      <div style={{ padding: 'var(--space-6) var(--space-8)' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 18, color: 'var(--neutral-800)' }}>
          SEAS Pathora
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Subtle radial background matching the design */}
      <div style={{ position: 'fixed', top: '-10%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(122, 141, 122, 0.08) 0%, rgba(255,255,255,0) 70%)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '-10%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(232, 111, 81, 0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: 0, pointerEvents: 'none' }} />
      
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {renderHeader()}
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'var(--space-8)', paddingBottom: 'var(--space-12)' }}>
            
          {/* Step 0: Welcome */}
          {step === 0 && (
            <div className="animate-in card" style={{ width: '100%', maxWidth: 580, padding: 'var(--space-10)', textAlign: 'center', marginTop: '4vh' }}>
              <div style={{ width: 72, height: 72, background: 'var(--primary)', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-6)', color: 'white' }}>
                <Sparkles size={32} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500, marginBottom: 'var(--space-3)' }}>Welcome to your Career Clinic</h2>
              <p style={{ marginBottom: 'var(--space-8)', lineHeight: 1.8, color: 'var(--neutral-500)' }}>
                Let's understand where you are in your career journey. This short onboarding will help us build your professional snapshot and connect you with the right resources.
              </p>
              <button className="btn btn-primary btn-lg w-full" onClick={() => setStep(1)} style={{ display: 'flex', justifyContent: 'center' }}>
                Get Started <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* Step 1: Path Selection */}
          {step === 1 && (
            <div className="animate-in" style={{ width: '100%', maxWidth: 720, textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--neutral-500)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>STEP 1 OF 4</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 500, marginBottom: 'var(--space-4)', color: 'var(--neutral-800)' }}>
                Which stage best describes<br/>you right now?
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', maxWidth: 480, margin: '0 auto var(--space-10)', lineHeight: 1.6 }}>
                Select the path that aligns with your current professional journey to tailor your experience.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginBottom: 'var(--space-10)', textAlign: 'left' }}>
                <div 
                  onClick={() => setPath('launcher')}
                  style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)', cursor: 'pointer', border: `1.5px solid ${path === 'launcher' ? 'var(--primary)' : 'transparent'}`, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', position: 'relative', transition: 'all 0.2s' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#E8F3EB', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
                    <Rocket size={20} />
                  </div>
                  <div style={{ position: 'absolute', top: 'var(--space-8)', right: 'var(--space-8)', width: 20, height: 20, borderRadius: '50%', border: `1.5px solid ${path === 'launcher' ? 'var(--primary)' : 'var(--neutral-300)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {path === 'launcher' && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--primary)' }} />}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500, marginBottom: 'var(--space-3)', color: 'var(--neutral-800)' }}>Launcher</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.6 }}>"I'm entering or building my career."</p>
                </div>
                
                <div 
                  onClick={() => setPath('navigator')}
                  style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)', cursor: 'pointer', border: `1.5px solid ${path === 'navigator' ? 'var(--primary)' : 'transparent'}`, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', position: 'relative', transition: 'all 0.2s' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#FCEAE6', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
                    <Compass size={20} />
                  </div>
                  <div style={{ position: 'absolute', top: 'var(--space-8)', right: 'var(--space-8)', width: 20, height: 20, borderRadius: '50%', border: `1.5px solid ${path === 'navigator' ? 'var(--primary)' : 'var(--neutral-300)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {path === 'navigator' && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--primary)' }} />}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500, marginBottom: 'var(--space-3)', color: 'var(--neutral-800)' }}>Navigator</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.6 }}>"I'm already working but want growth, clarity, or transition."</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 var(--space-2)' }}>
                <button className="btn btn-ghost" onClick={() => setStep(0)} style={{ color: 'var(--neutral-500)' }}><ArrowLeft size={16} style={{ marginRight: 6 }}/> Back</button>
                <button className="btn btn-primary" disabled={!path} onClick={() => setStep(2)}>Continue <ArrowRight size={16} style={{ marginLeft: 6 }}/></button>
              </div>
            </div>
          )}

          {/* Step 2: Signup & Login */}
          {step === 2 && (
            <div className="animate-in" style={{ width: '100%', maxWidth: 440, marginTop: '4vh' }}>
              <div className="card" style={{ padding: 'var(--space-10)', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, color: 'var(--neutral-800)', marginBottom: 'var(--space-4)' }}>SEAS Pathora</h3>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 500, marginBottom: 'var(--space-4)', color: 'var(--neutral-800)', lineHeight: 1.3 }}>
                  Continue your career<br/>journey.
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', marginBottom: 'var(--space-8)' }}>
                  Log in or sign up to access personalized professional guidance and insights.
                </p>
                
                <button className="btn w-full mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#F2F0EB', color: 'var(--neutral-800)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" style={{ width: 18, height: 18 }} />
                  Continue with Google
                </button>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', margin: 'var(--space-6) 0' }}>
                  <div style={{ flex: 1, height: 1, background: 'var(--neutral-200)' }} />
                  <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 1 }}>OR</span>
                  <div style={{ flex: 1, height: 1, background: 'var(--neutral-200)' }} />
                </div>
                
                <button className="btn btn-primary w-full" onClick={() => setStep(3)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  Continue with Email
                </button>
                
                <p style={{ fontSize: 10, color: 'var(--neutral-400)', marginTop: 'var(--space-6)', lineHeight: 1.5 }}>
                  By continuing, you agree to our <span style={{ textDecoration: 'underline' }}>Terms of Service</span> and <span style={{ textDecoration: 'underline' }}>Privacy Policy</span>.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Account Setup */}
          {step === 3 && (
            <div className="animate-in" style={{ width: '100%', maxWidth: 440, marginTop: '2vh' }}>
              <div className="card" style={{ padding: 'var(--space-8)', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--neutral-500)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>ACCOUNT SETUP</div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 500, marginBottom: 'var(--space-2)', color: 'var(--neutral-800)' }}>
                    Let's personalize your<br/>path.
                  </h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.5 }}>
                    Provide a few details to tailor your SEAS Pathora experience.
                  </p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 10, fontWeight: 600, color: 'var(--neutral-600)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>FULL NAME</label>
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </div>
                      <input type="text" placeholder="Jane Doe" style={{ width: '100%', height: 44, background: '#F9F7F5', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-md)', paddingLeft: 36, fontSize: 'var(--text-sm)', outline: 'none' }} />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: 10, fontWeight: 600, color: 'var(--neutral-600)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>EMAIL</label>
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      </div>
                      <input type="email" placeholder="jane.doe@example.com" style={{ width: '100%', height: 44, background: '#F9F7F5', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-md)', paddingLeft: 36, fontSize: 'var(--text-sm)', outline: 'none' }} />
                    </div>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: 10, fontWeight: 600, color: 'var(--neutral-600)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>PASSWORD</label>
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      </div>
                      <input type="password" placeholder="••••••••" style={{ width: '100%', height: 44, background: '#F9F7F5', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-md)', paddingLeft: 36, fontSize: 'var(--text-sm)', outline: 'none' }} />
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 10, fontWeight: 600, color: 'var(--neutral-600)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>COUNTRY</label>
                      <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </div>
                        <select style={{ width: '100%', height: 44, background: '#F9F7F5', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-md)', paddingLeft: 36, fontSize: 'var(--text-sm)', outline: 'none', appearance: 'none', color: 'var(--neutral-500)' }}>
                          <option>Select Country</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 10, fontWeight: 600, color: 'var(--neutral-600)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>CURRENT STATUS</label>
                      <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        </div>
                        <select style={{ width: '100%', height: 44, background: '#F9F7F5', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-md)', paddingLeft: 36, fontSize: 'var(--text-sm)', outline: 'none', appearance: 'none', color: 'var(--neutral-500)' }}>
                          <option>Select Status</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="btn btn-primary w-full mt-6" onClick={() => setStep(4)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                  Continue <ArrowRight size={14} />
                </button>
                
                <p style={{ fontSize: 9, color: 'var(--neutral-400)', marginTop: 'var(--space-4)', lineHeight: 1.5, textAlign: 'center' }}>
                  By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          )}

          {/* Step 4: CV Upload */}
          {step === 4 && (
            <div className="animate-in" style={{ width: '100%', maxWidth: 640 }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--neutral-500)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>STEP 2 OF 4</div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 500, marginBottom: 'var(--space-4)', color: 'var(--neutral-800)' }}>
                  Let's understand your<br/>professional story.
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
                  Upload your resume or provide a link to your professional profile. Our AI softly analyzes your career history, identifying hidden skills and potential pathways you might not have considered.
                </p>
              </div>
              
              <div
                onDragOver={e => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={e => { e.preventDefault(); setDragging(false); setUploaded(true); }}
                style={{
                  border: `1.5px dashed ${dragging ? 'var(--primary)' : uploaded ? 'var(--primary)' : 'var(--neutral-200)'}`,
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-10)',
                  textAlign: 'center',
                  background: dragging ? 'var(--primary-50)' : uploaded ? 'var(--primary-50)' : '#F9F9F8',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  marginBottom: 'var(--space-6)'
                }}
                onClick={() => setUploaded(true)}
              >
                {uploaded ? (
                  <>
                    <CheckCircle size={32} color="var(--primary)" style={{ margin: '0 auto var(--space-3)' }} />
                    <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: 'var(--text-sm)' }}>resume.pdf uploaded!</p>
                  </>
                ) : (
                  <>
                    <div style={{ width: 40, height: 40, background: 'white', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                      <Upload size={20} color="var(--primary)" />
                    </div>
                    <p style={{ fontWeight: 500, color: 'var(--neutral-800)', fontSize: 'var(--text-base)', marginBottom: 4 }}>Drag & Drop your CV</p>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)' }}>or click to browse your files (PDF, DOCX)</p>
                    <button className="btn btn-outlined btn-sm" style={{ marginTop: 'var(--space-4)', background: 'white' }}>Browse Files</button>
                  </>
                )}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', margin: 'var(--space-6) 0' }}>
                <div style={{ flex: 1, height: 1, background: 'var(--neutral-200)' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 1 }}>OR</span>
                <div style={{ flex: 1, height: 1, background: 'var(--neutral-200)' }} />
              </div>
              
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: 'var(--neutral-500)', marginBottom: 'var(--space-2)' }}>LinkedIn Profile URL (Optional)</label>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </div>
                  <input type="text" placeholder="https://linkedin.com/in/yourprofile" style={{ width: '100%', height: 48, background: 'white', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-md)', paddingLeft: 40, fontSize: 'var(--text-sm)', outline: 'none' }} />
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="btn btn-primary btn-lg" style={{ padding: '0 40px' }} onClick={() => setStep(5)}>Continue</button>
              </div>
            </div>
          )}

          {/* Step 5: Current State Check-In */}
          {step === 5 && (
            <div className="animate-in" style={{ width: '100%', maxWidth: 720, textAlign: 'center' }}>
              {/* Stepper Graphic */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 'var(--space-8)' }}>
                {[1,2,3,4].map(num => (
                  <React.Fragment key={num}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: num < 3 ? 'var(--primary)' : num === 3 ? 'var(--neutral-400)' : 'var(--neutral-200)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600 }}>
                      {num < 3 ? <CheckCircle size={12} /> : num}
                    </div>
                    {num < 4 && <div style={{ width: 40, height: 1, background: num < 3 ? 'var(--primary)' : 'var(--neutral-200)' }} />}
                  </React.Fragment>
                ))}
              </div>
              
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500, marginBottom: 'var(--space-4)', color: 'var(--neutral-800)' }}>
                How would you describe your current career<br/>situation?
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', maxWidth: 500, margin: '0 auto var(--space-8)', lineHeight: 1.6 }}>
                Take a deep breath. There are no right or wrong answers here, only your current reality. Acknowledging where you are is the first step to clarity.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-10)', textAlign: 'left' }}>
                {[
                  { id: 'unclear', icon: Compass, color: 'var(--primary)', bg: '#E8F3EB', title: 'Motivated but unclear', desc: "You have energy and drive, but you're not sure where to direct it." },
                  { id: 'stuck', icon: Anchor, color: 'var(--neutral-500)', bg: 'var(--neutral-100)', title: 'Stuck', desc: "You feel trapped in your current role or path with limited options." },
                  { id: 'burnedout', icon: Moon, color: '#A98E9A', bg: '#F4ECEF', title: 'Burned out', desc: "Exhausted and needing a restorative shift before pushing forward." },
                  { id: 'ready', icon: Rocket, color: 'var(--secondary)', bg: '#FCEAE6', title: 'Ambitious and ready', desc: "Eager to accelerate growth and actively seeking the next challenge." },
                  { id: 'switch', icon: GitBranch, color: '#889B88', bg: '#EBF0EB', title: 'Trying to switch', desc: "Looking to pivot into a new industry, role, or completely different path." },
                  { id: 'starting', icon: Leaf, color: '#7A8D7A', bg: '#E8F3EB', title: 'Just starting out', desc: "Early in your career and looking to build a strong foundational direction." },
                ].map(opt => (
                  <div 
                    key={opt.id}
                    onClick={() => setCareerState(opt.id)}
                    style={{ background: careerState === opt.id ? '#F2F7F2' : 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', cursor: 'pointer', border: `1.5px solid ${careerState === opt.id ? 'var(--primary)' : 'transparent'}`, boxShadow: '0 2px 10px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', transition: 'all 0.2s', position: 'relative' }}>
                    {careerState === opt.id && (
                      <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', color: 'var(--primary)' }}>
                        <CheckCircle size={16} />
                      </div>
                    )}
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: opt.bg, color: opt.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <opt.icon size={14} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)', marginBottom: 2 }}>{opt.title}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', lineHeight: 1.5 }}>{opt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 var(--space-2)' }}>
                <button className="btn btn-ghost" onClick={() => setStep(4)} style={{ color: 'var(--neutral-500)' }}><ArrowLeft size={16} style={{ marginRight: 6 }}/> Back</button>
                <button className="btn btn-primary btn-lg" style={{ padding: '0 24px' }} disabled={!careerState} onClick={() => setStep(6)}>Continue Journey <ArrowRight size={16} style={{ marginLeft: 6 }}/></button>
              </div>
            </div>
          )}

          {/* Step 6: AI Assessment Recommendation */}
          {step === 6 && (
            <div className="animate-in" style={{ width: '100%', maxWidth: 760 }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#E8F3EB', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)' }}>
                  <Sparkles size={16} />
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 500, marginBottom: 'var(--space-4)', color: 'var(--neutral-800)' }}>
                  We've selected the best<br/>assessments for your situation.
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
                  Based on the context you shared, these tools will provide the most clarity for your next steps.
                </p>
              </div>
              
              {/* Top Recommendation */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', display: 'flex', marginBottom: 'var(--space-10)' }}>
                <div style={{ flex: 1.2, padding: 'var(--space-8)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                    <div style={{ background: '#7A8D7A', color: 'white', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: 10, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>TOP RECOMMENDATION</div>
                    <div style={{ fontSize: 12, color: 'var(--neutral-500)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}><Activity size={12} /> 15 Min</div>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 500, marginBottom: 'var(--space-5)', color: 'var(--neutral-800)' }}>Career Transition Readiness</h3>
                  
                  <div style={{ background: '#F9F7F5', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', marginBottom: 'var(--space-6)', borderLeft: '3px solid #A98E9A' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 'var(--space-2)', color: '#A98E9A', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      <Target size={12} /> WHY THIS FITS YOU
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-700)', lineHeight: 1.6 }}>
                      "You appear to be considering a major professional transition. This assessment will help map your transferable skills and gauge your emotional readiness before you commit to a new path."
                    </p>
                  </div>
                  
                  <button className="btn btn-primary" onClick={() => setStep(7)}>Start Recommended Assessment <ArrowRight size={14} style={{ marginLeft: 6 }}/></button>
                </div>
                
                <div style={{ flex: 0.8, background: '#F5F7F5', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {/* Abstract circles */}
                  <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', border: '1px solid rgba(122, 141, 122, 0.2)', right: -50, top: '10%' }} />
                  <div style={{ position: 'absolute', width: 160, height: 160, borderRadius: '50%', border: '1px solid rgba(232, 111, 81, 0.1)', right: 80, bottom: '20%' }} />
                  
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', zIndex: 1 }}>
                    <Map size={24} />
                  </div>
                </div>
              </div>
              
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 500, color: 'var(--neutral-800)' }}>Other assessments to consider</h4>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 'var(--radius-md)', background: '#E8F3EB', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Leaf size={16} />
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-500)', textTransform: 'uppercase' }}>10 MIN</div>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)', marginBottom: 'var(--space-2)' }}>Burnout & Energy Index</div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', lineHeight: 1.5, marginBottom: 'var(--space-4)' }}>Evaluate your current professional exhaustion levels to determine if rest or realignment is needed.</p>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--neutral-500)', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>Explore <ArrowRight size={10} /></div>
                </div>
                
                <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 'var(--radius-md)', background: '#FCEAE6', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Target size={16} />
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-500)', textTransform: 'uppercase' }}>20 MIN</div>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)', marginBottom: 'var(--space-2)' }}>Core Values Alignment</div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)', lineHeight: 1.5, marginBottom: 'var(--space-4)' }}>Map your fundamental personal values against your current organizational culture.</p>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--neutral-500)', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>Explore <ArrowRight size={10} /></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 7: Adaptive Assessment Experience */}
          {step === 7 && (
            <div className="animate-in" style={{ width: '100%', maxWidth: 760, background: 'white', borderRadius: 'var(--radius-xl)', boxShadow: '0 4px 30px rgba(0,0,0,0.03)', padding: 'var(--space-10)', border: '1px solid var(--neutral-100)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-10)' }}>
                <button className="btn btn-ghost" style={{ padding: 4 }}><ArrowLeft size={18} /></button>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                   <div style={{ width: 120, height: 3, background: 'var(--neutral-200)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                      <div style={{ width: '37%', height: '100%', background: 'var(--primary)' }} />
                   </div>
                   <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--neutral-500)', letterSpacing: 0.5, textTransform: 'uppercase' }}>STEP 3 OF 8</span>
                </div>
                <button className="btn btn-ghost" style={{ padding: 4 }} onClick={() => setStep(6)}><X size={18} /></button>
              </div>

              <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500, marginBottom: 'var(--space-4)', color: 'var(--neutral-800)' }}>
                  How do you prefer to tackle a new<br/>project?
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
                  There's no right way. We're just looking for your natural rhythm<br/>when facing a blank canvas.
                </p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
                <div 
                  onClick={() => setAssessmentStyle('map')}
                  style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', cursor: 'pointer', border: `1.5px solid ${assessmentStyle === 'map' ? 'var(--primary)' : 'var(--neutral-200)'}`, position: 'relative', transition: 'all 0.2s' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#7A8D7A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                    <Map size={16} />
                  </div>
                  {assessmentStyle === 'map' && (
                    <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', color: 'var(--primary)' }}>
                      <CheckCircle size={18} />
                    </div>
                  )}
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500, marginBottom: 'var(--space-2)', color: 'var(--neutral-800)' }}>Map it out</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.6 }}>I need a clear structure, milestones, and a defined end goal before I start building.</p>
                </div>
                
                <div 
                  onClick={() => setAssessmentStyle('dive')}
                  style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', cursor: 'pointer', border: `1.5px solid ${assessmentStyle === 'dive' ? 'var(--primary)' : 'var(--neutral-200)'}`, position: 'relative', transition: 'all 0.2s' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--neutral-100)', color: 'var(--neutral-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
                    <Compass size={16} />
                  </div>
                  {assessmentStyle === 'dive' && (
                    <div style={{ position: 'absolute', top: 'var(--space-4)', right: 'var(--space-4)', color: 'var(--primary)' }}>
                      <CheckCircle size={18} />
                    </div>
                  )}
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500, marginBottom: 'var(--space-2)', color: 'var(--neutral-800)' }}>Dive right in</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.6 }}>I prefer to start experimenting immediately. The path reveals itself as I work.</p>
                </div>
              </div>
              
              <div style={{ background: '#F9F7F5', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)', marginBottom: 'var(--space-10)' }}>
                 <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-700)', marginBottom: 'var(--space-6)' }}>When doing this, I prefer working...</p>
                 <div style={{ position: 'relative', height: 20, display: 'flex', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                    <div style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'var(--neutral-200)', borderRadius: 2 }} />
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={collaboration} 
                      onChange={(e) => setCollaboration(e.target.value)} 
                      style={{ width: '100%', zIndex: 2, accentColor: 'var(--primary)' }} 
                    />
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 600, color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                   <span>Mostly Solo</span>
                   <span>Highly Collaborative</span>
                 </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', fontWeight: 500, cursor: 'pointer' }}>Skip for now</span>
                <button className="btn btn-primary btn-lg" style={{ padding: '0 24px' }} disabled={!assessmentStyle} onClick={handleCompleteAssessment}>Continue <ArrowRight size={14} style={{ marginLeft: 6 }}/></button>
              </div>
              
            </div>
          )}

          {/* Step 8: Loading Assessment */}
          {step === 8 && (
            <div className="animate-in" style={{ width: '100%', maxWidth: 400, textAlign: 'center', margin: 'auto' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', margin: '0 auto var(--space-6)' }}>
                <Sparkles className="animate-pulse" size={24} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 500, marginBottom: 'var(--space-2)', color: 'var(--neutral-800)' }}>Analyzing your responses...</h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)' }}>Building your customized career profile</p>
            </div>
          )}

          {/* Step 9: AI Career Assessment Review */}
          {step === 9 && (
            <div className="animate-in" style={{ width: '100%', maxWidth: 860 }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#E8F3EB', color: '#4A614A', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: 10, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 'var(--space-6)' }}>
                  <Sparkles size={12} /> AI CAREER ASSESSMENT COMPLETE
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 400, color: 'var(--neutral-800)', lineHeight: 1.2, marginBottom: 'var(--space-4)' }}>
                  You are a<br/>
                  <span style={{ fontStyle: 'italic', fontWeight: 600, color: 'var(--primary)' }}>Strategic Growth Builder</span>
                </h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
                  Your responses reveal a profound capacity for connecting high-level vision with actionable structure. You thrive not just in managing teams, but in designing environments where collective potential is fully realized.
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: 'var(--space-6)', marginBottom: 'var(--space-10)', alignItems: 'stretch' }}>
                <div style={{ flex: 1.5, background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'var(--space-4)', color: 'var(--neutral-800)' }}>
                    <Activity size={18} color="var(--primary)" />
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 500 }}>Career Alignment Insight</h3>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)', lineHeight: 1.6, marginBottom: 'var(--space-6)' }}>
                    Currently, your skills in <strong>cross-functional strategy</strong> are highly developed, but your daily reality seems tethered to operational firefighting. This misalignment is the root of your recent restlessness. The AI analysis suggests your ideal role involves more whiteboard planning and less immediate crisis management.
                  </p>
                  <div style={{ background: 'var(--neutral-50)', padding: 'var(--space-4)', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-500)', textTransform: 'uppercase', marginBottom: 'var(--space-3)', letterSpacing: 0.5 }}>CORE STRENGTHS DETECTED</div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <span className="badge" style={{ background: 'white', border: '1px solid var(--neutral-200)' }}>Systems Thinking</span>
                      <span className="badge" style={{ background: 'white', border: '1px solid var(--neutral-200)' }}>Product-led leadership</span>
                      <span className="badge" style={{ background: 'white', border: '1px solid var(--neutral-200)' }}>Future-Casting</span>
                    </div>
                  </div>
                </div>
                
                <div style={{ flex: 1, background: '#FCF7F7', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', border: '1px solid #F2E3E3' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'var(--space-4)', color: '#A06D6D' }}>
                    <AlertTriangle size={18} />
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 500 }}>Risk Indicators</h3>
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-600)', lineHeight: 1.5, marginBottom: 'var(--space-5)' }}>
                    Based on your pace and satisfaction scores, we detected early signs of specific friction points.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', borderLeft: '3px solid #E86F51', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                          <Zap size={12} color="#E86F51" />
                          <span style={{ fontSize: 10, fontWeight: 700, color: '#E86F51', textTransform: 'uppercase', letterSpacing: 0.5 }}>Moderate Burnout Risk</span>
                        </div>
                        <p style={{ fontSize: 11, color: 'var(--neutral-500)', lineHeight: 1.4 }}>High output masking emotional fatigue.</p>
                    </div>
                    
                    <div style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', borderLeft: '3px solid #9BA4B5', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                          <ArrowRight size={12} color="#9BA4B5" />
                          <span style={{ fontSize: 10, fontWeight: 700, color: '#9BA4B5', textTransform: 'uppercase', letterSpacing: 0.5 }}>Skill Stagnation</span>
                        </div>
                        <p style={{ fontSize: 11, color: 'var(--neutral-500)', lineHeight: 1.4 }}>Undervaluing strategic capabilities.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500, color: 'var(--neutral-800)' }}>Suggested Horizons</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-12)' }}>
                {[
                  { title: 'Head of Strategy', align: '65%', desc: 'Leverage your systems thinking to guide company-wide initiatives rather than team-level execution.', imgBg: '#F3D9C6' },
                  { title: 'Product Architect', align: '70%', desc: 'Focus entirely on designing the blueprint of user experiences and underlying product infrastructure.', imgBg: '#D1E0DB' },
                  { title: 'Org Design Consultant', align: '72%', desc: 'Step outside the corporate structure to advise multiple organizations on building healthy, effective teams.', imgBg: '#85A394' }
                ].map((hz, i) => (
                  <div key={i} style={{ background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                    <div style={{ height: 120, background: hz.imgBg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Simulating images with a semi-transparent block */}
                      <div style={{ width: '80%', height: '80%', background: 'rgba(255,255,255,0.4)', borderRadius: 'var(--radius-sm)' }} />
                    </div>
                    <div style={{ padding: 'var(--space-5)' }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--neutral-500)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 'var(--space-2)' }}>{hz.align} ALIGNMENT</div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 600, color: 'var(--neutral-800)', marginBottom: 'var(--space-2)' }}>{hz.title}</h4>
                      <p style={{ fontSize: 11, color: 'var(--neutral-500)', lineHeight: 1.5 }}>{hz.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Personalized Growth Toolkit */}
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500, color: 'var(--neutral-800)', marginBottom: 'var(--space-2)' }}>Your Personalized Growth Toolkit</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)' }}>Based on your assessment, we recommend these specific resources to accelerate your journey.</p>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
                {/* Recommended Service */}
                <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid var(--neutral-100)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'var(--space-4)' }}>
                    <div style={{ padding: '4px 8px', background: '#E8F3EB', color: '#7A8D7A', borderRadius: 'var(--radius-sm)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase' }}>RECOMMENDED SERVICE</div>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, color: 'var(--neutral-800)', marginBottom: 'var(--space-2)' }}>CV Rewrite & Optimisation</h4>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.5, flex: 1, marginBottom: 'var(--space-4)' }}>A comprehensive overhaul of your curriculum vitae to highlight your strategic skills and align with Head of Strategy roles.</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--neutral-100)', paddingTop: 'var(--space-4)' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, color: 'var(--neutral-800)' }}>$149</span>
                    <button className={cart.find(i => i.id === 's1') ? "btn btn-outlined btn-sm" : "btn btn-primary btn-sm"} onClick={() => addToCart({ id: 's1', type: 'service', name: 'CV Rewrite', price: 149 })}>
                      {cart.find(i => i.id === 's1') ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>

                {/* Recommended Coach */}
                <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid var(--neutral-100)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'var(--space-4)' }}>
                    <div style={{ padding: '4px 8px', background: '#FCEAE6', color: '#E86F51', borderRadius: 'var(--radius-sm)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase' }}>EXPERT MATCH</div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }} alt="Coach" />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 600, color: 'var(--neutral-800)' }}>Dr. Elena Rostova</h4>
                      <div style={{ fontSize: 11, color: 'var(--neutral-500)' }}>Career Transition Specialist</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.5, flex: 1, marginBottom: 'var(--space-4)' }}>Elena specializes in helping product leaders transition into strategy roles safely without burnout.</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--neutral-100)', paddingTop: 'var(--space-4)' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 600, color: 'var(--neutral-800)' }}>$150 <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--neutral-400)', fontFamily: 'var(--font-sans)' }}>/ session</span></span>
                    <button className={cart.find(i => i.id === 'c1') ? "btn btn-outlined btn-sm" : "btn btn-primary btn-sm"} onClick={() => addToCart({ id: 'c1', type: 'coach', name: 'Dr. Elena Rostova - Session', price: 150 })}>
                      {cart.find(i => i.id === 'c1') ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* AI Chat Box */}
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', maxWidth: 700, margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'var(--space-6)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={16} />
                  </div>
                  <div>
                      <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>Pathora AI Guide</div>
                      <div style={{ fontSize: 10, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 0.5 }}>READY TO DISCUSS YOUR RESULTS</div>
                  </div>
                </div>
                
                <div style={{ background: 'var(--neutral-50)', padding: 'var(--space-4)', borderRadius: 'var(--radius-lg)', borderTopLeftRadius: 0, maxWidth: '85%', marginBottom: 'var(--space-4)' }}>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-700)', lineHeight: 1.5 }}>
                    I'm here to help you unpack these insights. What parts of the "Strategic Growth Builder" profile resonate with you, or where do you feel I might have missed the mark?
                  </p>
                </div>
                
                <div style={{ display: 'inline-block', background: 'white', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-full)', padding: '8px 16px', fontSize: 11, color: 'var(--neutral-600)', marginBottom: 'var(--space-4)', cursor: 'pointer' }}>
                  Why did you recommend 'Head of Strategy'? ↗
                </div>
                
                <div style={{ position: 'relative', marginBottom: 'var(--space-6)' }}>
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    placeholder="Ask your AI Guide..." 
                    style={{ width: '100%', height: 48, background: 'white', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-full)', paddingLeft: 20, paddingRight: 48, fontSize: 'var(--text-sm)', outline: 'none' }} 
                  />
                  <button style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                    <Send size={14} />
                  </button>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)' }}>
                  <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Continue to Dashboard</button>
                  <button className="btn btn-outlined" style={{ background: 'white' }} onClick={() => navigate('/coaches')}>Explore Coaches</button>
                  <button className="btn btn-outlined" style={{ background: 'white' }} onClick={() => navigate('/services')}>Explore Services</button>
                </div>
              </div>
              
            </div>
          )}

        </div>
      </div>
      
      {/* Floating Cart Button in Step 9 */}
      {step === 9 && cart.length > 0 && (
        <div className="animate-in" style={{ position: 'fixed', bottom: 40, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 100 }}>
          <button className="btn btn-primary btn-lg" style={{ padding: '12px 32px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', gap: 12 }} onClick={() => setStep(10)}>
            <ShoppingCart size={18} />
            <span style={{ fontWeight: 600 }}>Checkout {cart.length} item{cart.length > 1 ? 's' : ''}</span>
            <span style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', paddingLeft: 12, marginLeft: 4 }}>${cart.reduce((sum, i) => sum + i.price, 0)}</span>
          </button>
        </div>
      )}

      {/* Step 10: Checkout */}
      {step === 10 && (
        <div style={{ position: 'fixed', inset: 0, background: 'var(--cream)', zIndex: 200, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: 'var(--space-6) var(--space-8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--neutral-100)', background: 'white' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 18, color: 'var(--neutral-800)' }}>
              SEAS Pathora
            </div>
            <button className="btn btn-ghost" style={{ padding: 4 }} onClick={() => setStep(9)}><X size={20} /></button>
          </div>
          
          <div style={{ flex: 1, padding: 'var(--space-10) var(--space-8)', display: 'flex', justifyContent: 'center', overflowY: 'auto' }}>
            <div style={{ width: '100%', maxWidth: 500 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 500, marginBottom: 'var(--space-8)', color: 'var(--neutral-800)' }}>Secure Checkout</h2>
              
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', border: '1px solid var(--neutral-100)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', marginBottom: 'var(--space-8)' }}>
                <h3 style={{ fontSize: 11, fontWeight: 700, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 'var(--space-4)' }}>ORDER SUMMARY</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {cart.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'var(--neutral-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neutral-500)' }}>
                           <ShoppingCart size={14} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--neutral-800)', fontSize: 'var(--text-sm)' }}>{item.name}</div>
                          <div style={{ fontSize: 10, color: 'var(--neutral-400)', textTransform: 'uppercase' }}>{item.type}</div>
                        </div>
                      </div>
                      <div style={{ fontWeight: 600, color: 'var(--neutral-800)' }}>${item.price}</div>
                    </div>
                  ))}
                </div>
                
                <div style={{ height: 1, background: 'var(--neutral-100)', margin: 'var(--space-4) 0' }} />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 600, color: 'var(--neutral-800)' }}>Total</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 600, color: 'var(--primary)' }}>${cart.reduce((sum, i) => sum + i.price, 0)}</div>
                </div>
              </div>
              
              <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', border: '1px solid var(--neutral-100)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', marginBottom: 'var(--space-8)' }}>
                <h3 style={{ fontSize: 11, fontWeight: 700, color: 'var(--neutral-400)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 'var(--space-4)' }}>PAYMENT METHOD</h3>
                <div style={{ position: 'relative', marginBottom: 'var(--space-4)' }}>
                  <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--neutral-400)' }}>
                    <CreditCard size={18} />
                  </div>
                  <input type="text" placeholder="Card Number" style={{ width: '100%', height: 48, background: '#F9F7F5', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-md)', paddingLeft: 40, fontSize: 'var(--text-sm)', outline: 'none' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <input type="text" placeholder="MM / YY" style={{ width: '100%', height: 48, background: '#F9F7F5', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-md)', paddingLeft: 16, fontSize: 'var(--text-sm)', outline: 'none' }} />
                  <input type="text" placeholder="CVC" style={{ width: '100%', height: 48, background: '#F9F7F5', border: '1px solid var(--neutral-200)', borderRadius: 'var(--radius-md)', paddingLeft: 16, fontSize: 'var(--text-sm)', outline: 'none' }} />
                </div>
              </div>
              
              <button className="btn btn-primary w-full" style={{ borderRadius: 'var(--radius-full)', padding: '14px', fontSize: 14, display: 'flex', justifyContent: 'center', gap: 8 }} onClick={() => setStep(11)}>
                Pay ${cart.reduce((sum, i) => sum + i.price, 0)} & Complete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 11: Success */}
      {step === 11 && (
        <div style={{ position: 'fixed', inset: 0, background: 'var(--primary)', zIndex: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>
          <div className="animate-in" style={{ padding: 'var(--space-8)', maxWidth: 400 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-6)' }}>
              <CheckCircle size={40} color="white" />
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 500, marginBottom: 'var(--space-4)' }}>Payment Successful!</h2>
            <p style={{ fontSize: 'var(--text-base)', opacity: 0.9, lineHeight: 1.6, marginBottom: 'var(--space-10)' }}>
              Your career toolkit has been unlocked. We've sent the receipts and next steps to your email.
            </p>
            <button className="btn" style={{ background: 'white', color: 'var(--primary)', width: '100%', borderRadius: 'var(--radius-full)', padding: '14px', fontWeight: 600, fontSize: 14 }} onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
