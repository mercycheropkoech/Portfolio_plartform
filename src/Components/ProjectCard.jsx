function ProjectCard({ project, deleteProject }) {

  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-xl
        p-6
        hover:scale-105
        transition
      "
    >

      <div className="mb-4">

        <div
          className="
            h-40
            rounded-2xl
            bg-gradient-to-r
            from-blue-400
            to-purple-500
          "
        ></div>

      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        {project.title}
      </h2>

      <p className="text-gray-600 mt-3">
        {project.description}
      </p>

      <button
        onClick={() => deleteProject(project.id)}
        className="
          mt-5
          bg-red-500
          text-white
          px-4
          py-2
          rounded-xl
          hover:bg-red-600
          transition
        "
      >
        Delete
      </button>

    </div>
  );
}

export default ProjectCard;