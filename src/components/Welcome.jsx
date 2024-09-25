import welcomeImage from "../assets/img/image-7.svg";
import "../assets/Welcome.scss";

export default function Welcome() {
  const handleClickInput = () => {
    const inputWelcome = document.querySelector(".wrap-input input");
    const spanInput = document.querySelector(".wrap-input span");

    spanInput.style.top = "-7px";
    spanInput.style.left = "10px";
    spanInput.style.fontSize = "10px";
    spanInput.style.padding = "0px 5px";
    spanInput.style.backgroundColor = "white";
    inputWelcome.style.border = "1px solid #000";
  };
  const handleBlurInput = () => {
    const spanInput = document.querySelector(".wrap-input span");
    const inputWelcome = document.querySelector(".wrap-input input");

    spanInput.style.top = "15px";
    spanInput.style.left = "12px";
    spanInput.style.fontSize = "12px";
    inputWelcome.style.border = "1px solid #ccc";
  };
  return (
    <>
      <div className="row row-cols-lg-2 welcome-wrap">
        <div className="col-12 col-lg-6 ">
          <h1 className="welcome-title">
            Welcome to my Web Development Portofolio!
          </h1>
          <p className="welcome-desc">
            I&apos;m Lily Smith, a passionate web developer based in USA. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>
          <div className="welcome-input">
            <p>Your email</p>
            <div className="request-email">
              <div className="wrap-input">
                <input
                  type="text"
                  onFocus={handleClickInput}
                  onBlur={handleBlurInput}
                />
                <span>Enter your email</span>
              </div>
              <button className="btn-require">require offer</button>
            </div>
          </div>
          <p className="term">
            Read my <span>Terms and Conditions</span>
          </p>
        </div>
        <div className="col-12 col-lg-6 right">
          <img src={welcomeImage} alt="welcome image" />
        </div>
      </div>
    </>
  );
}
