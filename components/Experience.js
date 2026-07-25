'use client';

import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 6rem 2rem;
  background: rgba(37, 99, 235, 0.04);
  border-top: 1px solid rgba(59, 130, 246, 0.22);
  border-bottom: 1px solid rgba(59, 130, 246, 0.22);
`;

const Inner = styled.div`
  max-width: 1100px;
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

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ColTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent-2);
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, var(--accent), var(--accent-2), transparent);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: -1.5rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    transform: translateX(-4px);
    box-shadow: 0 0 10px rgba(55, 214, 161, 0.5);
  }
`;

const ItemPeriod = styled.span`
  display: inline-block;
  padding: 0.2rem 0.9rem;
  background: rgba(55, 214, 161, 0.1);
  border: 1px solid rgba(55, 214, 161, 0.25);
  color: var(--accent);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

const ItemTitle = styled.h4`
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const ItemOrg = styled.p`
  color: var(--accent-2);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ItemDesc = styled.p`
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.7;
`;

const experiences = [
  {
    period: '2024 – Present',
    title: 'Full Stack Developer (Freelance)',
    org: 'Self-employed',
    desc: 'Building responsive web applications for clients, ranging from RESTful APIs to modern frontend user interfaces. Developing with Next.js, Node.js, and styled components.',
  },
  {
    period: '2023 – 2024',
    title: 'Web Development Intern',
    org: 'Tech Startup Ecosystem',
    desc: 'Contributed to frontend feature development using React and facilitated backend REST API integrations. Optimized layout structures and assets, improving initial page load speeds by 30%.',
  },
  {
    period: '2022 – 2023',
    title: 'Junior Developer',
    org: 'Project Engineering Team',
    desc: 'Participated in full-stack architecture design for collegiate database management projects. Collaborated in a 4-person team to implement secure user sessions and query optimizations.',
  },
];

const education = [
  {
    period: '2022 – 2026',
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Technical University',
    desc: 'Studying core software engineering, data structures, algorithms, Database Management Systems (DBMS), and operating systems. CGPA: 8.5/10.',
  },
  {
    period: '2020 – 2022',
    title: 'Higher Secondary Education (Science)',
    org: 'State Science College',
    desc: 'Completed secondary education with an academic focus on Mathematics, Physics, and Chemistry. Scored 90% aggregate.',
  },
  {
    period: '2019 – 2020',
    title: 'Secondary School Certification',
    org: 'High School Board Academy',
    desc: 'Graduated with 95% aggregate scoring. Actively engaged in science olympiads, coding clubs, and local technology seminars.',
  },
];

export default function Experience() {
  return (
    <Wrapper id="experience" className="reveal">
      <Inner>
        <SectionLabel>My journey</SectionLabel>
        <SectionTitle>
          Experience &amp; <span>Education</span>
        </SectionTitle>
        <TwoCol>
          <div>
            <ColTitle>💼 Work Experience</ColTitle>
            <Timeline>
              {experiences.map((e) => (
                <TimelineItem key={e.title}>
                  <ItemPeriod>{e.period}</ItemPeriod>
                  <ItemTitle>{e.title}</ItemTitle>
                  <ItemOrg>{e.org}</ItemOrg>
                  <ItemDesc>{e.desc}</ItemDesc>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
          <div>
            <ColTitle>🎓 Education</ColTitle>
            <Timeline>
              {education.map((e) => (
                <TimelineItem key={e.title}>
                  <ItemPeriod>{e.period}</ItemPeriod>
                  <ItemTitle>{e.title}</ItemTitle>
                  <ItemOrg>{e.org}</ItemOrg>
                  <ItemDesc>{e.desc}</ItemDesc>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </TwoCol>
      </Inner>
    </Wrapper>
  );
}
