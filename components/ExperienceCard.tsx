import { urlFor } from "@/sanity";
import { Experience } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="p-2 flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full object-fill object-top"
        src={urlFor(experience.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{experience.company}</h4>
        <p className="mt-1 text-xl font-bold">{experience.jobTitle}</p>
        <div className="flex my-2 space-x-2">
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              src={urlFor(tech.image).url()}
              className="h-10 w-10 rounded-full object-cover"
            />
          ))}
        </div>
        <p className="py-3 text-gray-300 uppercase">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="ml-5 space-y-4 text-xs list-disc max-h-96 pr-5">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
