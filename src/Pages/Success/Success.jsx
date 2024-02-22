import React from "react";
import { Link} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function Success  () {
 
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1> You have Successfully Reserved </h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;