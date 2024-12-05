import React from 'react';
import { motion } from 'framer-motion';
import Charith from "../../assets/Cast/charith.png";
import Ravi from "../../assets/Cast/chairman.png";
import Giriraj from "../../assets/Cast/giriraj.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function MainCrew() {
  return (
    <div className="mt-[90px] font-redhat my-4">
      <div className="justify-items-center">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-gray-800 text-4xl font-bold">Producer</h2>
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="flex justify-center mt-10"
        >
          <div className="border rounded-md overflow-hidden max-w-[200px] mb-10">
            <img src={Ravi} className="w-60 h-60 object-cover bg-gray-200" />
            <div className="py-4">
              <h4 className="text-gray-800 text-base font-bold">ආචාර්ය රවී ලියනගේ</h4>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl max-lg:max-w-2xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-gray-800 text-4xl font-bold">Main Crew</h2>
          </div>
          <motion.div 
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.5}}
            className="flex flex-wrap justify-center gap-x-20 w-full mt-12"
          >
            {[{ img: Charith, name: 'චරිත් අබේසිංහ', role: 'අධ්‍යක්ෂණය' }, { img: Giriraj, name: 'ගිරිරාජ් කෞශල්‍ය', role: 'තිර රචනය' }].map((crew, index) => (
              <motion.div key={index} variants={fadeInUp} className="border rounded-md overflow-hidden max-w-[200px] mb-10">
                <img src={crew.img} className="w-60 h-60 object-cover bg-gray-200" />
                <div className="p-4">
                  <h4 className="text-gray-800 text-base font-bold">{crew.name}</h4>
                  <p className="text-gray-600 text-xs mt-1">{crew.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className='justify-items-center font-semibold mt-10 mb-10 leading-loose'>
            <p>සහය අධ්‍යක්ෂණය - නුවන් ශ්‍රීනාත් කස්තුරි ආරච්චි</p>
            <p>කලා අධ්‍යක්ෂණය - සරත් ජයවීර </p>
            <p>නිෂ්පාදන කළමනාකරු - ගයාන් දේශප්‍රිය</p>
            <p>වේශ නිරූපණ ශිල්පී - නලින් ප්‍රේමතිලක</p>
            <p>සටන් අධ්‍යක්ෂණය - ඕසද සමන් බණ්ඩාර</p>
            <p>සංස්කරණය - ඉරූශ ගමගේ</p>

          </div>
        </div>
      </div>
    </div>
  );
}
