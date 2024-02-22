import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

function About  ()  {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">

"Welcome to URBAN BITES, where culinary passion meets exquisite flavors.
 Nestled Jumeirah,UAE, our restaurant is a haven for food enthusiasts seeking a memorable dining experience.
  With a commitment to using the finest ingredients and a dedication to culinary artistry, we invite you to savor the magic created by our skilled chefs.
   Whether you're here for a casual meal or a special celebration,
            </p>
            <Link to={"/menu"}>
              Explore Menu
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
