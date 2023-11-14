import donasiUang from "../../assets/svg/donasi-uang.svg";
import donasiBarang from "../../assets/svg/donasi-barang.svg";

export default function Donasi() {
  return (
    <section>
      <div className="container  mt-5 mb-5 text-center text-md-start">
        <div className="row align-items-center">
          <img src={donasiUang} className="img-fluid" alt="donasi-uang" />
        </div>
        <div className="row align-items-center mt-4">
          <h3 className="fw-bold text-center text-md-start">Donasi Uang</h3>
          <p className="text-start">
            Dengan setiap donasi yang Anda berikan, kita dapat membuka pintu
            untuk lebih banyak kesempatan bagi mereka yang membutuhkan bantuan,
            memungkinkan mereka untuk meraih pendidikan yang lebih baik dan
            berkontribusi positif dalam masyarakat.
          </p>
        </div>
        <a
          style={{ backgroundColor: " #29AB92" }}
          className="btn btn-light  border-0 text-white rounded-pill shadow px-3 py-2 mb-5"
          href="#"
        >
          Mulai Donasi &rarr;
        </a>
        <div className="row align-items-center">
          <img src={donasiBarang} className="img-fluid" alt="donasi-uang" />
        </div>
        <div className="row align-items-center mt-4">
          <h3 className="fw-bold text-center text-md-start">Donasi Barang</h3>
          <p className="text-start">
            Dengan setiap sumbangan yang diberikan, kita membuka peluang yang
            lebih besar bagi individu yang memerlukan bantuan, memungkinkan
            mereka untuk mendapatkan akses ke sumber daya yang lebih baik dan
            memberikan dampak positif dalam komunitas mereka.
          </p>
        </div>
        <a
          style={{ backgroundColor: " #29AB92" }}
          className="btn btn-light  border-0 text-white rounded-pill shadow px-3 py-2"
          href="#"
        >
          Mulai Donasi &rarr;
        </a>
      </div>
    </section>
  );
}
