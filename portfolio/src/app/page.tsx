import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import EducationSection from "@/components/sections/EducationSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollInit from "@/components/ScrollInit";

export default function Home() {
  return (
    <>
      <ScrollInit />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <GitHubSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
