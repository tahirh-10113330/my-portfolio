'use client';

import { useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, ChevronDown } from 'lucide-react';
import { experiences } from '@/data/portfolio';

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${value}-01T00:00:00Z`),
  );
}

export function ExperienceTimeline() {
  const [newestFirst, setNewestFirst] = useState(true);
  const [expanded, setExpanded] = useState<string[]>([experiences[0].id]);
  const sorted = useMemo(
    () =>
      [...experiences].sort((a, b) =>
        newestFirst ? b.start.localeCompare(a.start) : a.start.localeCompare(b.start),
      ),
    [newestFirst],
  );

  function toggle(id: string) {
    setExpanded((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <div className="timeline-container">
      <div className="timeline-toolbar">
        <span>
          <span className="status-dot" /> One company. Continuous growth.
        </span>
        <button onClick={() => setNewestFirst(!newestFirst)}>
          {newestFirst ? <ArrowDown size={14} /> : <ArrowUp size={14} />}{' '}
          {newestFirst ? 'Newest first' : 'Oldest first'}
        </button>
      </div>
      <ol className="timeline">
        {sorted.map((experience, index) => {
          const isOpen = expanded.includes(experience.id);
          return (
            <li
              className={`timeline-item ${isOpen ? 'expanded' : ''}`}
              key={experience.id}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="timeline-node" aria-hidden="true" />
              <div className="timeline-date">
                {formatDate(experience.start)} —{' '}
                {experience.end ? formatDate(experience.end) : 'Present'}
                {!experience.end && <span className="current-badge">CURRENT</span>}
              </div>
              <div className="timeline-card">
                <button
                  className="timeline-trigger"
                  onClick={() => toggle(experience.id)}
                  aria-expanded={isOpen}
                  aria-controls={`role-${experience.id}`}
                >
                  <span>
                    <span className="company">
                      {experience.company} <span>· Bengaluru</span>
                    </span>
                    <span className="role-title">{experience.role}</span>
                    <span className="role-summary">{experience.summary}</span>
                  </span>
                  <ChevronDown className="expand-icon" size={20} />
                </button>
                <div id={`role-${experience.id}`} hidden={!isOpen} className="timeline-details">
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {experience.stack.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
