import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { Upload, FileText, CheckCircle, AlertCircle, ArrowRight, Download } from 'lucide-react';

const analysisResults = {
  score: 68,
  strengths: [
    'Clear career progression narrative',
    'Strong quantified achievements',
    'Good use of industry keywords',
  ],
  improvements: [
    { issue: 'Generic personal statement', suggestion: 'Tailor your summary to your target role', impact: 'High' },
    { issue: 'No LinkedIn URL included', suggestion: 'Add your LinkedIn profile link', impact: 'Medium' },
    { issue: 'Skills section lacks specificity', suggestion: 'Add proficiency levels and sub-skills', impact: 'Medium' },
    { issue: 'Gap in employment 2019–2020 unexplained', suggestion: 'Add a brief note explaining the gap', impact: 'Low' },
  ],
  atsScore: 74,
  keywordsFound: ['Product Management', 'Agile', 'Stakeholder Management', 'Strategic Planning'],
  keywordsMissing: ['OKRs', 'Cross-functional', 'P&L Ownership'],
};

export default function CVUploadPage({ setOpen }) {
  const [stage, setStage] = useState('upload'); // upload, analyzing, results
  const [dragging, setDragging] = useState(false);

  const handleDrop = () => {
    setDragging(false);
    setStage('analyzing');
    setTimeout(() => setStage('results'), 2500);
  };

  return (
    <>
      <TopNav title="CV & Resume" setOpen={setOpen} />
      <div className="page-content animate-in" style={{ maxWidth: 900 }}>

        {stage === 'upload' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-2)' }}>Upload Your CV</h2>
              <p style={{ color: 'var(--neutral-400)' }}>Our AI will analyze your CV for ATS compatibility, impact, and alignment with your career goals.</p>
            </div>

            {/* Upload area */}
            <div
              onDragOver={e => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              onClick={handleDrop}
              style={{
                border: `2px dashed ${dragging ? 'var(--primary)' : 'var(--neutral-200)'}`,
                borderRadius: 'var(--radius-2xl)', padding: 'var(--space-16)',
                textAlign: 'center', background: dragging ? 'var(--primary-50)' : 'var(--white)',
                cursor: 'pointer', transition: 'all 0.2s'
              }}>
              <div style={{ width: 72, height: 72, background: 'var(--primary-50)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-5)', color: 'var(--primary)' }}>
                <Upload size={32} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-2)' }}>Drag & drop your CV here</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-400)', marginBottom: 'var(--space-5)' }}>Supports PDF, DOCX, TXT — up to 5MB</p>
              <button className="btn btn-primary">Browse Files</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
              {[
                { title: 'ATS Analysis', desc: 'Check keyword compatibility with job descriptions' },
                { title: 'Impact Scoring', desc: 'Rate the strength of your achievement statements' },
                { title: 'Improvement Tips', desc: 'Actionable suggestions to make your CV stand out' },
              ].map((item, i) => (
                <div key={i} className="card card-cream" style={{ textAlign: 'center', padding: 'var(--space-5)' }}>
                  <div style={{ fontSize: 24, marginBottom: 'var(--space-3)' }}>{['🎯', '⚡', '✨'][i]}</div>
                  <h6 style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>{item.title}</h6>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-400)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {stage === 'analyzing' && (
          <div style={{ textAlign: 'center', padding: 'var(--space-20)' }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%', background: 'var(--primary-50)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto var(--space-6)', color: 'var(--primary)',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}>
              <FileText size={36} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-3)' }}>Analyzing your CV…</h3>
            <p style={{ color: 'var(--neutral-400)', marginBottom: 'var(--space-8)' }}>Our AI is reviewing your experience, keywords, and narrative structure.</p>
            <div style={{ maxWidth: 360, margin: '0 auto' }}>
              {['Reading document structure', 'Extracting experience & skills', 'Running ATS keyword check', 'Scoring impact statements'].map((step, i) => (
                <div key={i} className="flex items-center gap-3" style={{ marginBottom: 'var(--space-3)', animation: `fadeIn 0.3s ${i * 0.4}s both` }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 11, flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)' }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {stage === 'results' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {/* Score header */}
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
              borderRadius: 'var(--radius-2xl)', padding: 'var(--space-8)',
              display: 'flex', gap: 'var(--space-8)', alignItems: 'center', color: 'white', flexWrap: 'wrap'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 64, fontWeight: 400, lineHeight: 1 }}>{analysisResults.score}</div>
                <div style={{ opacity: 0.7, fontSize: 'var(--text-sm)' }}>CV Score</div>
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: 'var(--space-2)' }}>Good start — room to shine</h3>
                <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
                  Your CV shows strong fundamentals. With targeted improvements, you can significantly increase your interview callback rate.
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-inverted btn-sm">Get Professional Rewrite</button>
                  <button className="btn btn-sm" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)' }}>
                    <Download size={14} /> Download Report
                  </button>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 400, lineHeight: 1 }}>{analysisResults.atsScore}%</div>
                <div style={{ opacity: 0.7, fontSize: 'var(--text-sm)' }}>ATS Compatible</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
              {/* Strengths */}
              <div className="card">
                <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle size={16} color="var(--primary)" /> What's Working
                </h5>
                {analysisResults.strengths.map((s, i) => (
                  <div key={i} className="flex items-center gap-2" style={{ marginBottom: 'var(--space-2)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-600)' }}>{s}</span>
                  </div>
                ))}
              </div>

              {/* Keywords */}
              <div className="card">
                <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-4)' }}>ATS Keywords</h5>
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--primary)', marginBottom: 6 }}>Found ({analysisResults.keywordsFound.length})</div>
                  <div className="flex flex-wrap gap-2">
                    {analysisResults.keywordsFound.map(k => <span key={k} className="badge badge-primary">{k}</span>)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--secondary)', marginBottom: 6 }}>Missing ({analysisResults.keywordsMissing.length})</div>
                  <div className="flex flex-wrap gap-2">
                    {analysisResults.keywordsMissing.map(k => <span key={k} className="badge badge-secondary">{k}</span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Improvements */}
            <div className="card">
              <h5 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, marginBottom: 'var(--space-5)' }}>Recommended Improvements</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {analysisResults.improvements.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4)',
                    background: 'var(--neutral-50)', borderRadius: 'var(--radius-lg)',
                    borderLeft: `3px solid ${item.impact === 'High' ? 'var(--secondary)' : item.impact === 'Medium' ? 'var(--tertiary)' : 'var(--neutral-200)'}`
                  }}>
                    <AlertCircle size={16} color={item.impact === 'High' ? 'var(--secondary)' : 'var(--tertiary)'} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--neutral-800)', marginBottom: 2 }}>{item.issue}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--neutral-500)' }}>{item.suggestion}</div>
                    </div>
                    <span className={`badge ${item.impact === 'High' ? 'badge-secondary' : 'badge-neutral'}`} style={{ height: 'fit-content', flexShrink: 0 }}>{item.impact}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary mt-5" style={{ marginTop: 'var(--space-5)' }}>
                Get Professional CV Rewrite <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
