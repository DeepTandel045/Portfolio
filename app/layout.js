import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

export const metadata = {
  title: 'Deep Tandel | Frontend Developer & Software Engineer',
  description: 'Portfolio of Deep Tandel - Frontend Developer & Software Engineer building responsive interfaces, web apps, and full-stack products.',
  keywords: ['Deep Tandel', 'Portfolio', 'Frontend Developer', 'Software Engineer', 'React', 'Next.js', 'Web Developer'],
  authors: [{ name: 'Deep Tandel' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
