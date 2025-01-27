"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSide, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    Title: "Skin Cancer",
    description: "Developed a project for detect Skin Cancer  ",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "React.js" },
    ],
    image: "/assets/work/skin.png",
    live: "https://skin-cancer-1.vercel.app/",
    github: "https://github.com/MahmoudGado1/Skin-Cancer",
  },
  {
    num: "02",
    category: "Frontend",
    Title: "Food Order",
    description: "Developed a project for order food",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Firebase" },
    ],
    image: "/assets/work/food.png",
    live: "https://food-order-add-to-chart-2nvg.vercel.app/",
    github: "https://github.com/MahmoudGado1/Food-Order-AddToChart",
  },
  {
    num: "03",
    category: "Frontend",
    Title: "Todo List",
    description: "Todo List for add tasks",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "React.js" },
    ],
    image: "/assets/work/todo.png",
    live: "https://to-do-list-app-beta-three.vercel.app",
    github: "https://github.com/MahmoudGado1/To-Do-List-APP",
  },
  {
    num: "04",
    category: "Full Stack",
    Title: "E-commerce Platform",
    description: "Developed a full-featured e-commerce platform.",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Tailwincss" },
      { name: "Node.Js" },
      { name: "MongoDB" },
      { name: "Express.js" },
    ],
    image: "/assets/work/ecomm.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Full Stack",
    Title: "Hospital Management System",
    description: "Developed a hospital system for manage tasks.",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Node.Js" },
      { name: "MongoDB" },
      { name: "Express.js" },
    ],
    image: "/assets/work/hosp.png",
    live: "",
    github: "https://github.com/MahmoudGado1/Hospital-System",
  }
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[260px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col justify-center gap-[30px] h-[60%]">
              <div className="text-8xl font-extrabold leading-none text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-10.5 xl:leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap  gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent group-hover:rotate-45 transition-transform duration-500 " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Site</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent group-hover:scale-125 transition-transform duration-500 " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] rounded-xl">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-xl"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.Title}
                        className="w-full h-full rounded-xl"
                        draggable="false"
                        height={1000}
                        width={1000}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                }
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                }
                iconStyles={"w-6 h-6"}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
