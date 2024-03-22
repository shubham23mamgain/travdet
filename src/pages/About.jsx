import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="bg-white text-black dark:bg-black dark:text-white container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>

          <br />
          <h3> Company philosophy:</h3>
          <br />
          <p>
            Our mission is to be the leading and most trustworthy travel
            management company that sets the standard for professionalism,
            reliability and transparency to its customers.
          </p>

          <br />
          <h3>Strengths:</h3>
          <br />

          <p>
            We have varied experience with global networking travel management
            companies Broad expertise in the local travel market Client-first
            approach to business.
          </p>
          <br />
          <h3>Turn around time experts: </h3>
          <br />
          <p>
            Our excellent rapport of over two decades with the Airlines, Hotels,
            Car Rentals, Visa Providers has given us the confidence to do the
            best in times of crisis or emergencies and won us the trust of our
            clients. Robust decision making process owing to us being a single
            owner agency enables us to “Focus on exceeding service expectation”.
          </p>
          <br />
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
