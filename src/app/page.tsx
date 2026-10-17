import Image from 'next/image';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Download,
  Terminal,
} from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { skills } from '@/data/portfolio';

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section className="hero section">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" /> SOFTWARE DEVELOPMENT ENGINEER II · JUSTDIAL
            </p>
            <h1>
              Good experiences.
              <br />
              Great <span className="gradient-text">engineering.</span>
            </h1>
            <p className="hero-intro">
              I’m <strong>Tahir Hussain</strong> — a backend developer turning complex problems into
              fast, reliable systems.
            </p>
            <p className="hero-subtitle">
              Node.js. APIs. Data. The things behind the things you love.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button secondary" href="/resume.pdf" download>
                <Download size={15} /> Résumé
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <span className="location-pin" /> Bengaluru, India
              </span>
              <span>4+ years of building at scale</span>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="portrait-frame">
              <Image
                src="/tahir-latest-cutout.png"
                alt="Tahir Hussain"
                fill
                priority
                sizes="(max-width: 700px) 85vw, 40vw"
              />
              <div className="portrait-shade" />
              <div className="portrait-name">
                <strong>Tahir Hussain</strong>
                <span>THE HUMAN BEHIND THE CODE</span>
              </div>
            </div>
            <div className="portrait-coordinate">12.9716° N / 77.5946° E</div>
          </div>
          <div className="hero-bottom">
            <span>THOUGHTFUL ENGINEERING. REAL-WORLD IMPACT.</span>
            <a href="#work">
              SCROLL TO DISCOVER <ArrowDown size={13} />
            </a>
          </div>
        </section>
        <div className="stack-strip">
          <span>MY EVERYDAY STACK</span>
          {['Node.js', 'Express.js', 'MongoDB', 'Redis', 'ClickHouse'].map((item) => (
            <strong key={item}>
              <span>✳</span>
              {item}
            </strong>
          ))}
        </div>
        <section className="section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED ENGINEERING</p>
              <h2>
                Less theory.
                <br />
                <span>More real-world impact.</span>
              </h2>
            </div>
            <p>
              Systems I’ve helped build at Justdial.
              <br />
              Designed for people. Engineered for scale.
            </p>
          </div>
          <Projects />
        </section>
        <section id="about" className="about section">
          <div>
            <p className="eyebrow">02 / BEYOND THE ENDPOINT</p>
            <h2>
              I care about
              <br />
              <span>what’s underneath.</span>
            </h2>
            <div className="about-symbol" aria-hidden="true">
              <Code2 size={80} />
              <span>curiosity → clarity → code</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="lead">
              The best backend is the one
              <br />
              that makes everything else feel easy.
            </p>
            <p>
              That’s the kind of engineering I enjoy. Over 4+ years at Justdial, I’ve built
              high-traffic APIs, optimized data pipelines, connected platforms, and worked on the
              systems businesses rely on every day.
            </p>
            <p>
              My approach is practical: understand the problem, make thoughtful trade-offs, and
              build something reliable. From OAuth edge cases to a slow query, the details matter.
            </p>
            <div className="about-stats">
              <div>
                <strong>
                  4<span>+</span>
                </strong>
                <span>Years of experience</span>
              </div>
              <div>
                <strong>
                  99<span>%</span>
                </strong>
                <span>Requests under 200 ms*</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Roles. One journey.</span>
              </div>
            </div>
            <small>*Client Leads after caching and pre-aggregation improvements.</small>
          </div>
        </section>
        <section id="experience" className="section experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / THE JOURNEY SO FAR</p>
              <h2>
                Same curiosity.
                <br />
                <span>Bigger challenges.</span>
              </h2>
            </div>
            <p>
              A growing scope of ownership at Justdial.
              <br />
              Explore each chapter below.
            </p>
          </div>
          <ExperienceTimeline />
          <div className="education">
            <span className="education-icon">
              <Terminal size={22} />
            </span>
            <div>
              <p className="eyebrow">THE FOUNDATION / 2017 — 2021</p>
              <h3>B.Tech in Computer Science & Engineering</h3>
              <p>BGSB University · Rajouri, Jammu & Kashmir</p>
            </div>
            <span className="education-year">CLASS OF ’21</span>
          </div>
        </section>
        <section className="section skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / TOOLS OF THE TRADE</p>
              <h2>
                Built on a<br />
                <span>solid foundation.</span>
              </h2>
            </div>
            <p>
              The right tool for the problem.
              <br />
              The experience to make it count.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = [Code2, Database, Braces][index];
              return (
                <article key={group.title} className="skill-card">
                  <div className="skill-top">
                    <Icon size={23} />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>
                    {group.title}
                    <span>.</span>
                  </h3>
                  <p>{group.description}</p>
                  <div className="tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <Contact />
      </main>
      <footer>
        <a href="#" className="wordmark">
          tahir<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Tahir Hussain. Crafted with intent.</span>
        <a href="#">
          Back to top <ArrowUpRight size={14} />
        </a>
      </footer>
    </>
  );
}
