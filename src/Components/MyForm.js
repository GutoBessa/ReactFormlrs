import "./MyForm.css";

const MyForm = () => {
  return (
    <div>
      {" "}
      {/*1 Criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome aqui" />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
