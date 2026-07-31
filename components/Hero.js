'use client';

import styled, { keyframes } from 'styled-components';
import BlurText from './BlurText';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-18px); }
`;

const gradientMove = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.08); opacity: 1; }
`;

const Section = styled.section`
  min-height: calc(100vh - 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 8.5rem 2rem 3rem;

  @media (max-width: 600px) {
    padding: 6rem 1.25rem 3rem;
  }
`;

const BgGlow = styled.div`
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 159, 252, 0.25) 0%, transparent 70%);
  top: -140px;
  left: -120px;
  pointer-events: none;
  animation: ${pulse} 5s ease-in-out infinite;
`;

const BgGlow2 = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(82, 39, 255, 0.3) 0%, transparent 68%);
  bottom: -130px;
  right: -80px;
  pointer-events: none;
  animation: ${pulse} 5.3s ease-in-out infinite;
`;

const Content = styled.div`
  max-width: 900px;
  text-align: center;
  z-index: 1;
  width: 100%;
`;

const Greet = styled.p`
  color: #FF9FFC;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.1s;
`;

const Name = styled.h1`
  font-size: clamp(1.9rem, 7.5vw, 5.4rem);
  font-weight: 900;
  color: #f8fafc;
  margin: 0.55rem 0;
  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.25s;
  line-height: 1.1;
  font-family: var(--font-display), sans-serif;
  word-break: break-word;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #FF9FFC, #B497CF, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
`;

const Tagline = styled.p`
  color: #cbd5e1;
  font-size: clamp(0.95rem, 2.5vw, 1.3rem);
  margin: 1.5rem auto;
  max-width: 680px;
  line-height: 1.7;
  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.5s;
`;

const BtnGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.6s ease both;
  animation-delay: 0.65s;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryBtn = styled.a`
  padding: 0.85rem 2.2rem;
  background: #152527;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);

  &:hover {
    transform: translateY(-3px);
    background: #1e3538;
    border-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const OutlineBtn = styled.a`
  padding: 0.85rem 2.2rem;
  background: rgba(21, 37, 39, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: #152527;
    border-color: rgba(255, 255, 255, 0.45);
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  animation: ${float} 2.5s ease-in-out infinite;
`;

const ScrollDot = styled.span`
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
`;

const ScrollLine = styled.span`
  width: 2px;
  height: 40px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.5), transparent);
`;

export default function Hero() {
  return (
    <Section id="hero">
      <BgGlow />
      <BgGlow2 />
      <Content>
        <Greet>Available for new opportunities</Greet>
        <Name>
          Deep Tandel
          <GradientText>Frontend Developer &amp; Software Engineer</GradientText>
        </Name>
        <Tagline>
          <BlurText
            text="I build responsive interfaces and full-stack products that feel fast, accessible, and intentional. Focused on React, Next.js, and backend APIs for production-ready apps."
            delay={100}
            animateBy="words"
            direction="top"
          />
        </Tagline>
        <BtnGroup>
          <PrimaryBtn href="#projects">View Projects</PrimaryBtn>
          <OutlineBtn href="#contact">Contact Me</OutlineBtn>
        </BtnGroup>
      </Content>
      <ScrollIndicator>
        <ScrollDot />
        <ScrollLine />
      </ScrollIndicator>
    </Section>
  );
}
