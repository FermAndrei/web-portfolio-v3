"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ScrollSpyContextType = {
  activeSection: string;
};

const ScrollSpyContext = createContext<ScrollSpyContextType | null>(null);

export const ScrollSpyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollSpyContext.Provider value={{ activeSection }}>
      {children}
    </ScrollSpyContext.Provider>
  );
};

export const useScrollSpy = () => {
  const context = useContext(ScrollSpyContext);
  if (!context) {
    throw new Error("useScrollSpy must be used inside ScrollSpyProvider");
  }
  return context;
};
