'use client';

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { GitHubCalendar } from 'react-github-calendar';
import { ActivityCalendar } from 'react-activity-calendar';

/* ── Animations ─────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Wrappers ────────────────────────────────────────────── */
const Section = styled.section`
  padding: 7rem 2rem;
  max-width: 1240px;
  margin: 0 auto;
  animation: ${fadeUp} 0.7s ease both;
`;

const SectionTag = styled.span`
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #FF9FFC;
  background: rgba(255, 159, 252, 0.16);
  padding: 0.35rem 1rem;
  border-radius: 20px;
  margin-bottom: 1.2rem;
`;

const Title = styled.h2`
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  color: #f0f6ff;
  margin-bottom: 0.8rem;
  font-family: var(--font-display), sans-serif;

  span {
    background: linear-gradient(90deg, #FF9FFC, #B497CF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.p`
  color: #cbd5e1;
  font-size: 1.1rem;
  margin-bottom: 3.5rem;
  max-width: 650px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`;

/* ── Card ────────────────────────────────────────────────── */
const Card = styled.div`
  background: #152527;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2.5rem 2.5rem 2.2rem;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);
  transition: border-color 0.3s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.8rem;
`;

const PlatformIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  background: ${({ $bg }) => $bg || 'rgba(59,130,246,0.2)'};
`;

const PlatformInfo = styled.div``;

const PlatformName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f0f6ff;
  margin: 0 0 0.2rem;
`;

const PlatformHandle = styled.a`
  font-size: 0.92rem;
  color: #93c5fd;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #38bdf8;
  }
`;

const CalendarWrap = styled.div`
  overflow-x: auto;
  padding-bottom: 1.8rem;
  margin-bottom: 1rem;

  /* Style the calendar to fill width */
  & > div,
  & > div > div {
    width: 100% !important;
  }

  & svg {
    margin-bottom: 1.2rem;
  }

  & svg rect {
    rx: 2px;
  }

  /* Scrollbar styling - positioned lower with generous spacing from activity dots */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(6, 15, 30, 0.6);
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.45);
    border-radius: 6px;
    border: 2px solid #0a192f;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(56, 189, 248, 0.75);
  }
