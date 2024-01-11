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
          <Route
            exact
            path="/"
            element={<Home url="http://127.0.0.1:8000/api/v1/post/" />}
          />
          <Route path="/posts/:id" element={<Post />} />
          <Route
            path="/category/:id"
            element={<Home url="http://127.0.0.1:8000/api/v1/post/" />}
          />
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
