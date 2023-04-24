import { useState } from "react";
import Banner from "./components/Banner/Banner.jsx";
import Form from "./components/Form";
import Team from "./components/Team/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  const teams = [
    {
      teamName: "Programming",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },

    {
      teamName: "Front-End",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },

    {
      teamName: "Data-science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      teamName: "Devops",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },

    {
      teamName: "UX & Design",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },

    {
      teamName: "Mobile",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
    },

    {
      teamName: "Innovation & Management",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ];

  const initialContent = [
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].teamName,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].teamName,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].teamName,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].teamName,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].teamName,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].teamName,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].teamName,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].teamName,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].teamName,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].teamName,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].teamName,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].teamName,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].teamName,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].teamName,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].teamName,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].teamName,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].teamName,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].teamName,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].teamName,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].teamName,
    },
    {
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].teamName,
    },
    {
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].teamName,
    },
    {
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].teamName,
    },
    {
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].teamName,
    },
  ];

  const [collaborators, setCollaborators] = useState(initialContent);

  return (
    <div className="App">
      <Banner />

      <Form
        teams={teams.map((team) => team.teamName)}
        whenRegistering={(collaborator) =>
          setCollaborators([...collaborators, collaborator])
        }
      />
      <section className="teams">
        <h1>Squads</h1>

        {teams.map((team, index) => (
          <Team
            key={index}
            team={team}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === team.teamName
            )}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default App;
