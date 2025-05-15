import { Route, Routes } from "react-router-dom";
import Collections from "./pages/Collections";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/sharedComponents/Navbar";
import MobileMenu from "./components/sharedComponents/MobileMenu";
import { useContext, useState } from "react";
import Cart from "./components/Cart";
import { cartProvider } from "./context/CartContext";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const { isCartOpen, lightbox, setLightbox } = useContext(cartProvider);
  const closeLightbox = ()=> setLightbox(false)

  return (
    <div className="w-[100vw]  mx-auto min-h-[100vh] lg:px-20">
      {lightbox && <div className=" hidden lg:block lightbox-container" onClick={closeLightbox}></div>}
      {isMobile && <MobileMenu setIsMobile={setIsMobile} />}
      <Navbar setIsMobile={setIsMobile} />
      {isCartOpen && <Cart />}
      <Routes>
        <Route path="/" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
