import React from "react";
import personImg from "../../assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-book2 page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}

          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm Shubham
              </p>
              <p className="text-black/75 text-left">Founder, Tradet</p>
              <p className="text-black/75">
                Company philosophy: Our mission is to be the leading and most
                trustworthy travel management company that sets the standard for
                professionalism, reliability and transparency to its customers.
                Strengths: We have varied experience with global networking
                travel management companies Broad expertise in the local travel
                market Client-first approach to business Turn around time
                experts: Our excellent rapport of over two decades with the
                Airlines, Hotels, Car Rentals, Visa Providers has given us the
                confidence to do the best in times of crisis or emergencies and
                won us the trust of our clients. Robust decision making process
                owing to us being a single owner agency enables us to “Focus on
                exceeding service expectation”.
              </p>
              <a
                className="inline-block primary-btn "
                href="mailto:shubhammamgain614@example.com"
              >
                {" "}
                Contact me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
