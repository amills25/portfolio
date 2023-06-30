"use client";

import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#61DBFB]/80 mt-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt=""
              className="h-64"
            />

            <div className="max-w-6xl px-0 space-y-6 md:px-10">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#61DBFB]/50">
                  Project {i + 1} of {projects.length}: {project.title}
                </span>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((tech) => (
                  <img
                    className="h-10 w-10 object-cover"
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-md text-center">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#61DBFB]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
