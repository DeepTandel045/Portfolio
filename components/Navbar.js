'use client';

import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 1rem;
  margin: 0 auto;
  width: min(1120px, calc(100% - 2rem));
  border-radius: 14px;
  z-index: 1000;
  padding: 0.95rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  background: rgba(21, 37, 39, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(14px);
  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: #152527;
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    `}
`;

const Logo = styled.a`
  font-size: 1.2rem;
  font-weight: 800;
  font-family: var(--font-display), sans-serif;
  letter-spacing: 0.04em;
  color: #f8fafc;
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 260px;
    background: #152527;
    backdrop-filter: blur(20px);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding: 5rem 2rem 2rem;
    gap: 1.5rem;
  }
`;

const NavLink = styled.a`
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #FF9FFC, #5227FF);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #f8fafc;
    &::after {
      width: 100%;
    }
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  z-index: 1100;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  background: #ecf6f2;
  transition: all 0.3s ease;

  ${({ $open, $pos }) =>
    $open &&
    $pos === 'top' &&
    css`transform: translateY(7px) rotate(45deg);`}
  ${({ $open, $pos }) =>
    $open && $pos === 'mid' && css`opacity: 0; transform: scaleX(0);`}
  ${({ $open, $pos }) =>
    $open &&
    $pos === 'bot' &&
    css`transform: translateY(-7px) rotate(-45deg);`}
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;



const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Activity', href: '#activity' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <Logo href="#hero">DeepTandel.dev</Logo>
      <NavActions>
        <NavLinks $open={open}>
          {links.map((l) => (
            <li key={l.label}>
              <NavLink href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </NavLinks>
        <HamburgerBtn onClick={() => setOpen(!open)} aria-label="menu">
          <Bar $open={open} $pos="top" />
          <Bar $open={open} $pos="mid" />
          <Bar $open={open} $pos="bot" />
        </HamburgerBtn>
      </NavActions>
    </Nav>
  );
}

