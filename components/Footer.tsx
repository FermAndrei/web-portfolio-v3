import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="my-16 pt-8 text-center text-sm text-secondary border-t border-t-cyan-500/50 mask-[linear-gradient(to_right,transparent,black,transparent)]">
        <p>© {year} Ferm Andrei. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
