import { Navbar } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import JourneyPage from "./pages/JourneyPage/JourneyPage";
import { ThemeProvider } from 'styled-components'
import Portafolio from "./pages/Portafolio/Portafolio";
import Contact from "./pages/Contact/Contact";
import { Footer } from "./components/Footer";

const theme = {
  colors: {
    primary: "#20CE65",
    secondary: '#ffc514',
    bg_color: "#19232B",
    bg_color_ligth: "#202D37",
  },
  media: {
    medium: "768px"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Home />
        <JourneyPage />
        <Portafolio />
        <Contact />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
