'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.section`
  padding: 6rem 2rem;
  background: rgba(18, 12, 38, 0.45);
  border-top: 1px solid rgba(255, 159, 252, 0.18);
  border-bottom: 1px solid rgba(255, 159, 252, 0.18);

  @media (max-width: 600px) {
    padding: 4rem 1.25rem;
  }
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
  margin-bottom: 2rem;
  font-family: var(--font-display), sans-serif;

  span {
    background: linear-gradient(90deg, var(--accent), var(--accent-3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const TabRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 0.5rem;
    margin-bottom: 1.8rem;
  }
`;

const TabBtn = styled.button`
  padding: 0.6rem 1.4rem;
  border-radius: 50px;
  border: 1px solid ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)')};
  background: ${({ $active }) => ($active ? '#1e3538' : '#152527')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#cbd5e1')};
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background: #1e3538;
    color: #ffffff;
  }

  @media (max-width: 600px) {
    padding: 0.45rem 1rem;
    font-size: 0.8rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1.25rem;
  max-width: 800px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(64px, 1fr));
    gap: 0.85rem;
  }
`;

const popIn = keyframes`
  from { opacity: 0; transform: scale(0.85) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const SkillIconBox = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
  animation: ${popIn} 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.1) both;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 480px) {
    width: 62px;
    height: 62px;
    border-radius: 12px;
  }
`;

const SkillIcon = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
  filter: saturate(1.08);
  
  /* Fallback in light mode to keep dark icons visible */
  [data-theme='light'] & {
    filter: invert(0) brightness(1.2);
  }
`;

const skills = [
  // Frontend
  { title: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', category: 'frontend' },
  { title: 'CSS3', icon: 'https://cdn.simpleicons.org/css/1572B6', category: 'frontend' },
  { title: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', category: 'frontend' },
  { title: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', category: 'frontend' },
  { title: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', category: 'frontend' },
  { title: 'Styled Components', icon: 'https://cdn.simpleicons.org/styledcomponents/DB7093', category: 'frontend' },
  
  // Backend
  { title: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E', category: 'backend' },
  { title: 'Express', icon: 'https://cdn.simpleicons.org/express/FFFFFF', category: 'backend' },
  { title: 'REST APIs', icon: 'https://cdn.simpleicons.org/openapiinitiative/6BA539', category: 'backend' },
  { title: 'JWT Auth', icon: 'https://cdn.simpleicons.org/jsonwebtokens/FFFFFF', category: 'backend' },
  { title: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28', category: 'backend' },
  
  // Databases
  { title: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', category: 'database' },
  { title: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', category: 'database' },
  
  // Tools & DevOps
  { title: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', category: 'tools' },
  { title: 'GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF', category: 'tools' },
  { title: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/FFFFFF', category: 'tools' },
  { title: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },
  { title: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37', category: 'tools' },
  { title: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E', category: 'tools' },
];

const categories = [
  { id: 'all', label: 'All Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Databases' },
  { id: 'tools', label: 'Tools & DevOps' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter((s) => s.category === activeTab);

  return (
    <Wrapper id="skills" className="reveal">
      <Inner>
        <SectionLabel>What I work with</SectionLabel>
        <SectionTitle>
          My <span>Skills</span>
        </SectionTitle>

        <TabRow>
          {categories.map((cat) => (
            <TabBtn
              key={cat.id}
              $active={activeTab === cat.id}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </TabBtn>
          ))}
        </TabRow>

        <Grid>
          {filteredSkills.map((skill, index) => (
            <SkillIconBox
              key={skill.title}
              title={skill.title}
              aria-label={skill.title}
              style={{ animationDelay: `${index * 20}ms` }}
            >
              <SkillIcon src={skill.icon} alt={skill.title} loading="lazy" />
            </SkillIconBox>
          ))}
        </Grid>
      </Inner>
    </Wrapper>
  );
}
