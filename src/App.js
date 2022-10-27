import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Page/Home";
import AllProduct from "./components/Page/AllProduct";
import SingleProduct from "./components/Page/SingleProduct";
import Login from "./components/Page/Login";
import Product from "./components/Page/Product";
import Add from "./components/Page/Add";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products/add"> Product </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Product />}>
          <Route path="list" element={<AllProduct />} />
          <Route path=":id" element={<SingleProduct />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
