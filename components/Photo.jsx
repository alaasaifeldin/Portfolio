"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[340px] ml-3 h-[340px] xl:w-[310px] xl:h-[310px] mix-blend-lighten absolute"
        >
          <Image
            src="/Photo1.png"
            priority
            quality={100}
            fill
            alt="Mahmoud Gado"
            className="object-contain"
            draggable="false"
          />
        </motion.div>

        <motion.svg
          className={"w-[400px] h-[400px] xl:w-[366px] xl:h-[366px]"}
          fill={"transparent"}
          viewBox={"0 0 506 506"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke={"#00ff99"}
            strokeWidth={"4"}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
              rotate:[120,360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
