import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;