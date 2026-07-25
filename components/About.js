'use client';

import styled from 'styled-components';
import ProfileCard from './ProfileCard';

const Section = styled.section`
  padding: 6rem 2rem;
`;

const Inner = styled.div`
  width: min(1120px, 92vw);
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  color: #FF9FFC;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 3rem;
  font-family: var(--font-display), sans-serif;

  span {
    background: linear-gradient(90deg, #FF9FFC, #B497CF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const AvatarRing = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  background: linear-gradient(135deg, #5227FF, #FF9FFC);
  padding: 3px;
`;

const AvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #152527;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-size: 1.05rem;
    color: #f8fafc;
  }

  p {
    color: #cbd5e1;
    font-size: 0.9rem;
  }
`;

const DecoCircle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(82, 39, 255, 0.5), rgba(255, 159, 252, 0.5));
  top: -10px;
  right: -10px;
  z-index: -1;
`;

const TextBlock = styled.div``;

const Bio = styled.p`
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.9;
  margin-bottom: 1.5rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: #152527;
  backdrop-filter: blur(12px);
  padding: 1rem 1.1rem;

  h4 {
    color: #f8fafc;
    margin-bottom: 0.35rem;
    font-size: 0.95rem;
  }

  p {
    color: #cbd5e1;
    font-size: 0.87rem;
    line-height: 1.6;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const StatItem = styled.div`
  text-align: center;

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: #f8fafc;
  }

  p {
    color: #cbd5e1;
    font-size: 0.85rem;
    margin-top: 0.2rem;
  }
`;

const ResumeBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.75rem 1.8rem;
  background: #152527;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);

  &:hover {
    transform: translateY(-2px);
    background: #1e3538;
    border-color: rgba(255, 255, 255, 0.45);
  }
`;

export default function About() {
  return (
    <Section id="about" className="reveal">
      <Inner>
        <SectionLabel>Get to know me</SectionLabel>
        <SectionTitle>
          About <span>Me</span>
        </SectionTitle>
        <Grid>
          <ImageWrapper>
            <ProfileCard
              avatarUrl="/profile.jpg"
              name="Deep Tandel"
              title="Frontend Developer & Software Engineer"
              handle="DeepTandel045"
              status="Available for Hire"
              showUserInfo={true}
              enableTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(82, 39, 255, 0.65)"
            />
          </ImageWrapper>
          <TextBlock>
            <Bio>
              I am a developer focused on clean architecture and practical UX. I enjoy translating
              product ideas into responsive, maintainable web applications with a strong attention
              to detail.
            </Bio>
            <Bio>
              My workflow combines modern frontend tooling with backend fundamentals, so I can ship
              complete products from interface to API.
            </Bio>
            <InfoGrid>
              <InfoCard>
                <h4>Education</h4>
                <p>B.Tech in Computer Science with focus on software engineering and DBMS.</p>
              </InfoCard>
              <InfoCard>
                <h4>Experience</h4>
                <p>Freelance and project-based work delivering portfolio, dashboard, and API apps.</p>
              </InfoCard>
            </InfoGrid>
            <Stats>
              <StatItem>
                <h3>12+</h3>
                <p>Projects Built</p>
              </StatItem>
              <StatItem>
                <h3>3+</h3>
                <p>Years Coding</p>
              </StatItem>
              <StatItem>
                <h3>8+</h3>
                <p>Core Stacks</p>
              </StatItem>
            </Stats>
            <ResumeBtn href="/resume.pdf" download="Deep_Tandel_Resume.pdf" rel="noopener noreferrer">
              Download Resume
            </ResumeBtn>
          </TextBlock>
        </Grid>
      </Inner>
    </Section>
  );
}
