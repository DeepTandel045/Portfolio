'use client';

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); filter: blur(0px); }
  to { opacity: 0; transform: scale(1.03); filter: blur(10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.82; }
  50% { transform: scale(1.08); opacity: 1; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const drift = keyframes`
  0% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(18px, -12px, 0) scale(1.06); }
  100% { transform: translate3d(0, 0, 0) scale(1); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 15% 20%, rgba(255, 159, 252, 0.25), transparent 36%),
    radial-gradient(circle at 85% 18%, rgba(82, 39, 255, 0.25), transparent 30%),
    linear-gradient(135deg, #090514 0%, #120c26 55%, #1a1234 100%);
  overflow: hidden;
  animation: ${({ $closing }) => ($closing ? fadeOut : fadeIn)} 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`;

const AmbientBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const GlowOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  animation: ${drift} 8s ease-in-out infinite;
`;

const GlowOne = styled(GlowOrb)`
  width: 360px;
  height: 360px;
  top: 10%;
  left: 10%;
  background: radial-gradient(circle, rgba(255, 159, 252, 0.25) 0%, rgba(255, 159, 252, 0) 70%);
`;

const GlowTwo = styled(GlowOrb)`
  width: 320px;
  height: 320px;
  right: 8%;
  bottom: 12%;
  background: radial-gradient(circle, rgba(82, 39, 255, 0.3) 0%, rgba(82, 39, 255, 0) 70%);
  animation-delay: 1.2s;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 159, 252, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 159, 252, 0.08) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(circle at center, black 44%, transparent 80%);
`;

const LoaderCard = styled.div`
  position: relative;
  width: min(520px, 90vw);
  padding: 2.2rem 2.1rem 1.8rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: #152527;
  backdrop-filter: blur(16px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Orbit = styled.div`
  position: relative;
  width: 118px;
  height: 118px;
  display: grid;
  place-items: center;
  animation: ${rotate} 2.2s linear infinite;
`;

const OrbitRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: rgba(255, 159, 252, 0.95);
  border-right-color: rgba(82, 39, 255, 0.85);
  box-shadow: 0 0 18px rgba(255, 159, 252, 0.4);
`;

const OrbitDot = styled.span`
  position: absolute;
  top: 6px;
  right: 18px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5227FF, #FF9FFC);
  box-shadow: 0 0 12px rgba(255, 159, 252, 0.6);
`;

const Core = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ffffff 0%, #FF9FFC 42%, #5227FF 100%);
  box-shadow: 0 0 30px rgba(255, 159, 252, 0.4);
  animation: ${pulse} 1.4s ease-in-out infinite;
`;

const BrandText = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #f0f6ff;
`;

const Tagline = styled.p`
  margin: 0;
  color: #B497CF;
  font-size: 0.95rem;
  text-align: center;
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 7px;
  background: rgba(12, 8, 28, 0.8);
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid rgba(255, 159, 252, 0.3);
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $progress }) => `${$progress}%`};
  background: linear-gradient(90deg, #5227FF 0%, #FF9FFC 100%);
  border-radius: inherit;
  transition: width 0.08s ease-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
    animation: ${shimmer} 1.1s linear infinite;
  }
`;

const MetaRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #93c5fd;
`;

const StatusText = styled.span`
  font-family: monospace, sans-serif;
`;

const SkipBtn = styled.button`
  border: 1px solid rgba(59, 130, 246, 0.35);
  background: transparent;
  color: #93c5fd;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #f0f6ff;
    background: rgba(59, 130, 246, 0.2);
    border-color: #38bdf8;
  }
`;

const INSIGHT_STEPS = [
  { threshold: 20, text: 'Preparing your experience' },
  { threshold: 50, text: 'Loading portfolio sections' },
  { threshold: 80, text: 'Polishing the interface' },
  { threshold: 100, text: 'Ready to launch' },
];

export default function IntroLoader() {
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);
  const [done, setDone] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hasSeen = typeof window !== 'undefined' && sessionStorage.getItem('portfolio_intro_seen');
    if (hasSeen) {
      setDone(true);
      return;
    }
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled || done) return;

    document.body.style.overflow = 'hidden';

    const startTime = performance.now();
    const duration = 700;
    let frameId;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      const easedProgress = Math.min(100, Math.round(Math.pow(pct / 100, 0.92) * 100));
      setProgress(easedProgress);

      if (elapsed < duration) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = '';
    };
  }, [enabled, done]);

  useEffect(() => {
    if (progress < 100) return;

    const closeTimer = setTimeout(() => setClosing(true), 110);
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = '';
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('portfolio_intro_seen', 'true');
      }
      setDone(true);
    }, 420);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(doneTimer);
    };
  }, [progress]);

  const handleSkip = () => {
    setClosing(true);
    setTimeout(() => {
      document.body.style.overflow = '';
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('portfolio_intro_seen', 'true');
      }
      setDone(true);
    }, 180);
  };

  if (done || !enabled) {
    return null;
  }

  return (
    <Overlay $closing={closing} role="status" aria-live="polite" aria-label="Loading portfolio">
      <AmbientBg>
        <GlowOne />
        <GlowTwo />
        <GridOverlay />
      </AmbientBg>

      <LoaderCard>
        <Orbit>
          <OrbitRing />
          <OrbitDot />
          <Core />
        </Orbit>

        <BrandText>Deep Tandel</BrandText>
        <Tagline>Building a refined first impression for your portfolio experience.</Tagline>

        <ProgressTrack>
          <ProgressFill $progress={progress} />
        </ProgressTrack>

        <MetaRow>
          <StatusText>{INSIGHT_STEPS.find((step) => progress < step.threshold)?.text ?? 'Ready to launch'}</StatusText>
          <SkipBtn onClick={handleSkip}>Skip</SkipBtn>
        </MetaRow>
      </LoaderCard>
    </Overlay>
  );
}

