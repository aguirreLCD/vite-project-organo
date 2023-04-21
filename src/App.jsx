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

  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdded = (collaborator) => {
    // debugger;
    // console.log("collaborator: ", collaborator);
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner />

      <Form
        teams={teams.map((team) => team.teamName)}
        registeredCollaborator={(collaborator) =>
          newCollaboratorAdded(collaborator)
        }
      />

      {teams.map((team) => (
        <Team
          key={team.teamName}
          teamName={team.teamName}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.teamName
          )}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
