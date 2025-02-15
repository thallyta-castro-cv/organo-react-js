import { useState } from "react";
import { Button } from "../Button/Button";
import SelectField from "../SelectField";
import TextField from "../TextField";

const people = [
  "Júnior",
  "Pleno",
  "Sênior",
  "Especialista",
  "Outro",
  "Estagiário",
  "Trainee",
];

export const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [level, setLevel] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    const employee = {
      name: name,
      role: role,
      image: image,
      level: level,
    };
    
    props.onRegisterEmployees(employee);
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          change={value => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          change={value => setRole(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
          value={image}
          change={value => setImage(value)}
        />
        <SelectField
          required={true}
          label="Selecione o nível"
          itens={people}
          value={level}
          change={value => setLevel(value)}
        />
        <Button text="Criar Card"></Button>
      </form>
    </section>
  );
};
