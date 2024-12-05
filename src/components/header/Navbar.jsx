import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.0 } },
  };

  return (
    <div className="mb-5">
      <nav className="fixed flex w-full lg:justify-center top-0 left-0 z-10 bg-black" aria-label="Global">
        <div className="flex items-center justify-between w-full p-4 lg:w-auto">
          <Link to="/" className="-m-1.5 p-1.5">
            <motion.img
              src={Logo}
              alt="mr&mrs logo"
              width="100px"
              height="50px"
              className="hover:scale-110 transition-all duration-200 ease-in-out"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.0 }}
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-yellow-400 transition-all duration-200 ease-in-out"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: menuOpen ? 45 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </motion.svg>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-x-12">
          <motion.div initial="hidden" animate="visible" variants={linkVariants}>
            <Link
              to="/"
              className="text-[18px] font-redHat font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer"
            >
              Home
            </Link>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={linkVariants}>
            <Link
              to="/winners"
              className="text-[18px] font-redHat font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer"
            >
              Winners
            </Link>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={linkVariants}>
            <Link
              to="/theaters"
              className="text-[18px] font-redHat font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer"
            >
              Theaters
            </Link>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={linkVariants}>
            <Link
              to="/teams"
              className="text-[18px] font-redHat font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer"
            >
              Team
            </Link>
          </motion.div>
        </div>

        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="lg:hidden flex flex-col items-center bg-black w-full"
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-[18px] font-redHat font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer py-2"
            >
              Home
            </Link>
            <Link
              to="/winners"
              onClick={() => setMenuOpen(false)}
              className="text-[18px] font-redHat font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer py-2"
            >
              Winners
            </Link>
            <Link
              to="/theaters"
              onClick={() => setMenuOpen(false)}
              className="text-[18px] font-redHat font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer py-2"
            >
              Theaters
            </Link>
            <Link
              to="/teams"
              onClick={() => setMenuOpen(false)}
              className="text-[18px] font-redHat font-semibold text-white hover:font-bold hover:text-yellow-400 transition-all duration-200 ease-in-out cursor-pointer py-2"
            >
              Team
            </Link>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
