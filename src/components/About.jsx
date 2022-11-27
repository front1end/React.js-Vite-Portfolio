import { content } from "../Content";

const About = () => {
  const { About } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {About.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {About.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={About.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={About.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{About.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
             <a href="#"> {About.btnText} </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
