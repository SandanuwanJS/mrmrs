import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed bottom-5 right-5"
    >
      {visible && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-8  rounded-full bg-[#004A8F] text-white shadow-xl hover:shadow-2xl hover:bg-[#FCB81F] hover:text-black transition duration-300"
        >
          ↑
        </motion.button>
      )}
    </motion.div>
  );
};

export default BackToTop;
