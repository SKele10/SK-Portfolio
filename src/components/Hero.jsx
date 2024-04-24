import { curve, shoaib } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
// import Generating from "./Generating";
// import Notification from "./Notification";
// import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[10.25rem]"
      crosses
      crossesOffset="lg:translate-y-[2.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative flex z-1  mx-auto font-oswald text-center mb-[3.875rem] md:mb-20 lg:mb-[3.25rem]">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-sk-2 rounded-[1rem]">
              <div className="h-[1.4rem] bg-sk-1 rounded-t-[0.9rem]" />
              <div className="w-full">
                <h1 className="h1 mb-6">
                  Elevating web experiences, meet &nbsp;
                  <span className="inline-block relative">
                    Shoaib Kalawant{" "}
                    <img
                      src={curve}
                      className="absolute top-full left-0 w-full xl:-mt-2"
                      width={624}
                      height={28}
                      alt="Curve"
                    />
                  </span>
                </h1>
                <p className="body-1 max-w-3xl font-mono mx-auto mb-6 text-n-2 lg:mb-4">
                  Full Stack Developer crafting innovative solutions, skilled in
                  JavaScript, React, Node.js, and more.
                </p>
              </div>

              <div className="aspect-[30/40] rounded-b-[0.9rem] overflow-hidden  md:aspect-[680/340] lg:aspect-[1224/612]">
                <img
                  src={shoaib}
                  className="w-full scale-[1.5] translate-y-[20%] md:scale-[1] md:-translate-y-[5%] lg:-translate-y-[13%]"
                  width={1224}
                  height={612}
                  alt="SK"
                />

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -right-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-sk-1/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={50} height={40} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  {/* <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  /> */}
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
        </div>

        <div className="relative max-w-[25rem] mx-auto md:max-w-4xl lg:max-w-7xl xl:mb-24">
          <BackgroundCircles />
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
