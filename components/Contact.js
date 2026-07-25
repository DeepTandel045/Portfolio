'use client';

import { useState } from 'react';
import styled from 'styled-components';
import DotField from './DotField';

const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
`;

const Inner = styled.div`
  width: min(1120px, 92vw);
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  margin-bottom: 1rem;
  font-family: var(--font-display), sans-serif;

  span {
    background: linear-gradient(90deg, #FF9FFC, #B497CF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.p`
  color: #e2e8f0;
  font-size: 1.05rem;
  margin-bottom: 3rem;
  max-width: 500px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ContactInfo = styled.div``;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.4rem;
  background: #152527;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;
  margin-bottom: 1rem;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background: #1e3538;
    transform: translateX(4px);
  }
`;

const InfoIcon = styled.div`
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  color: #FF9FFC;
`;

const InfoText = styled.div`
  p:first-child {
    color: #FF9FFC;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.15rem;
  }
  p:last-child {
    color: #ffffff;
    font-size: 0.92rem;
    font-weight: 600;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const SocialBtn = styled.a`
  width: 44px;
  height: 44px;
  background: #152527;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  color: #cbd5e1;

  &:hover {
    background: #1e3538;
    border-color: rgba(255, 255, 255, 0.4);
    color: #FF9FFC;
    transform: translateY(-3px);
  }
`;

const Form = styled.form`
  background: #152527;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  display: block;
  color: #cbd5e1;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.45rem;
`;

const inputStyle = `
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(15, 27, 29, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  color: #ffffff;
  font-size: 0.9rem;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  outline: none;
  font-family: inherit;

  &:focus {
    background: #152527;
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const Input = styled.input`${inputStyle}`;
const Textarea = styled.textarea`
  ${inputStyle}
  resize: vertical;
  min-height: 130px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: #152527;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);

  &:hover:not(:disabled) {
    background: #1e3538;
    border-color: rgba(255, 255, 255, 0.45);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StatusMsg = styled.p`
  text-align: center;
  margin-top: 0.8rem;
  font-size: 0.9rem;
  color: ${({ $type }) => ($type === 'success' ? '#60a5fa' : '#fca5a5')};
`;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const recipientEmail = 'tandeldeep6106@gmail.com';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        if (result.fallbackMailto) {
          const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
            form.subject || 'Portfolio Inquiry'
          )}&body=${encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
          )}`;
          window.location.href = mailtoUrl;
          setStatus({
            type: 'success',
            msg: 'Opening your mail client to send message directly...',
          });
        } else {
          setStatus({ type: 'success', msg: result.message || 'Message sent successfully! I will get back to you soon.' });
        }
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setLoading(false);
      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
        form.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus({
        type: 'success',
        msg: 'Opening your email client to send message...',
      });
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <Section id="contact" className="reveal">
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.95 }}>
        <DotField
          dotRadius={2.2}
          dotSpacing={14}
          bulgeStrength={70}
          glowRadius={180}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={650}
          cursorForce={0.18}
          bulgeOnly
          gradientFrom="rgba(35, 35, 48, 0.95)"
          gradientTo="rgba(65, 65, 80, 0.85)"
          glowColor="rgba(0, 0, 0, 0.6)"
        />
      </div>
      <Inner>
        <SectionLabel>Let&apos;s talk</SectionLabel>
        <SectionTitle>
          Get In <span>Touch</span>
        </SectionTitle>
        <Subtitle>
          Have a project in mind or just want to connect? Fill the form and I will respond soon.
        </Subtitle>
        <Grid>
          <ContactInfo>
            <InfoItem href="mailto:tandeldeep6106@gmail.com">
              <InfoIcon>✉</InfoIcon>
              <InfoText>
                <p>Email</p>
                <p>tandeldeep6106@gmail.com</p>
              </InfoText>
            </InfoItem>
            <InfoItem href="mailto:tandeldeep6106@gmail.com?subject=Phone%20Inquiry">
              <InfoIcon>☎</InfoIcon>
              <InfoText>
                <p>Phone</p>
                <p>Available on request</p>
              </InfoText>
            </InfoItem>
            <InfoItem href="#contact" aria-label="Location">
              <InfoIcon>📍</InfoIcon>
              <InfoText>
                <p>Location</p>
                <p>Gujarat, India</p>
              </InfoText>
            </InfoItem>
            <SocialRow>
              <SocialBtn href="https://github.com/DeepTandel045" target="_blank" rel="noopener noreferrer" title="GitHub">
                GH
              </SocialBtn>
              <SocialBtn href="https://www.linkedin.com/in/deep-tandel" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                IN
              </SocialBtn>
              <SocialBtn href="mailto:tandeldeep6106@gmail.com" title="Email">
                ✉
              </SocialBtn>
            </SocialRow>
          </ContactInfo>

          <Form onSubmit={handleSubmit}>
            <FormRow>
              <Field>
                <Label>Name</Label>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Field>
            </FormRow>
            <Field>
              <Label>Subject</Label>
              <Input
                name="subject"
                placeholder="Project Inquiry"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <Label>Message</Label>
              <Textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </Field>
            <SubmitBtn type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </SubmitBtn>
            {status && <StatusMsg $type={status.type}>{status.msg}</StatusMsg>}
          </Form>
        </Grid>
      </Inner>
    </Section>
  );
}

