
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-neutral-dark text-neutral-light font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Problems />
        <Solutions />
        <Projects />
        <Differentiators />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
