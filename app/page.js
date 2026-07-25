import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Activity from '@/components/Activity';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import IntroLoader from '@/components/IntroLoader';
import ScrollReveal from '@/components/ScrollReveal';
import Grainient from '@/components/Grainient';

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)' }}>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.6,
        }}
      >
        <Grainient
          color1="#FF9FFC"
          color2="#5227FF"
          color3="#B497CF"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <IntroLoader />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Activity />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
