'use client';

import styled from 'styled-components';

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: #152527;
  color: #cbd5e1;
  transition: all 0.25s;
  text-decoration: none;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background: #1e3538;
    color: #FF9FFC;
    transform: translateY(-2px);
  }
`;

const FooterWrapper = styled.footer`
  padding: 2.5rem 2rem;
  border-top: 1px solid rgba(255, 159, 252, 0.15);
  text-align: center;
`;

const Logo = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 900;
  background: linear-gradient(90deg, #FF9FFC, #B497CF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  margin-bottom: 1rem;
  font-family: var(--font-display), sans-serif;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const NavLink = styled.a`
  color: #cbd5e1;
  font-size: 0.88rem;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #FF9FFC;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 159, 252, 0.15);
  margin: 1.5rem auto;
  max-width: 600px;
`;

const Copy = styled.p`
  color: #94a3b8;
  font-size: 0.85rem;

  span {
    color: #FF9FFC;
  }
`;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <Logo href="#hero">DeepTandel.dev</Logo>
      <NavRow>
        {['About', 'Skills', 'Activity', 'Projects', 'Contact'].map((l) => (
          <NavLink key={l} href={`#${l.toLowerCase()}`}>
            {l}
          </NavLink>
        ))}
      </NavRow>

      <SocialRow>
        {/* GitHub */}
        <SocialLink href="https://github.com/DeepTandel045" target="_blank" rel="noopener noreferrer" title="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </SocialLink>

        {/* LeetCode */}
        <SocialLink href="https://leetcode.com/u/Tandel_Deep_1906/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
          </svg>
        </SocialLink>

        {/* LinkedIn */}
        <SocialLink href="https://www.linkedin.com/in/deep-tandel" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </SocialLink>
      </SocialRow>

      <Divider />
      <Copy>
        © {year} <span>Deep Tandel</span>. Built with Next.js &amp; Styled Components.
      </Copy>
    </FooterWrapper>
  );
}
