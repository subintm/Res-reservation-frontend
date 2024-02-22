import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar  ()  {

 
  return (
    <>
      <nav className="navebar">
        <div style={{fontWeight:'bolder', color:'bisque', fontSize:'30px'}} className="logo">WELCOME <br /> MY FOOD PALACE
        </div>
        {/* <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div> */}
        {/* <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div> */}

<div>

  <a href="./">HOME</a>
  <a href="menu">MENU</a>
  <a href="about">ABOUT</a>

</div>

      </nav>
    </>
  );
};

export default Navbar;
