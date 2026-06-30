import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Users, BookOpen, BarChart3, FileText,
  Settings, LogOut, ChevronRight, Star, Calendar,
  Briefcase, Search, Bell, MessageSquare, TrendingUp
} from 'lucide-react';

const navItems = [
  {
    section: 'Main',
    links: [
      { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
      { to: '/assessments', icon: BarChart3, label: 'Assessments' },
      { to: '/career-path', icon: TrendingUp, label: 'Career Path' },
    ]
  },
  {
    section: 'Coaching',
    links: [
      { to: '/coaches', icon: Users, label: 'Find Coaches' },
      { to: '/book-session', icon: Calendar, label: 'Book a Session' },
      { to: '/messages', icon: MessageSquare, label: 'Messages' },
    ]
  },
  {
    section: 'Resources',
    links: [
      { to: '/services', icon: Briefcase, label: 'Services' },
      { to: '/cv-upload', icon: FileText, label: 'CV & Resume' },
    ]
  },
  {
    section: 'Account',
    links: [
      { to: '/profile', icon: BookOpen, label: 'My Profile' },
      { to: '/settings', icon: Settings, label: 'Settings' },
    ]
  }
];

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.3)',
            zIndex: 99, display: 'none'
          }}
        />
      )}

      <aside className={`sidebar${open ? ' open' : ''}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-mark">S</div>
          <div className="sidebar-logo-text">
            <span className="sidebar-logo-name">SEAS Pathora</span>
            <span className="sidebar-logo-sub">Career Clinic</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navItems.map((section) => (
            <div key={section.section}>
              <div className="sidebar-section-label">{section.section}</div>
              {section.links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  <link.icon />
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* User footer */}
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-avatar">KM</div>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">Kayde Mills</div>
              <div className="sidebar-user-role">Career Explorer</div>
            </div>
            <ChevronRight size={14} color="var(--neutral-400)" />
          </div>
        </div>
      </aside>
    </>
  );
}
