import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectsGrid from '@/components/ProjectsGrid';
import AchievementsTimeline from '@/components/AchievementsTimeline';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-white flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <ProjectsGrid />
      <AchievementsTimeline />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
