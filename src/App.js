import "./App.css";
import MyForm from "./Components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Luiz Augusto Bessa",
          email: "luiz-augustosouza@hotmail.com",
          Bio: "Sou um advogado",
          Role: "admin",
        }}
      />
    </div>
  );
}

export default App;
