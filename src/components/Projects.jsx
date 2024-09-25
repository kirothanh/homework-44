import "../assets/Projects.scss";
import project1 from "../assets/img/blog-1.svg";

export default function Projects() {
  const projectList = [
    {
      title: "mobile app development",
      desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      buttonName: "See details",
    },
    {
      title: "mobile app development",
      desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      buttonName: "See details",
    },
    {
      title: "mobile app development",
      desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      buttonName: "See details",
    },
    {
      title: "mobile app development",
      desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      buttonName: "See details",
    },
    {
      title: "mobile app development",
      desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      buttonName: "See details",
    },
    {
      title: "mobile app development",
      desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      buttonName: "See details",
    },
    {
      title: "mobile app development",
      desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      buttonName: "See details",
    },
    {
      title: "mobile app development",
      desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
      buttonName: "See details",
    },
  ];

  return (
    <>
      <div className="projects-div">
        <h2>my projects</h2>
        <div className="desc-title">
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 custom-gutter gy-2">
          {projectList.map((project, index) => (
            <div className="col" key={index}>
              <div className="project-wrap">
                <div className="img">
                  <img src={project1} alt="" />
                </div>
                <div className="content">
                  <a href="#!">{project.title}</a>
                  <p>{project.desc}</p>
                  <button>{project.buttonName}</button>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="col">
            <div className="project-wrap">
              <div className="img">
                <img src={project1} alt="" />
              </div>
              <div className="content">
                <a href="#!">mobile app development</a>
                <p>
                  Mobile app designed to help users discover and explore local
                  restaurants and cuisines.
                </p>
                <button>See details</button>
              </div>
            </div>
          </div>
           */}
        </div>
        <div className="row row-cols-12 row-cols-md-6 row-cols-lg-6 row-cols-xl-4 gx-5"></div>
      </div>
    </>
  );
}
