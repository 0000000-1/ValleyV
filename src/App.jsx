import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Main from "./pages/Main"
import Cart from "./components/Cart"
import AuthComponent from "./pages/Auth"
import { useState } from "react"


function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/auth" element={<AuthComponent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
