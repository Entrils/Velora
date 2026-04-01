import { useMemo, useState } from "react";
import ProjectModal from "../components/ProjectModal";
import StudioHeader from "../components/StudioHeader";
import AboutSection from "../sections/AboutSection";
import ConfiguratorSection from "../sections/ConfiguratorSection";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import ReviewsSection from "../sections/ReviewsSection";
import ServicesSection from "../sections/ServicesSection";
import { projects } from "../assets/siteContent";

function HomePage({ theme, onToggleTheme }) {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [selectedProjectId]
  );

  return (
    <>
      <StudioHeader theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection onSelectProject={setSelectedProjectId} />
        <ReviewsSection />
        <ServicesSection />
        <ConfiguratorSection />
        <ContactSection />
      </main>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </>
  );
}

export default HomePage;