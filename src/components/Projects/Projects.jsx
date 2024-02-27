import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="mt-9 lg:mt-20" id="projects">
      <h2 className=" text-4xl font-bold uppercase leading-[1.4]">Projects</h2>
      <div className=" mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
