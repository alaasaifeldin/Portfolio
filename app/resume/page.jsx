"use client";
import { FaLinux, FaDocker, FaPython, FaGitAlt } from "react-icons/fa";
import { SiAnsible, SiGnubash, SiCisco, SiJenkins } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const about = {
  title: "About Me",
  description:
    "Motivated and detail-oriented Junior DevOps Engineer with hands-on experience in Linux systems, Docker, Ansible, and networking (CCNA). Passionate about infrastructure automation, CI/CD practices, and cloud-native tools to improve reliability and efficiency.",
  info: [
    { fieldName: "Name", fieldValue: "Alaa Sherif Abdelhamid" },
    { fieldName: "Role", fieldValue: "DevOps Engineer" },
    { fieldName: "Nationality", fieldValue: "Egyptian" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Phone", fieldValue: "+201125098250" },
    { fieldName: "Email", fieldValue: "alaasherifsaifeldin@gmail.com" },
    { fieldName: "Address", fieldValue: "Alexandria, Egypt" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "Practical projects and training experience in DevOps, automation, and networking.",
  items: [
    {
      position: "Containerized Web App with Docker",
      company: "Personal Project",
      duration: "06/2025",
    },
    {
      position: "Linux Automation with Ansible",
      company: "Personal Project",
      duration: "05/2025",
    },
    {
      position: "Network Simulation – CCNA Level",
      company: "Cisco Packet Tracer",
      duration: "11/2022",
    },
    {
      position: "Python File Organizer Script",
      company: "Personal Project",
      duration: "10/2021",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "Academic studies and certifications in computing, networking, and DevOps.",
  items: [
    {
      institution: "Alexandria University",
      degree: "B.Sc. in Computing and Data Science",
      duration: "2021 - 2025",
    },
    {
      institution: "Cisco",
      degree: "CCNA – Cisco Certified Network Associate",
      duration: "2023",
    },
    {
      institution: "Udemy",
      degree: "Python Programming & OOP Certificate",
      duration: "2024",
    },
    {
      institution: "Cisco",
      degree: "Network Essentials",
      duration: "2022",
    },
    {
      institution: "Pearson",
      degree: "IT Management Certificate",
      duration: "2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Hands-on experience with DevOps tools, automation, and networking, focusing on Linux, containerization, scripting, and CI/CD practices.",
  skillList: [
    { icon: <FaLinux />, name: "Linux" },
    { icon: <SiGnubash />, name: "Bash Scripting" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiAnsible />, name: "Ansible" },
    { icon: <SiCisco />, name: "Networking (CCNA)" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaGitAlt />, name: "Git & GitHub" },
    { icon: <SiJenkins />, name: "CI/CD (Jenkins)" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Sidebar Tabs */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{experience.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-md max-w-[240px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h2 className="text-4xl font-bold">{education.title}</h2>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-md max-w-[240px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
