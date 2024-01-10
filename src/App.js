import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/pages/Home";
import Post from "./components/pages/Post";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
