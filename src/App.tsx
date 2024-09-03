import "./App.css";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "./service/ProjectService";
import { useEffect } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

function App() {
  const { data, loading } = useQuery(GET_DATA);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Carregando...</p>;

  return (
    <main>
      <section>
        <h2>Sobre mim</h2>
        <About {...data.user} />
      </section>

      <section>
        <h2>Projetos</h2>

        {data.projects.map((project: Project) => (
          <Project key={project.id} {...project} />
        ))}
      </section>
    </main>
  );
}

export default App;
