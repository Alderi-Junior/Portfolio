import { FaLocationArrow } from "react-icons/fa6";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useState } from "react";
import Lottie from "react-lottie";

const Footer = () => {

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "alderipasajunior@hotmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };


  return (
    <footer className="w-full pt-20 pb-10" id="contact">

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to upgrade <span className="text-purple">your</span> team?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="mt-5 relative">
          <div
            className={`absolute -bottom-5 -right-20 ${copied ? "block" : "block"
              }`}
          >
            <Lottie options={defaultOptions} height={200} width={400} />
          </div>

          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31]"
          />
        </div>

      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Alderí Pasa Júnior
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
