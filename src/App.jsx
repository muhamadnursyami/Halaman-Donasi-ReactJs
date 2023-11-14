import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Donasi from "./pages/Halaman-Donasi/Donasi";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* routing halaman */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/halaman-donasi" element={<Donasi />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
