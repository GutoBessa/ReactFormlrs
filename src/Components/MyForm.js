import "./MyForm.css";
import { useState } from "react";
const MyForm = ({ user }) => {
  /* 6 - Controlled inputs */

  /* 3 - Gerenciamento de Dados */
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const atualName = (e) => {
    setName("e.target.value");
  };

  /*console.log(name);
  console.log(email);*/

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando Formulário");
    console.log("email");
    console.log("name");
  };
  return (
    <div>
      {/* 5 - envio de form */}
      <form onSubmit={handleSubmit}></form>
      {/*1 Criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome aqui"
            onChange={atualName}
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>Email:</span>
          {/* 4 - Simplificação de manipulação de state*/}
          <input
            type="email"
            name="email"
            placeholder="Digite seu email."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
