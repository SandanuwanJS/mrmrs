import React from 'react'
import { motion } from 'framer-motion'

function Trailer() {
  return (
    <div className='p-5 flex flex-col items-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='mb-10 font-semibold font-redhat text-black text-[30px]'>Trailers</h1>
      </motion.div>

      <div className='flex flex-col lg:flex-row gap-6 justify-center'>
        <motion.iframe
          className='lg:w-[720px] lg:h-[420px] sm:w-full sm:h-[420px] rounded-lg shadow-lg border border-gray-300'
          src="https://www.youtube.com/embed/Qf4MTuYLg6A?si=Vq4Wb-PPZqRK0hGD"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover scale effect
        ></motion.iframe>
        
        <div className='flex flex-col gap-4'>
          <motion.iframe
            className='lg:w-[360px] lg:h-[200px] rounded-lg shadow-md border border-gray-300'
            src="https://www.youtube.com/embed/4Fcl6ha-QQ8?si=tiynDtlFg44oIK0P"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover scale effect
          ></motion.iframe>
          
          <motion.iframe
            className='lg:w-[360px] lg:h-[200px] rounded-lg shadow-md border border-gray-300'
            src="https://www.youtube.com/embed/6Am3FvRLSVk?si=Tz569FygfR_DwzH8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover scale effect
          ></motion.iframe>
        </div>
      </div>
    </div>
  )
}

export default Trailer
