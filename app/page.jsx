
import DownloadButton from "@/components/DownloadButton";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-3 xl:pb-20">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">DevOps Engineer</span>
            <h1 className="h2 mt-3 mb-6 ">Hello I'm <br /><span className="text-accent">Alaa Sherif</span></h1>
            <p className="max-w-[500px] mb-6 text-white/80">
              I specialize in bridging the gap between development and operations 
              by building scalable infrastructure, automating workflows, and 
              streamlining CI/CD pipelines. With hands-on experience in tools like 
              Docker, Kubernetes, and cloud platforms, I ensure reliable and 
              efficient software delivery.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadButton/>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
}
