import React from "react";

const Main = () => {
  return (
    <main className="max-w-4xl mx-auto ">
      <section
        id="hero"
        className="flex flex-col-reverse items-center justify-center sm:flex-row p-6 gap-8 mb-12 scroll-mt-40 section-height"
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

      <section id="rockets" className="p-6 my-12 scroll-mt-14 section-height">
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

      <section id="testimonials" className="p-6 my-12 scroll-mt-20 mt-100" >
        <h2 className="text-4xl text-slate-900 font-bold text-center sm:text-5xl mb-5 dark:text-white">
          Testimonials
        </h2>
        <figure className="my-12">
          <blockquote className="bg-teal-600 dark:bg-black  relative pl-14 pr-8 py-12 rounded-3xl ">
            <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201c'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-['\201d'] after:font-serif after:absolute after:-bottum-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 after:px-5">
              {" "}
              Acme has always been there for me. Their Explorer rocket arrived
              in a wooden crate as expected. Life-long customer! A++ shopping
              experience.
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
            {" "}
            &#8212;Wille E. Coyote,Genius{" "}
          </figcaption>
        </figure>
        <figure className="my-12">
          <blockquote className="bg-teal-600 dark:bg-black  relative pl-14 pr-8 py-12 rounded-3xl ">
            <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201c'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-['\201d'] after:font-serif after:absolute after:-bottum-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 after:px-5 ">
              {" "}
              The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive
              Space Modulator on several occassions.{" "}
              <span className="italic">
                This makes me very, very angry!
              </span>{" "}
              Nevertheless, K-9 and I have awarded Acme the Martian contract for
              space exploration rockets based on Acme's quality and sturdy
              designs
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
            {" "}
            &#8212;Marvin The Martian &amp; K-9{" "}
          </figcaption>
        </figure>
        <figure className="my-12">
          <blockquote className="bg-teal-600 dark:bg-black  relative pl-14 pr-8 py-12 rounded-3xl ">
            <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201c'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2  after:content-['\201d'] after:font-serif after:absolute after:-bottum-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 after:px-5 ">
              {" "}
              I knew I not only wanted &#8212;{" "}
              <span className="italic">I needed</span> &#8212; Acme's Infinity
              Rocket for my mission in space. Acme delivered in one day! Nothing
              says <q className="italic">Take me to your leader</q> like Acme's
              Infinity Rocket! 💯
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
            {" "}
            &#8212;Buzz Lightyear{" "}
          </figcaption>
        </figure>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="contact" className="p-6 my-12 scroll-mt-20 ">
        <h2 className="text-4xl text-slate-900 font-bold text-center sm:text-5xl mb-5 dark:text-white">
          Contact
        </h2>
        <form
          action=""
          className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-5  "
        >
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={60}
            placeholder="Your Subject "
            type="text"
            className="w-full  text-2xl sm:text-3xl text-black p-3 rounded-xl border border-slate-900 border-solid dark:border-none  dark:text-black focus:outline-none  dark:bg-white"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="messsage"
            placeholder="Your Message"
            required
            className="w-full text-2xl p-3 sm:text-3xl text-black rounded-xl border border-slate-900 border-solid dark:border-none  dark:text-black focus:outline-none  dark:bg-white h-100 "
          ></textarea>
          <button className=" rounded-xl  bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 border border-solid border-salte-900 dark:border-none  ">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Main;
