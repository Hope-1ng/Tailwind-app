import React from "react";

const Main = () => {
  return (
    <main className="max-w-4xl mx-auto ">
      <section
        id="hero"
        className="flex flex-col-reverse items-center justify-center sm:flex-row p-6 gap-8 mb-12 scroll-mt-20"
      >
        <article className="sm:max-w-1/2">
          <h2 className=" max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
            WE Boldly Go{" "}
            <span className="text-indigo-400 dark:text-indigo-300">
              Where No Rocket
            </span>{" "}
            Has Gone Before.....
          </h2>
          <p className="max-w-md text-2xl text-slate-700 text-center sm:text-left dark:text-slate-300 mt-8">
            We are Building rockets for the next century today. From the Moon to
            Mars,Jupiter and beyond....
          </p>
          <p className="max-w-md text-2xl text-slate-700 text-center sm:text-left dark:text-slate-300 mt-8">
            Think Acme Rockets
          </p>
        </article>

        <img src="src/img/rocketdab.png" className="w-1/2" alt="" />
      </section>
      <hr className="mx-auto bg-black dark:bg-white" />

      <section id="rockets" className="p-6 my-12 scroll-mt-14">
        <h2 className="text-4xl text-slate-900 font-bold text-center sm:text-5xl mb-5 dark:text-white">
          Our Rockets
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="dark:bg-black w-2/3 mx-auto  sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gra-100 bg-white py-6 px-2 rounded-3xl shadow-2xl">
            <img src="src/img/rocketman.png" alt="" className="mb-6 w-1/2" />
            <h3 className="text-slate-900 dark:text-white text-center text-3xl">
              Explorer
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center text-3xl mt-2 hidden sm:block">
              $
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-center text-2xl mt-2  sm:hidden">
              Affordable Exploration
            </p>
          </li>
          <li className="dark:bg-black w-2/3 mx-auto  sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gra-100 bg-white py-6 px-2 rounded-3xl shadow-2xl">
            <img
              src="src/img/rocketride.png"
              alt="adventure"
              className="mb-6 w-1/2"
            />
            <h3 className="text-slate-900 dark:text-white text-center text-3xl">
              Adventure
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center text-3xl mt-2 hidden sm:block">
              $$
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-center text-2xl mt-2  sm:hidden">
              Best Selling Rocket
            </p>
          </li>
          <li className="dark:bg-black w-2/3 mx-auto  sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gra-100 bg-white py-6 px-2 rounded-3xl shadow-2xl">
            <img
              src="src/img/rocketlaunch.png"
              alt="infinity"
              className="mb-6 w-1/2"
            />
            <h3 className="text-slate-900 dark:text-white text-center text-3xl">
              Infinity
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-center text-3xl mt-2 hidden sm:block">
              $$$
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-center text-2xl mt-2  sm:hidden">
              Luxury Starship
            </p>
          </li>
        </ul>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="Testimonials" className="p-6 my-12">
        <h2 className="text-4xl text-slate-900 font-bold text-center sm:text-5xl mb-5 dark:text-white">
          Testimonials
        </h2>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="Contact" className="p-6 my-12">
        <h2 className="text-4xl text-slate-900 font-bold text-center sm:text-5xl mb-5 dark:text-white">
          Contact
        </h2>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </main>
  );
};

export default Main;
