import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  return (
    <nav className="grid grid-cols-5 items-center py-2 px-4 lg:p-4">
      <a href="#" className="col-span-1 p-2 items-center ">
        <img
          src="https://assets.tidycal.com/img/logo-icon.svg"
          className="fill-current text-white h-[21px] w-[23px] mr-2"
          alt="logo"
        />
      </a>
      
      <div className="col-span-4 flex justify-between items-center ">

      <div
            className={`hidden lg:inline-flex ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
        <div className="flex items-center">
          <a
            href="#"
            className="lg:w-auto px-2 text-sm mx-2 text-black text-opacity-90 hover:text-opacity-100"
          >
            Home
          </a>
          <a
            href="#"
            className="lg:w-auto px-3 mx-2 text-sm text-black text-opacity-55  hover:text-opacity-70"
          >
            Home
          </a>
          </div>
        </div>


          
          <div
            className={`hidden px-2 items-center lg:flex ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
             <a
            href="#"
            className="lg:w-auto px-3 mx-2 text-sm text-black text-opacity-55  hover:text-opacity-70"
          >
            Home
          </a>
          <a
            href="#"
            className="lg:w-auto px-3 mx-2 text-sm text-black text-opacity-55  hover:text-opacity-70"
          >
            Home
          </a>
          <a
            href="#"
            className="lg:w-auto px-3 mx-2 text-sm text-black text-opacity-55  hover:text-opacity-70"
          >
            Home
          </a>
          <Link
            to="/tidycal-clone0/login"
            className="lg:w-auto px-3 mx-2 text-sm text-black text-opacity-55  hover:text-opacity-70"
          >
            Login
          </Link>
       
          <button
            className="text-white lg:inline-flex px-4 hover:bg-gray-200 rounded ml-auto hidden hover:text-white outline-none nav-toggler"
            onClick={toggleNav}
          >
            <i className=" text-gray-400 text-4xl">&#8801;</i>
          
          </button>
          </div>

          <button
            className="text-white inline-flex px-4 hover:bg-gray-200 rounded ml-auto lg:hidden hover:text-white outline-none nav-toggler"
            onClick={toggleNav}
          >
            <i className=" text-gray-400 text-4xl">&#8801;</i>
          </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
