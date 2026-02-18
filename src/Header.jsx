import React, { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header className="bg-teal-700 text-white z-10 sticky top-0">
      <section className="max-w-3xl flex p-4 justify-between items-center mx-auto">
        <h1 className="text-3xl font-medium">
          {" "}
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <button
          id="mobile-open-button"
          className="text-3xl sm:hidden focus:outline-none cursor-pointer"
          onClick={() => setMobileMenu(true)}
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
      {mobileMenu && (
        <section
          id="mobile-menu"
          className="animate-bounce-once  absolute bg-black top-0 w-full p-4 text-5xl flex flex-col justify-items-center"
        >
          <button
            className="text-8xl self-end py-5 cursor-pointer"
            onClick={() => toggleMenu()}
          >
            &times;
          </button>

          <nav className="bg-black flex flex-col items-center text-6xl min-h-screen gap-9 py-8">
            <a
              href="#hero"
              className="w-full text-center hover:opacity-70"
              onClick={() => toggleMenu()}
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full text-center hover:opacity-70"
              onClick={() => toggleMenu()}
            >
              Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full text-center hover:opacity-70 "
              onClick={() => toggleMenu()}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full text-center hover:opacity-70"
              onClick={() => toggleMenu()}
            >
              Contact
            </a>
            <a href="#contact" className="w-full text-center hover:opacity-70">
              Legal
            </a>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;
