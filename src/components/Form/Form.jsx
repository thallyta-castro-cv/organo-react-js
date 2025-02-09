

import TextField from '../TextField';

export const Form = (props) => {
  return (
    <section className='form'>
      <form action="">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da sua imagem" />
      </form>
    </section>
  );
};
