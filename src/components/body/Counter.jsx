import React, { useEffect, useState } from 'react';

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-01-16T23:59:59'); // Set your target date here

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="justify-items-center w-full">
      <div>
        <h1 className="mt-10 font-semibold font-redHat text-black-700 text-[30px]">Premier in</h1>
      </div>
      <div className="flex flex-wrap items-center mt-10 mb-10 justify-center sm:gap-1 lg:gap-1.5 count-down-main">
        <div className="timer">
          <div className="rounded-xl shadow-lg bg-gradient-to-b bg-[#FCB81F] to-purple-600 py-3 sm:py-2 md:py-3 w-[85px] lg:w-[100px] flex items-center justify-center flex-col gap-1 aspect-square px-3">
            <h3 className="countdown-element days font-redHat font-semibold text-2xl text-black text-center">
              {timeLeft.days}
            </h3>
            <p className="text-lg font-redHat font-normal text-black mt-1 text-center w-full">Days</p>
          </div>
        </div>
        <h3 className="font-redHat font-semibold sm:text-lg lg:text-2xl text-gray-900">:</h3>
        <div className="timer">
          <div className="rounded-xl shadow-lg bg-gradient-to-b bg-[#004A8F] to-purple-600 py-3 sm:py-2 md:py-3 w-[85px] lg:w-[100px] flex items-center justify-center flex-col gap-1 aspect-square px-3">
            <h3 className="countdown-element hours font-redHat font-semibold text-2xl text-white text-center">
              {timeLeft.hours}
            </h3>
            <p className="text-lg font-redHat font-normal text-white mt-1 text-center w-full">Hour</p>
          </div>
        </div>
        <h3 className="font-redHat font-semibold sm:text-lg lg:text-2xl text-gray-900">:</h3>
        <div className="timer">
          <div className="rounded-xl shadow-lg bg-gradient-to-b bg-[#FCB81F] to-purple-600 py-3 sm:py-2 md:py-3 w-[85px] lg:w-[100px] flex items-center justify-center flex-col gap-1 aspect-square px-3">
            <h3 className="countdown-element minutes font-redHat font-semibold text-2xl text-black text-center">
              {timeLeft.minutes}
            </h3>
            <p className="text-lg font-redHat font-normal text-black mt-1 text-center w-full">Minutes</p>
          </div>
        </div>
        <h3 className="font-redHat font-semibold sm:text-lg lg:text-2xl text-gray-900">:</h3>
        <div className="timer">
          <div className="rounded-xl shadow-lg bg-gradient-to-b bg-[#004A8F] to-purple-600 py-3 sm:py-2 md:py-3 w-[85px] lg:w-[100px] flex items-center justify-center flex-col gap-1 aspect-square px-3">
            <h3 className="countdown-element seconds font-redHat font-semibold text-2xl text-white text-center">
              {timeLeft.seconds}
            </h3>
            <p className="text-lg font-redHat font-normal text-white mt-1 text-center w-full">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
