import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState } from "react";

function App() {

  const [employees, setEmployees] = useState([]);

  const onNewRegisterEmployees = (employee) => {
    setEmployees([...employees, employee]);
  }

  return (
    <div className="App">
      <Banner />
      <Form onRegisterEmployees={employee => onNewRegisterEmployees(employee)} />
    </div>
  );
}

export default App;
