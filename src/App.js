import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState } from "react";
import Team from "./components/Team"; 
import teams from "../src/components/Team/teams.js";


function App() {
  const [employees, setEmployees] = useState([]);

  const onNewRegisterEmployees = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        onRegisterEmployees={(employee) => onNewRegisterEmployees(employee)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          employees={employees.filter(e => e.level === team.name)}
        />
      ))}
    </div>
  );
}

export default App;
