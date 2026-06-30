import React from 'react';
import { Menu, Search, Bell, MessageSquare } from 'lucide-react';

export default function TopNav({ title, setOpen }) {
  return (
    <header className="topnav">
      <button className="icon-btn" onClick={() => setOpen(o => !o)} style={{ marginRight: 4 }}>
        <Menu size={20} />
      </button>
      <div className="topnav-title">{title}</div>
      <div className="topnav-search">
        <Search size={15} color="var(--neutral-400)" />
        <input placeholder="Search anything..." id="topnav-search-input" />
      </div>
      <div className="topnav-actions">
        <button className="icon-btn" id="notifications-btn" style={{ position: 'relative' }}>
          <Bell size={18} />
          <span style={{
            position: 'absolute', top: 8, right: 8, width: 7, height: 7,
            background: 'var(--secondary)', borderRadius: '50%', border: '2px solid white'
          }} />
        </button>
        <button className="icon-btn" id="messages-btn">
          <MessageSquare size={18} />
        </button>
        <div className="sidebar-avatar" style={{ cursor: 'pointer', fontSize: 'var(--text-xs)' }}>KM</div>
      </div>
    </header>
  );
}
