import "../assets/Footer.scss";

export default function Footer() {
  const footerList = ["home", "about us", "blog", "service", "subcribe"];

  return (
    <>
      <div className="footer-div">
        <p>© 2024 Made with Material Tailwind by Creative Tim.</p>
        <ul>
          {footerList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {/* <li>home</li>
          <li>about us</li>
          <li>blog</li>
          <li>service</li>
          <li>subcribe</li> */}
        </ul>
      </div>
    </>
  );
}
