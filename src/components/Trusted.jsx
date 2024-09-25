import "../assets/Trusted.scss";
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
      <div className="trusted-div">
        <h6>POPULAR CLIENTS</h6>
        <h2 className="trusted-title">Trusted by over 10,000+ clients</h2>
        <div className="wrap-trusted">
          {imgBrands.map((brand, index) => (
            <img key={index} src={brand.url} alt={brand.name} />
          ))}
        </div>
      </div>
    </>
  );
}
