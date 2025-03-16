import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
      <footer className="w-full pb-10" id="contact">
          {/* background grid */}
          <div className="w-full absolute left-0 -bottom-72 min-h-96">
              <img
                  src="/footer-grid.svg"
                  alt="grid"
                  className="w-full h-full opacity-50 "
              />
          </div>

          <div className="flex flex-col items-center">
              <h1 className="heading">
                  Ready to bring your <span className="text-purple">ideas</span>{' '}
                  to life?
              </h1>
              <p className="text-white-200 md:mt-10 my-5 text-center max-w-[600px]">
                  Let&apos;s connect! Whether you need a dynamic web
                  application, a stunning design, or a scalable solution, Feel
                  free to reach out, and let&apos;s create something amazing
                  together! 🚀
              </p>
              <a href="mailto:mustafareza47@gmail.com">
                  <MagicButton
                      title="Let's get in touch"
                      icon={<FaLocationArrow />}
                      position="right"
                  />
              </a>
          </div>
          <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
              <p className="md:text-base text-sm md:font-normal font-light mb-6">
                  Copyright © 2025 Ahmed Reza
              </p>

              <div className="flex items-center md:gap-3 gap-6">
                  {socialMedia.map((info) => (
                      <div
                          key={info.id}
                          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                      >
                          <a href={info.link} target="_blank">
                              <img
                                  src={info.img}
                                  alt="icons"
                                  width={20}
                                  height={20}
                              />
                          </a>
                      </div>
                  ))}
              </div>
          </div>
      </footer>
  )
};

export default Footer;
