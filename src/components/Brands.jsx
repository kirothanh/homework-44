import "../assets/Brands.scss";
import coinbase from "../assets/img/logo-coinbase.svg";
import spotify from "../assets/img/logo-spotify.svg";
import pinterest from "../assets/img/logo-pinterest.svg";
import google from "../assets/img/logo-google.svg";
import amazon from "../assets/img/logo-amazon.svg";
import netflix from "../assets/img/logo-netflix.svg";

export default function Brands() {
  const imgBrands = [
    { url: coinbase, name: "coinbase" },
    { url: spotify, name: "spotify" },
    { url: pinterest, name: "pinterest" },
    { url: google, name: "google" },
    { url: amazon, name: "amazon" },
    { url: netflix, name: "netflix" },
  ];

  return (
    <>
      <div className="brands-div">
        <h6 className="brands-title">My awesome clients</h6>
        <div className="wrap-brands">
          {imgBrands.map((brand, index) => (
            <img key={index} src={brand.url} alt={brand.name} />
          ))}
          {/* <img src={coinbase} alt="coinbase" />
          <img src={spotify} alt="spotify" />
          <img src={pinterest} alt="pinterest" />
          <img src={google} alt="google" />
          <img src={amazon} alt="amazon" />
          <img src={netflix} alt="netflix" /> */}
        </div>
      </div>
    </>
  );
}
