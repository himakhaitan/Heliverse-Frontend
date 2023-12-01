import "./App.css";
import Header from "./sections/Header";
import Results from "./sections/Results";
import { useSelector } from "react-redux";
import Team from "./sections/Team";

function App() {
  const selectedUser = useSelector((state) => state.users.selectedUser);

  return (
    
    <div className="main">
      <Header />
      <Results />
      {(selectedUser.length !== 0) && <Team />}
    </div>
  );
}

export default App;
