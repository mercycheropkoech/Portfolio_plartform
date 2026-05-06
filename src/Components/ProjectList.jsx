import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div className="grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;