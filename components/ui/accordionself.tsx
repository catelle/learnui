"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

// Accordion Component
const Accordion = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null); // Track open section
    const [loading, setLoading] = useState<boolean>(false); // Loading state
    const [loadingContent, setLoadingContent] = useState<boolean>(false); // Loading state for individual content


  const toggleAccordion = (index: number) => {
    setIsOpen(isOpen === index ? null : index); // Toggle open/close on click

  };

  const handleLinkClick = (sectionIndex: number) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Stop loading after 1.5 seconds (simulate content load)
    }, 1500);
  };


  const sections = [
    { title: "Hero Section 1", link: "/Hero/hero1" },
    // { title: "Hero Section 2", link: "/Hero/hero2" },
    // { title: "Hero Section 3", link: "/Hero/hero3" },
  ];

  return (
   
    <div className="space-y-4">

         {loading && (
              <div className="flex justify-center items-center py-4">
                <svg
                  className="w-8 h-8 animate-spin text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" fill="none" />
                  <path
                    d="M4 12a8 8 0 0 1 8-8M4 12a8 8 0 0 0 8-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            )}
      {sections.map((section, index) => (
        <div key={index} className="transition-all ease-in-out">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">{section.title}</span>
              <span className="transition-all duration-300">
                {isOpen === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </span>
            </div>
          </button>

         <div
  className={`overflow-hidden transition-all duration-300 ease-in-out ${
    isOpen === index ? "max-h-screen py-4" : "max-h-0"
  }`}
>
   
  {/* First Link */}
  <div className="px-6 py-4 bg-gray-700 text-white rounded-lg shadow-md mb-4">
    <Link
      href={"Hero/hero1"}
      className="block text-sm hover:text-yellow-400 transition-all duration-300"
      onClick={() => handleLinkClick(index)} 
    >
      Classic hero section
    </Link>
  </div>

  {/* Second Link */}
  <div className="px-6 py-4 bg-gray-700 text-white rounded-lg shadow-md mb-4">
    <Link
      href={"Hero/hero2"}
      className="block text-sm hover:text-yellow-400 transition-all duration-300"
      onClick={() => handleLinkClick(index)} 

    >
      Overlay side by side hero section
    </Link>
  </div>

  {/* Third Link */}
  <div className="px-6 py-4 bg-gray-700 text-white rounded-lg shadow-md mb-4">
    <Link
      href={"Hero/hero3"}
      className="block text-sm hover:text-yellow-400 transition-all duration-300"
      onClick={() => handleLinkClick(index)} 

    >
      Centered video-text hero section
    </Link>
  </div>

  {/* Fourth Link */}
  <div className="px-6 py-4 bg-gray-700 text-white rounded-lg shadow-md mb-4">
    <Link
      href={"Hero/hero4"}
      className="block text-sm hover:text-yellow-400 transition-all duration-300"
      onClick={() => handleLinkClick(index)} 

    >
      Side by side hero section
    </Link>
  </div>

  {/* Fifth Link */}
  <div className="px-6 py-4 bg-gray-700 text-white rounded-lg shadow-md mb-4">
    <Link
      href={"Hero/hero5"}
      className="block text-sm hover:text-yellow-400 transition-all duration-300"
      onClick={() => handleLinkClick(index)} 

    >
      Form hero section
    </Link>
  </div>

  {/* Sixth Link */}
  <div className="pt-2 px-6 py-4 bg-gray-700 text-white rounded-lg shadow-md mb-4">
    <Link
      href={"Hero/hero6"}
      className="block text-sm hover:text-yellow-400 transition-all duration-300"
      onClick={() => handleLinkClick(index)} 

    >
      Gradient hero section
    </Link>
  </div>

  {loadingContent && (
              <div className="flex justify-center items-center py-4">
                <svg
                  className="w-8 h-8 animate-spin text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" fill="none" />
                  <path
                    d="M4 12a8 8 0 0 1 8-8M4 12a8 8 0 0 0 8-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            )}
</div>

        </div>
      ))}
    </div>
  );
};

export default Accordion;
