function ProjectForm({ addProject }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-md">

        <input
          placeholder="Project Title"
          className="w-full p-2 border rounded mb-2"
        />

        <input
          placeholder="Project Description"
          className="w-full p-2 border rounded mb-3"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Add Project
        </button>

      </div>
    </div>
  );
}

export default ProjectForm;