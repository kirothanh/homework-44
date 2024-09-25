import "../assets/Contact.scss";
export default function Contact() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="contact-div">
        <div className="content">
          <h1>Contact us</h1>
          <p className="sub-title">
            Ready to get started? Feel free to reach out through the contact
            form, and let&apos;s embark on a journey of innovation and success.
          </p>
        </div>

        <div className="contact-content">
          <div className="box-wrap">
            <div className="left">
              <h4>Contact Information</h4>
              <p className="sub">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <div className="iconWrap">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"></path>
                  </svg>
                </div>
                <h6>+1(424) 535 3523</h6>
              </div>
              <div className="iconWrap">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                  </svg>
                </div>
                <h6>hello@mail.com</h6>
              </div>
              <div className="iconWrap">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
                  </svg>
                </div>
                <h6>Open Support Ticket</h6>
              </div>
            </div>
            <div className="right">
              <form action="" onSubmit={handleSubmitForm}>
                <div className="wrap-name">
                  <div className="first-name">
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      name="first-name"
                      id="fname"
                      placeholder="eg. Lucas"
                    />
                  </div>
                  <div className="last-name">
                    <label htmlFor="lname">Last Name</label>
                    <input
                      type="text"
                      name="last-name"
                      id="lname"
                      placeholder="eg. Jones"
                    />
                  </div>
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="eg. lucas@gmail.com"
                  />
                </div>
                <p className="sub-form">What are you interested on?</p>
                <div className="checkbox-wrap">
                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      value="option1"
                      id="radio1"
                    />
                    <label className="form-check-label" htmlFor="radio1">
                      Design
                    </label>
                  </div>

                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      value="option2"
                      id="radio2"
                    />
                    <label className="form-check-label" htmlFor="radio2">
                      Development
                    </label>
                  </div>

                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      value="option3"
                      id="radio3"
                    />
                    <label className="form-check-label" htmlFor="radio3">
                      Support
                    </label>
                  </div>

                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      value="option4"
                      id="radio4"
                    />
                    <label className="form-check-label" htmlFor="radio4">
                      Other
                    </label>
                  </div>
                </div>
                <div className="message">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message"></textarea>
                </div>
                <button className="btn-send">send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
