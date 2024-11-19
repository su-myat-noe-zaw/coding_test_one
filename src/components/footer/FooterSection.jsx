import { PaperAirplaneIcon, GlobeAltIcon, LinkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const footerLinks = [
  {
    title: "General",
    items: ["home", "discovery", "photos", "contact"],
  },
  {
    title: "Company",
    items: ["about", "help", "terms", "guidelines"],
  },
  {
    title: "Business",
    items: ["testimonials", "advertise", "integrations", "careers"],
  },
];

const socialMediaLinks = [
  { href: "https://www.instagram.com", Icon: LinkIcon, label: "Instagram" },
  { href: "https://www.twitter.com", Icon: GlobeAltIcon, label: "Twitter" },
  { href: "https://www.facebook.com", Icon: UserCircleIcon, label: "Facebook" },
  { href: "https://www.yourportfolio.com", Icon: GlobeAltIcon, label: "Portfolio" },
];

const FooterSection = () => {
  return (
    <div className="bg-gray-light w-full py-10 px-10 lg:px-0">
      <div className="relative lg:w-[65%] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-3">
        <h4 className="text-sm uppercase text-gray-200 font-semibold text-left mr-7 mb-6 lg:mb-0">logo</h4>

        <div className="flex flex-wrap justify-between items-start w-full lg:w-1/3 gap-6">
          {footerLinks.map((section, index) => (
            <ul key={index} className="flex flex-col gap-1">
              <li className="capitalize cursor-pointer text-gray-300 text-xs font-semibold">{section.title}</li>
              {section.items.map((item, idx) => (
                <li key={idx} className="capitalize cursor-pointer text-gray-300 text-xs">{item}</li>
              ))}
            </ul>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-end items-start w-full lg:w-2/3 gap-8 lg:gap-20">
          <div className="w-full lg:w-[220px] relative">
            <input
              placeholder="Email"
              className="px-3 py-1 pr-10 outline-none rounded-md border border-gray-300 border-opacity-20 bg-gray-light placeholder-gray-300 placeholder-opacity-20 w-full"
              type="text"
            />
            <PaperAirplaneIcon className="absolute w-4 h-4 right-2 top-4 transform -translate-y-1/2 text-gray-300 opacity-80 rotate-[-45deg]" />
            <p className="text-gray-300 opacity-50 text-[10px] mt-2">Stay in touch with us for the freshest products!</p>
          </div>

          {/* Social media icons */}
          <div className="flex gap-6 items-center justify-center lg:justify-start">
            {socialMediaLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="text-gray-200 hover:text-gray-300 w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
