function ProjectCard({ project }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-200">

      <h3 className="text-xl font-bold text-gray-800">
        {project.title}
      </h3>

      <p className="text-gray-600 mt-2">
        {project.description}
      </p>

      <div className="mt-4 flex gap-2">
        <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          View
        </button>

        <button className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>

    </div>
  );
}

export default ProjectCard;