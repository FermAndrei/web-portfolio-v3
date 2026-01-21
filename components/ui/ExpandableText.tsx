"use client";
import { ReactNode, useState } from "react";

interface ExpandableTextProps {
  children: string | ReactNode;
  description: number;
  showToggle?: boolean;
}

const ExpandableText = ({
  children,
  description,
  showToggle = true,
}: ExpandableTextProps) => {
  const fullText = children;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p className="text">
      {isExpanded ? fullText : `${String(fullText).slice(0, description)}...`}
      <br />
      {showToggle && (
        <span
          onClick={toggleText}
          className="text-[#06b6d4] text-xs cursor-pointer"
        >
          {isExpanded ? "Show less" : "Show more"}
        </span>
      )}
    </p>
  );
};

export default ExpandableText;
