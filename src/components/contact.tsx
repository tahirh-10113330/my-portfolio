'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Link, Phone } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setMessage('Email copied to clipboard.');
    } catch {
      setMessage(`Email: ${profile.email}`);
    }
  }
  return (
    <section id="contact" className="contact section">
      <div className="contact-orb" aria-hidden="true" />
      <p className="eyebrow">
        <span className="status-dot" /> HAVE SOMETHING IN MIND?
      </p>
      <h2>
        Let’s build something
        <br />
        <span>worth connecting.</span>
      </h2>
      <p>
        Interesting role, ambitious product, or a good technical conversation.
        <br />
        My inbox is a good place to start.
      </p>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
        <ArrowUpRight />
      </a>
      <div className="contact-actions">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <Link size={16} /> LinkedIn <ArrowUpRight size={13} />
        </a>
        <button onClick={copyEmail}>
          {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy email'}
        </button>
        <a href={`tel:${profile.phone}`}>
          <Phone size={16} /> Call me <ArrowUpRight size={13} />
        </a>
      </div>
      <span className="copy-status" role="status">
        {message}
      </span>
    </section>
  );
}
