import "./MyForm.css";
import { useState } from "react";
const MyForm = ({ user }) => {
  /* 6 - Controlled inputs */

  /* 3 - Gerenciamento de Dados */
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [Bio, setBio] = useState(user ? user.Bio : "");
  const [Role, setRole] = useState(user ? user.Role : "");

  const handleName = (e) => {
    setName("e.target.value");
  };

  /*console.log(name);
  console.log(email);*/

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando Formulário");
    console.log(name, email, Bio, Role);
    /* 7 - Limpar formulário */
    setName("");
    setEmail("");
    setBio("");
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
            onChange={handleName}
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
        {/* 8 - Textarea*/}
        <label>
          <span>Bio:</span>
          <textarea
            name="Bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={Bio}
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema:</span>
          <select
            name="Role"
            onChange={(e) => setRole(e.target.value)}
            value={Role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrator</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
