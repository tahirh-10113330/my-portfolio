// All portfolio content lives here. Dates use YYYY-MM for predictable sorting.
export const profile = {
  name: 'Tahir Hussain',
  title: 'Backend Developer',
  location: 'Bengaluru, India',
  email: 'tahir.10113330@gmail.com',
  phone: '+917006621947',
  linkedin: 'https://www.linkedin.com/in/ta-hu',
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string | null;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: 'sde-2',
    role: 'Software Development Engineer II',
    company: 'Justdial',
    start: '2026-06',
    end: null,
    summary: 'Connecting platforms. Turning data into decisions.',
    highlights: [
      'Integrated SquadStack, Sarvam AI, and Justdial Voice Bot with Node.js services to automate feedback collection and support lead qualification.',
      'Developed Meta Business integrations for account connection, publishing, and comment replies, including the OAuth token lifecycle.',
      'Own the Search MIS analytics platform, building APIs and dashboards across Node.js, Core PHP, and Symfony.',
    ],
    stack: ['Node.js', 'Meta Graph API', 'OAuth 2.0', 'Symfony'],
  },
  {
    id: 'sde-1',
    role: 'Software Development Engineer I',
    company: 'Justdial',
    start: '2025-06',
    end: '2026-06',
    summary: 'Making high-traffic systems feel effortless.',
    highlights: [
      'Built and maintained Node.js and MongoDB APIs for the Client Leads module used by businesses across India.',
      'Introduced ClickHouse pre-aggregation and Redis caching, increasing requests served under 200 ms from 80% to 99%.',
      'Built Google Business profile authentication and sync, including OAuth flows, token refresh, and sync edge cases.',
    ],
    stack: ['Node.js', 'MongoDB', 'Redis', 'ClickHouse'],
  },
  {
    id: 'software-engineer',
    role: 'Software Engineer',
    company: 'Justdial',
    start: '2022-04',
    end: '2025-06',
    summary: 'Building the foundations of everyday commerce.',
    highlights: [
      'Built vendor inventory and product listing APIs for JD Omni, covering catalog structure and stock updates.',
      'Built JD Self Ship workflows for assigning deliveries to vendor staff and logistics partners.',
      'Designed fallback order routing across Dunzo, Shadowfax, and Shipyaari based on partner availability.',
    ],
    stack: ['REST APIs', 'E-commerce', 'Logistics APIs'],
  },
];

export const projects = [
  {
    id: 'leads',
    number: '01',
    category: 'PERFORMANCE ENGINEERING',
    title: 'Speed is a feature.',
    name: 'Client Leads',
    summary: 'High-traffic lead management, optimized for the moments that matter.',
    detail:
      'Built Node.js and MongoDB APIs, then introduced Redis caching and ClickHouse pre-aggregated summaries. The share of requests served under 200 ms increased from 80% to 99%.',
    stack: ['Node.js', 'Redis', 'ClickHouse'],
    visual: 'performance',
  },
  {
    id: 'integrations',
    number: '02',
    category: 'PLATFORM INTEGRATIONS',
    title: 'Less friction. More connection.',
    name: 'JD Business',
    summary: 'Google, Facebook, and Instagram. Connected to one business workflow.',
    detail:
      'Implemented Google Business profile connection and sync, and Meta account connection, publishing, and comment replies. Handled OAuth, token refresh, and integration edge cases.',
    stack: ['OAuth 2.0', 'Google Business API', 'Meta Graph API'],
    visual: 'connections',
  },
  {
    id: 'commerce',
    number: '03',
    category: 'COMMERCE INFRASTRUCTURE',
    title: 'From order to doorstep.',
    name: 'JD Omni & Self Ship',
    summary: 'Reliable inventory APIs and delivery routing that keeps commerce moving.',
    detail:
      'Built inventory and product APIs for JD Omni, plus delivery assignment and fallback routing for JD Self Ship across vendor staff, Dunzo, Shadowfax, and Shipyaari.',
    stack: ['REST APIs', 'Order routing', 'Partner integrations'],
    visual: 'routing',
  },
] as const;

export const skills = [
  {
    title: 'Build',
    description: 'APIs & application logic',
    items: ['JavaScript', 'Node.js', 'Express.js', 'PHP', 'Symfony', 'Python'],
  },
  {
    title: 'Scale',
    description: 'Data & performance',
    items: ['MongoDB', 'MySQL', 'ClickHouse', 'Redis', 'SQL', 'Query optimization'],
  },
  {
    title: 'Connect',
    description: 'Integrations & delivery',
    items: ['REST APIs', 'OAuth 2.0', 'Git / GitLab', 'Jira', 'Grafana', 'Kibana'],
  },
];