`;

const SkeletonBar = styled.div`
  height: 112px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 25%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.04) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0%   { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

const ErrorMsg = styled.p`
  color: #93c5fd;
  font-size: 0.9rem;
  text-align: center;
  padding: 2rem 0;
`;

/* ── GitHub theme (Gray / Black / Slate) ──────────────────── */
const githubTheme = {
  dark: ['#161b22', '#30363d', '#6e7681', '#8b949e', '#f0f6fc'],
};

/* ── LeetCode theme (Red / Orange) ────────────────────────── */
const leetcodeTheme = {
  dark: ['#1c110b', '#7c2d12', '#c2410c', '#ea580c', '#ff5722'],
};

/* ── Tab Buttons ─────────────────────────────────────────── */
const TabRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`;

const TabBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.6rem;
  border-radius: 50px;
  border: 1px solid ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)')};
  background: ${({ $active }) => ($active ? '#1e3538' : '#152527')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#cbd5e1')};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background: #1e3538;
    color: #ffffff;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const AnimatedCard = styled(Card)`
  animation: ${fadeIn} 0.35s ease both;
`;

const LeetCodeLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 210px;
  gap: 1.2rem;
  align-items: start;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const StatsPanel = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const StatsTitle = styled.p`
  margin: 0;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #94a3b8;
`;

const StatItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 0.75rem 0.85rem;
  background: #152527;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const StatLabel = styled.span`
  font-size: 0.82rem;
  color: ${({ $tone }) => $tone || '#94a3b8'};
`;

const StatValue = styled.strong`
  font-size: 1.08rem;
  color: #f8fafc;
`;

/* ── Component ───────────────────────────────────────────── */
export default function Activity() {
  const [lcData, setLcData] = useState(null);
  const [lcStats, setLcStats] = useState(null);
  const [lcError, setLcError] = useState(false);
  const [active, setActive] = useState('github');

  React.useEffect(() => {
    fetch('/api/leetcode')
      .then((r) => r.json())
      .then(({ activities, stats }) => {
        setLcData(activities || []);
        setLcStats(stats || { easy: 0, medium: 0, hard: 0, total: 0 });
      })
      .catch(() => setLcError(true));
  }, []);

  const handleTab = (tab) => {
    setActive((prev) => (prev === tab ? null : tab));
  };

  return (
    <Section id="activity" className="reveal">
      <SectionTag>Coding Activity</SectionTag>
      <Title>
        Coding <span>Progress</span>
      </Title>
      <Subtitle>Track my public contribution activity across GitHub and LeetCode.</Subtitle>

      <TabRow>
        <TabBtn $active={active === 'github'} onClick={() => handleTab('github')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </TabBtn>

        <TabBtn $active={active === 'leetcode'} onClick={() => handleTab('leetcode')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
          LeetCode
        </TabBtn>
      </TabRow>

      <Grid>
        {active === 'github' && (
          <AnimatedCard key="github">
            <CardHeader>
              <PlatformIcon $bg="rgba(255,255,255,0.09)">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#ecf6f2">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </PlatformIcon>
              <PlatformInfo>
                <PlatformName>GitHub</PlatformName>
                <PlatformHandle href="https://github.com/DeepTandel045" target="_blank" rel="noopener noreferrer">
                  @DeepTandel045
                </PlatformHandle>
              </PlatformInfo>
            </CardHeader>
            <CalendarWrap>
              <GitHubCalendar
                username="DeepTandel045"
                colorScheme="dark"
                theme={githubTheme}
                blockSize={16}
                blockMargin={5}
                fontSize={14}
                labels={{
                  legend: { less: 'Less', more: 'More' },
                  totalCount: '{{count}} contributions in the last year',
                }}
                renderBlock={(block, activity) =>
                  React.cloneElement(block, {
                    children: (
                      <title>{`${activity.count} contribution${activity.count === 1 ? '' : 's'} on ${activity.date}`}</title>
                    ),
                  })
                }
                style={{ color: '#9eb9b1' }}
              />
            </CalendarWrap>
          </AnimatedCard>
        )}

        {active === 'leetcode' && (
          <AnimatedCard key="leetcode">
            <CardHeader>
              <PlatformIcon $bg="rgba(249,115,22,0.15)">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#f97316">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </PlatformIcon>
              <PlatformInfo>
                <PlatformName>LeetCode</PlatformName>
                <PlatformHandle href="https://leetcode.com/u/Tandel_Deep_1906/" target="_blank" rel="noopener noreferrer">
                  @Tandel_Deep_1906
                </PlatformHandle>
              </PlatformInfo>
            </CardHeader>
            <LeetCodeLayout>
              <div>
                <CalendarWrap>
                  {lcError && <ErrorMsg>Could not load LeetCode activity at this time.</ErrorMsg>}
                  {!lcError && !lcData && <SkeletonBar />}
                  {!lcError && lcData && lcData.length > 0 && (
                    <ActivityCalendar
                      data={lcData}
                      colorScheme="dark"
                      theme={leetcodeTheme}
                      blockSize={16}
                      blockMargin={5}
                      fontSize={14}
                      labels={{
                        legend: { less: 'Less', more: 'More' },
                        totalCount: '{{count}} submissions in the last year',
                      }}
                      renderBlock={(block, activity) =>
                        React.cloneElement(block, {
                          children: (
                            <title>{`${activity.count} submission${activity.count === 1 ? '' : 's'} on ${activity.date}`}</title>
                          ),
                        })
                      }
                      style={{ color: '#9eb9b1' }}
                    />
                  )}
                  {!lcError && lcData && lcData.length === 0 && (
                    <ErrorMsg>No submission data found for this account.</ErrorMsg>
                  )}
                </CalendarWrap>
              </div>

              <StatsPanel>
                <StatsTitle>Solved Questions</StatsTitle>
                <StatItem>
                  <StatLabel $tone="#65d68a">Easy</StatLabel>
                  <StatValue>{lcStats?.easy ?? '--'}</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel $tone="#ffd166">Medium</StatLabel>
                  <StatValue>{lcStats?.medium ?? '--'}</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel $tone="#ff6b6b">Hard</StatLabel>
                  <StatValue>{lcStats?.hard ?? '--'}</StatValue>
                </StatItem>
              </StatsPanel>
            </LeetCodeLayout>
          </AnimatedCard>
        )}
      </Grid>
    </Section>
  );
}
