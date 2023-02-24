import { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const navigate = useNavigate();
  const activeStyle = {
    color: "#00b4e2",
  };
  const urls = [
    ["/", "home"],
    ["/our beliefs", "our beliefs"],
    ["/serve", "serve"],
    ["/videos", "videos"],
    ["/events", "events"],
    ["/gallery", "gallery"],
    ["/contact", "contact"],
  ];
  let routes = [];
  urls.forEach((route, index) => {
    isDesktop
      ? routes.push(
          <li key={index} className="nav-item">
            <NavLink
              className="nav-link"
              to={route[0]}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              {route[1]}
            </NavLink>
          </li>
        )
      : routes.push(
          <li
            key={index}
            className="nav-item"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            onClick={() => navigate(route[0])}
          >
            <NavLink
              className="nav-link"
              to={route[0]}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              {route[1]}
            </NavLink>
          </li>
        );
  });

  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-light">
      <div className="container g-0">
        <div className="row g-0">
          <div className="col-10 heading">
            {/* <div>Honesdale Community Church</div> */}
            <h2>HONESDALE COMMUNITY CHURCH</h2>
            {/* <div>Honesdale</div>
            <div>Community Church</div> */}
            {/* <img */}
            {/*   src={logo} */}
            {/*   className="img-fluid" */}
            {/*   alt="Honesdale Community Church Logo" */}
            {/*   width="715" */}
            {/*   height="209" */}
            {/* /> */}
          </div>
          <div className="col-2">
            <button
              className="navbar-toggler collapsed ms-2 mt-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">{routes}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
