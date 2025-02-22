import "../assets/Header.scss";

export default function Header() {
  const handleClickIcon = function () {
    const hambergerIcon = document.querySelector(".hamberger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const headerResponsive = document.querySelector(".header-responsive");
    hambergerIcon.addEventListener("click", function () {
      closeIcon.style.display = "block";
      hambergerIcon.style.display = "none";
      headerResponsive.classList.add("open");
    });
    closeIcon.addEventListener("click", function () {
      hambergerIcon.style.display = "block";
      closeIcon.style.display = "none";
      headerResponsive.classList.remove("open");
    });
  };

  return (
    <>
      <div className="header">
        <div className="title-logo">Material Tailwind</div>
        <ul className="header-options">
          <li>
            <svg className="" viewBox="0 0 24 24">
              <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z"></path>
            </svg>
            <span>Page</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
            </svg>
            <span>Account</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
            </svg>
            <span>Docs</span>
          </li>
        </ul>
        <div className="header-buttons">
          <button className="btn-signIn">Sign In</button>
          <button className="btn-blocks">blocks</button>
        </div>
        <div className="icon-newHeader" onClick={handleClickIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="hamberger-icon"
          >
            <path d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="close-icon"
          >
            <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"></path>
          </svg>
        </div>
      </div>

      <div className="header-responsive">
        <ul className="header-options">
          <li>
            <svg className="" viewBox="0 0 24 24">
              <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z"></path>
            </svg>
            <span>Page</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
            </svg>
            <span>Account</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"></path>
            </svg>
            <span>Docs</span>
          </li>
        </ul>
        <div className="header-buttons">
          <button className="btn-signIn">Sign In</button>
          <button className="btn-blocks">blocks</button>
        </div>
      </div>
    </>
  );
}
