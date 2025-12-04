"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const Nav = () => {
  const navItems = [
    {
      name: "Home",
      link: "#features",
    },
    {
      name: "About",
      link: "#pricing",
    },
    {
      name: "Work",
      link: "#contact",
    },
    {
      name: "Skills",
      link: "#contact",
    },
    {
      name: "Projects",
      link: "#contact",
    },
    {
      name: "Certifications",
      link: "#contact",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky z-50 top-0 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Resume</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Resume
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
};

export default Nav;
