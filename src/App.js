import "./App.css";
import Header from "./sections/Header";
import Results from "./sections/Results";

function App() {
  return (
    <div className="main">
      <Header/>
      <Results/>
      <section className="footer"></section>
    </div>
  );
}

export default App;
