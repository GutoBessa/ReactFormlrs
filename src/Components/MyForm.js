import "./MyForm.css";
import { useState } from "react";
const MyForm = () => {
  /* 3 - Gerenciamento de Dados */
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const atualName = (e) => {
    setName("e.target.value");
  };

  console.log(name);
  console.log(email);
  return (
    <div>
      {" "}
      {/*1 Criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome aqui"
            onChange={atualName}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email."
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
