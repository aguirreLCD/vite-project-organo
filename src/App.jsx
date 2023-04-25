import { useState } from "react";
import Banner from "./components/Banner/Banner.jsx";
import Form from "./components/Form";
import Team from "./components/Team/index.jsx";
import Footer from "./components/Footer/index.jsx";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      teamName: "Programming",
      color: "#57c278",
    },

    {
      id: uuidv4(),
      teamName: "Front-End",
      color: "#82cffa",
    },

    {
      id: uuidv4(),
      teamName: "Data-science",
      color: "#a6d157",
    },
    {
      id: uuidv4(),
      teamName: "Devops",
      color: "#e06b69",
    },

    {
      id: uuidv4(),
      teamName: "UX & Design",
      color: "#db6ebf",
    },

    {
      id: uuidv4(),
      teamName: "Mobile",
      color: "#ffba05",
    },

    {
      id: uuidv4(),
      teamName: "Innovation & Management",
      color: "#ff8a29",
    },
  ]);

  const initialContent = [
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].teamName,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].teamName,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].teamName,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].teamName,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].teamName,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].teamName,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].teamName,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].teamName,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].teamName,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].teamName,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].teamName,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].teamName,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].teamName,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].teamName,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].teamName,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].teamName,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].teamName,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].teamName,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].teamName,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].teamName,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].teamName,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].teamName,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      profilePicture:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].teamName,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      profilePicture:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].teamName,
    },
  ];

  const [collaborators, setCollaborators] = useState(initialContent);

  function deleteCollaborator(id) {
    // console.log("deleting...");
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id)
    );
  }

  function changeTeamColors(color, id) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      })
    );
  }

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
            whenDeleting={deleteCollaborator}
            changeColor={changeTeamColors}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default App;
