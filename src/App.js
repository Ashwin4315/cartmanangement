import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Products from "./components/Products"
import Cart from "./components/Cart"

function App() {
  return (
    <>
      <Header />

    

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>

      
    </>
  );
}

export default App;
