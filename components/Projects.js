'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    title: 'E-Commerce Platform',
    description: 'Online store with product catalog, cart flow, authentication, and order management built for performance.',
    tags: ['Next.js', 'Node.js', 'SQLite', 'JWT'],
    demo: 'https://example.com',
    code: 'https://github.com/',
    features: [
      'Secure authentication flow using JWT & HttpOnly cookies',
      'Dynamic product search, filter, and pagination system',
      'Optimized cart state using Redux Toolkit persisting locally',
      'Stripe API sandbox checkout integration'
    ],
    challenges: 'Handling race conditions during rapid quantity increments in checkout and designing a clean local SQLite schema to handle transactions without a heavy Postgres server.',
    architecture: 'Next.js client-side pages fetching RESTful API routes from an Express router connected via Sequelize ORM to a production-optimized SQLite/Postgres backend.'
  },
  {
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80',
    title: 'Task Management App',
    description: 'Kanban board application with team collaboration, drag-and-drop tasks, and progress tracking.',
    tags: ['React', 'Express', 'MongoDB', 'Socket.io'],
    demo: 'https://example.com',
    code: 'https://github.com/',
    features: [
      'Realtime whiteboard and task state updates via Socket.io channels',
      'Drag-and-drop board layouts implemented via React DnD',
      'Granular workspace permissions (Admin, Member, Viewer)',
      'Automated email reminders for approaching deadline schedules'
    ],
    challenges: 'Managing drag-and-drop updates synchronously across multiple sessions without causing layout flickers or database sync delays.',
    architecture: 'Single Page React Client connected via WebSockets (Socket.io) and Express APIs to a clustered MongoDB Atlas database storage layer.'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    title: 'Analytics Dashboard',
    description: 'Interactive dashboard for business metrics with chart views, date filtering, and export-ready reports.',
    tags: ['Next.js', 'Chart.js', 'PostgreSQL', 'REST API'],
    demo: 'https://example.com',
    code: 'https://github.com/',
    features: [
      'Interactive analytics charts using Chart.js with responsive dimensions',
      'Raw Excel/PDF dataset export triggers for financial reporting',
      'Multi-tenant tracking using subdomains and custom filters',
      'High-speed cache layer built using Redis queries'
    ],
    challenges: 'Optimizing heavy SQL database aggregates containing over 1 million records to respond in under 150ms.',
    architecture: 'Next.js rendering server-side dashboard grids with REST API routers accessing a Redis cache layer and PostgreSQL relational database.'
  },
];

const loopProjects = [...projects, ...projects];

const Section = styled.section`
  padding: 6rem 2rem;
`;

const Inner = styled.div`
  width: min(1120px, 92vw);
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 3rem;
  font-family: var(--font-display), sans-serif;

  span {
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const CarouselViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 1.5rem;
  will-change: transform;
  animation: project-scroll 34s linear infinite;
  padding: 1rem 0;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes project-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    animation-duration: 26s;
  }
`;

const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  flex: 0 0 clamp(280px, 31vw, 360px);
  transform-style: preserve-3d;
  cursor: pointer;
  
  /* Make sure transforms work smoothly */
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.1s ease-out;

  &:hover {
    border-color: var(--accent);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    flex-basis: 82vw;
  }
`;

const CardBanner = styled.img`
  height: 160px;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  transform: translateZ(20px);
`;

const ProjectTitle = styled.h3`
  color: var(--text);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

