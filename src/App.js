import "./App.css";
import MyForm from "./Components/MyForm";

function App() {
  return (
    <div className="App">
      <script src="http://localhost:3001"></script>
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Luiz Augusto Bessa",
          email: "luiz-augustosouza@hotmail.com",
        }}
      />
    </div>
  );
}

export default App;
