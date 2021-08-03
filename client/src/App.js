import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./pages/Nav";
import Categories from "./pages/Categories";
import Footer from "./pages/Footer";
import Logo from "./pages/Jumbotron";

function App() {
  return (
    <Router>
      <Container>
        <Logo />
        <Nav />
        <Categories />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
