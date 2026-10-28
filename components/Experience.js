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

  a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.2s;
    &:hover {
      text-decoration: underline;
      opacity: 0.9;
    }
  }
`;

const ItemDesc = styled.p`
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.7;
`;

const CertiBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.6rem;
  color: #FF9FFC;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid rgba(255, 159, 252, 0.3);
  background: rgba(255, 159, 252, 0.1);
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 159, 252, 0.22);
    border-color: #FF9FFC;
    transform: translateY(-1px);
  }
`;

const experiences = [
  {
    period: 'Ongoing',
    title: '180+ Coding Problems Solved',
    org: 'LeetCode (160+), GeeksforGeeks & HackerRank',
    desc: 'Solved 180+ algorithmic problems across platforms demonstrating strong proficiency in Data Structures & Algorithms, Problem Solving, C++, and Python.',
  },
  {
    period: '2025',
    title: 'Data Structure and Algorithms using Java',
    org: 'NPTEL Online Certification, IIT Kharagpur',
    link: 'https://nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS148S951400112',
    desc: 'Roll No: NPTEL25CS148S951400112. Comprehensive certification covering algorithm design, asymptotic evaluation, and core data structure implementations.',
  },
  {
    period: 'Certification',
    title: 'Foundations of Data Structures and Algorithm Analysis',
    org: 'Coursera',
    desc: 'Completed specialized coursework focusing on linear & non-linear data structures, graph algorithms, trees, sorting techniques, and complexity analysis.',
  },
];

const education = [
  {
    period: '2024 – 2028 (Expected)',
    title: 'B.Tech in Information Technology',
    org: 'CHARUSAT, Gujarat',
    desc: 'Undergraduate degree focusing on Data Structures & Algorithms, Database Management Systems (DBMS), OOP, Web Technologies, and REST APIs. CGPA: 7.78.',
  },
  {
    period: '2024',
    title: 'Higher Secondary Certificate (Class XII)',
    org: 'Gujarat State Board',
    desc: 'Completed higher secondary education with a strong scientific and mathematical foundation. Percentage: 86.15%.',
  },
  {
    period: '2022',
    title: 'Secondary School Certificate (Class X)',
    org: 'Gujarat State Board',
    desc: 'Completed secondary school certificate with academic distinction. Percentage: 89.15%.',
  },
];

export default function Experience() {
  return (
    <Wrapper id="experience" className="reveal">
      <Inner>
        <SectionLabel>My journey</SectionLabel>
        <SectionTitle>
          Education &amp; <span>Achievements</span>
        </SectionTitle>
        <TwoCol>
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
          <div>
            <ColTitle>🏆 Achievements &amp; Certifications</ColTitle>
            <Timeline>
              {experiences.map((e) => (
                <TimelineItem key={e.title}>
                  <ItemPeriod>{e.period}</ItemPeriod>
                  <ItemTitle>{e.title}</ItemTitle>
                  <ItemOrg>
                    {e.link ? (
                      <a href={e.link} target="_blank" rel="noopener noreferrer">
                        {e.org} ↗
                      </a>
                    ) : (
                      e.org
                    )}
                  </ItemOrg>
                  <ItemDesc>{e.desc}</ItemDesc>
                  {e.link && (
                    <CertiBadge href={e.link} target="_blank" rel="noopener noreferrer">
                      Verify Certificate ↗
                    </CertiBadge>
                  )}
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </TwoCol>
      </Inner>
    </Wrapper>
  );
}
