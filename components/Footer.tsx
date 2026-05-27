import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="mb-16 pt-8 text-center text-sm text-secondary border-t border-t-cyan-500/50 mask-[linear-gradient(to_right,transparent,black,transparent)]">
        <p className="text-slate-800 font-semibold text-lg">
          © {year} Ferm Andrei. All rights reserved.
        </p>
        <div className="text-black flex justify-center space-x-4 mt-3">
          <a href="https://www.facebook.com/ferm.andrei" target="_blank">
            <FaFacebookSquare size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ferm-andrei" target="_blank">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.github.com/ferm-andrei" target="_blank">
            <FaGithub size={24} />
          </a>
          <a href="mailto:fermandrei1@gmail.com">
            <MdEmail size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
