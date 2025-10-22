import Navigation from './components/Navigation';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import CoursesSection from './components/CoursesSection';
import EnterpriseSection from './components/EnterpriseSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <IntroSection />
        <CoursesSection />
        <EnterpriseSection />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
