import ProjectCard from "./ProjectCard";

function ProjectList({ projects, deleteProject }) {

  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
      "
    >

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          deleteProject={deleteProject}
        />
      ))}

    </div>
  );
}

export default ProjectList;