import { ArrowUpRight, Database, Globe2, Layers3, Package, Route, Server, Zap } from 'lucide-react';
import { projects } from '@/data/portfolio';

function ProjectVisual({ type }: { type: string }) {
  if (type === 'performance')
    return (
      <div
        className="project-art performance-art"
        aria-label="Requests under 200 milliseconds improved from 80% to 99%"
      >
        <div className="art-caption">
          <span className="status-dot" /> RESPONSE TIME / OPTIMIZED
        </div>
        <div className="performance-number">
          99<span>%</span>
          <small>requests under 200 ms</small>
        </div>
        <div className="chart-bars" aria-hidden="true">
          {Array.from({ length: 28 }, (_, i) => (
            <i key={i} style={{ height: `${18 + ((i * 13) % 70)}%` }} />
          ))}
        </div>
        <div className="art-footer">
          <span>80% BEFORE</span>
          <span>
            <Zap size={11} /> 99% AFTER
          </span>
        </div>
      </div>
    );
  if (type === 'connections')
    return (
      <div className="project-art connections-art">
        <div className="art-caption">CONNECTED ECOSYSTEM</div>
        <div className="network">
          <span className="network-node">
            <Globe2 />
            <small>Google</small>
          </span>
          <span className="network-line" />
          <span className="network-core">
            JD<span>BUSINESS</span>
          </span>
          <span className="network-line" />
          <span className="network-node">
            <Layers3 />
            <small>Meta</small>
          </span>
        </div>
        <div className="art-footer">
          <span>AUTHENTICATE</span>
          <span>SYNC</span>
          <span>PUBLISH</span>
        </div>
      </div>
    );
  return (
    <div className="project-art routing-art">
      <div className="art-caption">DELIVERY ORCHESTRATION</div>
      <div className="routing-diagram">
        <span>
          <Package size={25} />
          <small>Order</small>
        </span>
        <i />
        <span className="route-core">
          <Route size={30} />
          <small>Smart routing</small>
        </span>
        <i />
        <span>
          <Server size={25} />
          <small>Partner</small>
        </span>
      </div>
      <div className="art-footer">
        <span>
          <Database size={12} /> INVENTORY → FULFILMENT
        </span>
        <span>↗</span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project" key={project.id}>
          <ProjectVisual type={project.visual} />
          <div className="project-copy">
            <p className="eyebrow">
              {project.number} / {project.category}
            </p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="tags">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <details className="project-details">
              <summary>
                Inside {project.name}
                <ArrowUpRight size={16} />
              </summary>
              <p>{project.detail}</p>
            </details>
          </div>
        </article>
      ))}
    </div>
  );
}
