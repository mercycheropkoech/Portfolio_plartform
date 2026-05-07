import { useState } from "react";

function ProjectForm({ addProject }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    addProject({
      title,
      description
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        p-6
        rounded-3xl
        shadow-xl
        mb-10
        max-w-2xl
        mx-auto
      "
    >

      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Add New Project
      </h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
          w-full
          p-3
          border
          rounded-xl
          mb-4
          outline-none
          focus:ring-2
          focus:ring-blue-400
        "
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="
          w-full
          p-3
          border
          rounded-xl
          mb-4
          outline-none
          focus:ring-2
          focus:ring-blue-400
        "
      />

      <button
        className="
          w-full
          bg-blue-500
          text-white
          py-3
          rounded-xl
          hover:bg-blue-600
          transition
          font-semibold
        "
      >
        Add Project
      </button>

    </form>
  );
}

export default ProjectForm;