import React, {useEffect, useState} from 'react';
import './Nav.css';


function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          handleShow(true);
        } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
        />
        <img
            className="nav__avatar"
            src="https://occ-0-300-1167.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYCq-HPaBmwWzyEo8UjC3jQ7a2mKJhU4uPbQwFrauKbu9_-6GpfPccnQh3UWZvsGLQ1MwLo_4YZ-kuTiAsqpq0oEdPXS.png?r=f71"
            alt="Avatar"
        />
      </div>
  )
}

export default Nav;