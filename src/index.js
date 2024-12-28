import React from "react";
import ReactDOM from "react-dom/client";

import data from "./data.js";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "blue",
    fontSize: "50px",
    textTransform: "uppercase",
  };
  return <h1 style={style}>Warung Bumi Indonesia</h1>;
}

function Menu() {
  const foods = data;
  // const foods = [];
  const numFoods = foods.length;
  return (
    <main className="menu">
      <h2>Menu :</h2>
      {numFoods > 0 ? (
        <>
          <p>
            Aneka makanan indonesia yang disajikan oleh warung bumi indonesia
            sebagai pemenuhan makanan kesehatan yang diperlukan dalam kehidupan
            sehari-hari
          </p>
          <ul className="foods">
            {data.map((food) => (
              <Food foodObj={food} key={food.nama} />
            ))}
          </ul>
        </>
      ) : (
        <p>Kosong, Datang lagi besok</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterCloseHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warung Bumi Indonesia | Open {jamBuka}.00 -
          Close {jamTutup}.00
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}
function FooterCloseHour({ jamBuka }) {
  return (
    <footer className="footer">
      <p>Maaf, Masih Tutup, Dateng lagi jam {jamBuka}.00 </p>
    </footer>
  );
}

function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width={100} height={70} />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>

        <span>{stok ? harga : "Habis"}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
