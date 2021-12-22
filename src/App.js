import { Navbar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import JourneyPage from "./pages/JourneyPage/JourneyPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Home />
      <JourneyPage />
    </Router>
  );
}

export default App;
