import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
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
          <Route path="/category/:id" element={<Category />} />
          <Route path="posts/:name" element={<Home />} />
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
