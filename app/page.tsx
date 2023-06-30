import React from "react";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchExperiences } from "@/utils/fetchExperiences";

type Props = {};

const Home = async () => {
  const experiences: Experience[] = await fetchExperiences();
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#61DBFB]/80">
      <Header socials={socials} />

      <section id="hero" className="snap-start scroll-smooth">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center scroll-smooth">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center scroll-smooth">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start scroll-smooth">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start scroll-smooth">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start scroll-smooth">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-center">
            <ChevronDoubleUpIcon className="w-10 h-10 rounded-full cursor-pointer filter grayscale hover:grayscale-0 animate-pulse" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
