import { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import ProjectForm from './Components/ProjectForm';
import ProjectList from './Components/ProjectList';

function App() {
  const [projects, setProjects] = useState([
    { title: "Portfolio Platform", description: "Personal portfolio" }
  ]);

  const [search, setSearch] = useState("");

  function addProject(project) {
    setProjects([...projects, project]);
  }

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <Header />

      <SearchBar setSearch={setSearch} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />

    </div>
  );
}

export default App;