import { useState } from "react";
import "../assets/Say.scss";
import avatar1 from "../assets/img/avatar1.jpg";
import avatar2 from "../assets/img/avatar2.jpg";
import avatar3 from "../assets/img/avatar3.jpg";

export default function Say() {
  const [currentImg, setCurrentImg] = useState(avatar1);

  const handleImageClick = (imgSrc) => {
    setCurrentImg(imgSrc);
  };

  return (
    <>
      <div className="say-div">
        <div className="content">
          <h2>what clients say</h2>
          <p>
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </p>
        </div>
        <div className="img-wrap">
          <div className="left">
            <h3>mobile app development</h3>
            <p className="sub-title">
              I had the pleasure of working with Lily on a critical web
              development project, and I can confidently say that their
              expertise and professionalism exceeded my expectations.
            </p>
            <h6>Michael - Technical Manager</h6>
            <p className="desc-title">Marketing @ APPLE INC.</p>
            <div className="img-box">
              <img
                src={avatar1}
                alt=""
                onClick={() => handleImageClick(avatar1)}
              />
              <div className="border-vertical"></div>
              <img
                src={avatar2}
                alt=""
                onClick={() => handleImageClick(avatar2)}
              />
              <div className="border-vertical"></div>
              <img
                src={avatar3}
                alt=""
                onClick={() => handleImageClick(avatar3)}
              />
            </div>
          </div>
          <div className="right">
            <img className="rightImg" src={currentImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
