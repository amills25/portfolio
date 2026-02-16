import { urlFor } from "@/sanity";
import type { Skill } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="relative flex">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        alt=""
        className="object-cover w-20 h-20 border border-gray-500 rounded-full"
      />

      {/* <div className="absolute z-0 w-20 h-20 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Skill;
