import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    addProject({ title, description });

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
      />

      <input
        className="input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project Description"
      />

      <button className="btn">Add Project</button>
    </form>
  );
}

export default ProjectForm;