import { useState } from 'react';

import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import ProjectForm from './Components/ProjectForm';
import ProjectList from './Components/ProjectList';

function App() {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Platform",
      description: "Modern React portfolio application"
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Online shopping web application"
    }
  ]);

  const [search, setSearch] = useState("");

  function addProject(project) {
    setProjects([
      ...projects,
      {
        ...project,
        id: Date.now()
      }
    ]);
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">

      <div className="max-w-6xl mx-auto p-6">

        <Header />

        <SearchBar setSearch={setSearch} />

        <ProjectForm addProject={addProject} />

        <ProjectList
          projects={filteredProjects}
          deleteProject={deleteProject}
        />

      </div>

    </div>
  );
}

export default App;