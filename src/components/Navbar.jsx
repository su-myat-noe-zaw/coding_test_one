import React from 'react';
import AvatarImg from '../assets/imgs/avatar_img.jpg';

const Navbar = () => {
  return (
    <div className="w-full py-3 px-10 lg:px-3 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 bg-white">
      <h4 className="uppercase text-primary-default font-bold">logo</h4>
      <div>
        <ul className="flex items-center gap-5 md:gap-7">
          <li className="uppercase text-gray-default font-bold text-xs sm:text-sm">home</li>
          <li className="uppercase text-gray-light font-bold text-xs sm:text-sm">discovery</li>
          <li className="uppercase text-gray-light font-bold text-xs sm:text-sm">photos</li>
          <li className="uppercase text-gray-light font-bold text-xs sm:text-sm">contact</li>
          {/* avatar circle */}
          <li>
            <div
              className="w-8 h-8 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${AvatarImg})`,
              }}
            ></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
