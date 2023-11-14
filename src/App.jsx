import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Donasi from "./pages/Halaman-Donasi/Donasi";
import Footer from "./components/Footer";
import DetailDonasiUang from "./pages/Halaman-Donasi/Donasi-Uang/Detail-Donasi-Uang";
import DetailDonasiBarang from "./pages/Halaman-Donasi/Donasi-Barang/Detail-Donasi-Barang";

function App() {
  return (
    <>
      {/* routing halaman */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/halaman-donasi" element={<Donasi />} />
        <Route
          path="/halaman-donasi/donasi-uang"
          element={<DetailDonasiUang />}
        />
        <Route
          path="/halaman-donasi/donasi-barang"
          element={<DetailDonasiBarang />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
