import Navbar         from '@/components/Navbar';
import Hero           from '@/components/Hero';
import About          from '@/components/About';
import Services       from '@/components/Services';
import WhyUs          from '@/components/WhyUs';
import Stats          from '@/components/Stats';
import Contact        from '@/components/Contact';
import Footer         from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
