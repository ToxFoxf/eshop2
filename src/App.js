import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import Support from "./pages/support";
import Product_list from "./pages/productList";
import Layout from "./layouts/layout"
import Delivery from "./pages/delivery";
import Hi from "./pages/a"

function App() {
  return (
    <div>
      <Router>
        <Layout>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/basket" element={<Basket/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/productList" element={<Product_list/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/hi" element={<Hi/>} />
        </Routes>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
