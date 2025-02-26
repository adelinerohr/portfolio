import { AboutSection } from "./components/about-section";
import { FavoriteProjects } from "./components/favorite-projects";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { SectionTwo } from "./components/section-two";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <SectionTwo />
      <AboutSection />
      <FavoriteProjects />
      <Footer />
    </div>
  )
}
