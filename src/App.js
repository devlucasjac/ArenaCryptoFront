import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/pages/Home";
import Category from "./components/pages/Category";
import Post from "./components/pages/Post";
import NamePost from "./components/pages/NamePost";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar/index.js";
import Footer from "./components/layout/Footer/index.js";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="posts/name/:name" element={<NamePost />} />
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
