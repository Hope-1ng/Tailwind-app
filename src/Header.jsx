import React from "react";

const Header = () => {
  return (
    <header className="bg-teal-700 text-white z-10 sticky top-0">
      <section className="max-w-3xl flex p-4 justify-between items-center mx-auto">
        <h1 className="text-3xl font-medium">
          {" "}
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <button
          id="mobile-open-button"
          className="text-3xl sm:hidden focus:outline-none"
        >
          &#9776;
        </button>
        <nav className=" text-xl space-x-8 hidden sm:block  " aria-label="main">
          <a href="#rockets" className="hover:opacity-90 ">
            Our Rockets
          </a>
          <a href="#testimonials" className="hover:opacity-90 ">
            Testimonials
          </a>
          <a href="#contact" className="hover:opacity-90  ">
            Contact
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
