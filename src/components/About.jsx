import collegeimg from "../assets/vjti.jpg";
function About() {
  return (
    <div
      name="About"
      className="w-full min-h-screen mx-auto p-4 flex flex-col justify-center items-center "
    >
      <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 w-44">
        Overview
      </h1>
      <div className="text-cente mt-[60px] lg:mt-16 flex flex-wrap gap-10 justify-center items-center mx-auto ">
        <div className="w-[300px] md:w-[500px] flex flex-col flex-wrap gap-3 p-2 items-center">
          <p className="text-center leading-relaxed lg:text-left">
            I am a skilled and passionate frontend developer specializing in
            React, with a proven track record of crafting immersive digital
            experiences. With a keen eye for design and a mastery of modern web
            technologies, I bring concepts to life through clean, efficient
            code. My commitment to delivering seamless user interactions and
            visually appealing interfaces drives me to continuously push the
            boundaries of innovation. As a dedicated problem solver and creative
            thinker, I thrive on transforming ideas into captivating, responsive
            web solutions that leave a lasting impact.
          </p>
          <p className="text-center leading-relaxed lg:text-left">
            As a problem solver, I am dedicated to overcoming challenges and
            finding innovative solutions. I believe in the power of hard work
            and continuously strive for excellence in my work.
          </p>
        </div>
        <div className="mx-auto mt-7 md:mt-0 sm:w-[400px] ">
          <img
            src={collegeimg}
            loading="lazy"
            className="w-full rounded-md mx-auto lg:mx-0 hover:scale-105 transition-all duration-500 "
            alt="College"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
