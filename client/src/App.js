import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from "./pages/Categories";
import Footer from "./pages/Footer";
import Logo from "./pages/Jumbotron";

function App() {
  return (
    <Router>
      <Container>
        <Logo />
        <Categories />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
