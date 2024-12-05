import React from 'react';
import { AiFillTikTok } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (
        <section className="mt-10 font-redHat">
            <div className="max-w-screen-xl text-gray-600 px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-lg font-bold">Mr.මිසිස් in theaters nationwide from January 16, 2025</p>
                    <p className="text-md font-medium">Directed by: Charith Abeysinghe</p>
                    <p className="text-md font-medium">Produced by: Dr. Ravi Liyanage</p>
                </div>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="https://web.facebook.com/mrmisiss" className="text-black hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <FaFacebookF size={20} />
                    </a>
                    <a href="https://www.tiktok.com/@mr.misis?is_from_webapp=1&sender_device=pc" className="text-black hover:text-gray-500">
                        <span className="sr-only">TikTok</span>
                        <SiTiktok size={20} />
                    </a>
                    <a href="https://youtube.com/@mrmisiss?si=LQNPQFPXckN7fiip" className="text-black hover:text-gray-500">
                        <span className="sr-only">YouTube</span>
                        <IoLogoYoutube size={20} />
                    </a>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2024 Raigam IT Department, All rights reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;