const ProjectDesc = styled.p`
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.4rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #e2e8f0;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const Links = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const LinkBtn = styled.button`
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  border: none;
  font-family: inherit;

  &.primary {
    background: #152527;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.25);
    &:hover { background: #1e3538; border-color: rgba(255, 255, 255, 0.45); transform: translateY(-1px); }
  }
  &.outline {
    background: none;
    border: 1px solid var(--border);
    color: var(--text);
    &:hover { background: var(--border); }
  }
`;

/* ── Modal Styled Components ────────────────────────────── */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(9, 5, 20, 0.85);
  backdrop-filter: blur(12px);
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: 1.5rem;
`;

const ModalContent = styled.div`
  background: var(--surface-strong);
  border: 1px solid var(--border);
  border-radius: 24px;
  width: min(800px, 95vw);
  max-height: 88vh;
  overflow-y: auto;
  padding: 2.5rem;
  box-shadow: var(--shadow);
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 4px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text);
  transition: all 0.2s;
  z-index: 10;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const ModalHeaderImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 2rem;
`;

const ModalTitle = styled.h2`
  color: var(--text);
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  font-family: var(--font-display), sans-serif;
`;

const SectionHeader = styled.h4`
  color: var(--accent-2);
  font-size: 1.05rem;
  font-weight: 700;
  margin-top: 1.8rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.25rem;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
  }
`;

const ModalText = styled.p`
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ModalActionRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
`;

const ActionAnchor = styled.a`
  padding: 0.65rem 1.6rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s;

  &.primary {
    background: linear-gradient(135deg, #5227FF, #FF9FFC);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(82, 39, 255, 0.35);
    &:hover { opacity: 0.9; transform: translateY(-1.5px); }
  }

  &.outline {
    border: 1px solid var(--border);
    color: var(--text);
    background: var(--surface);
    &:hover { border-color: var(--accent); background: var(--border); }
  }
`;

/* ── Interactive Card Wrapper ───────────────────────────── */
function ProjectCard({ project, onOpenDetails }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalize coordinates to ranges -10 to 10 degrees
    const factor = 10;
    const rotateX = -(y / (box.height / 2)) * factor;
    const rotateY = (x / (box.width / 2)) * factor;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Card
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenDetails}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.x !== 0 ? -6 : 0}px)`,
        transition: tilt.x === 0 ? 'transform 0.4s ease' : 'none',
      }}
    >
      <CardBanner src={project.image} alt={project.title} loading="lazy" />
      <CardBody>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDesc>{project.description}</ProjectDesc>
        <Tags>
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Tags>
        <Links>
          <LinkBtn className="primary" onClick={(e) => { e.stopPropagation(); window.open(project.demo, '_blank'); }}>
            Live Demo
          </LinkBtn>
          <LinkBtn className="outline" onClick={(e) => { e.stopPropagation(); onOpenDetails(); }}>
            View Details
          </LinkBtn>
        </Links>
      </CardBody>
    </Card>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Section id="projects" className="reveal">
      <Inner>
        <SectionLabel>What I&apos;ve built</SectionLabel>
        <SectionTitle>
          Featured <span>Projects</span>
        </SectionTitle>
        <CarouselViewport>
          <CarouselTrack>
            {loopProjects.map((p, idx) => (
              <ProjectCard
                key={`${p.title}-${idx}`}
                project={p}
                onOpenDetails={() => setActiveProject(p)}
              />
            ))}
          </CarouselTrack>
        </CarouselViewport>
      </Inner>

      {/* Detail Modal */}
      {activeProject && (
        <ModalOverlay onClick={() => setActiveProject(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={() => setActiveProject(null)} aria-label="Close details">
              ✕
            </CloseBtn>
            <ModalHeaderImage src={activeProject.image} alt={activeProject.title} />
            <ModalTitle>{activeProject.title}</ModalTitle>
            <Tags>
              {activeProject.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Tags>

            <SectionHeader>Key Features</SectionHeader>
            <FeatureList>
              {activeProject.features.map((f, i) => (
                <FeatureItem key={i}>{f}</FeatureItem>
              ))}
            </FeatureList>

            <SectionHeader>System Architecture</SectionHeader>
            <ModalText>{activeProject.architecture}</ModalText>

            <SectionHeader>Technical Challenges</SectionHeader>
            <ModalText>{activeProject.challenges}</ModalText>

            <ModalActionRow>
              <ActionAnchor className="primary" href={activeProject.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </ActionAnchor>
              <ActionAnchor className="outline" href={activeProject.code} target="_blank" rel="noopener noreferrer">
                View Source Code
              </ActionAnchor>
            </ModalActionRow>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
}
