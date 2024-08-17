// src/components/Countdown.jsx

import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2024-09-20T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-xl lg:text-3xl font-bold mb-4">
        Countdown to Our Wedding
      </h2>
      <div className="flex justify-center space-x-4">
        <div>
          <span className="text-2xl lg:text-5xl font-bold">
            {timeLeft.days}
          </span>
          <div className="text-[#fed703] font-bold">Days</div>
        </div>
        <div>
          <span className="lg:text-5xl  text-2xl font-bold">
            {timeLeft.hours}
          </span>
          <div className="text-[#8d0102] font-bold">Hours</div>
        </div>
        <div>
          <span className="text-2xl lg:text-5xl font-bold">
            {timeLeft.minutes}
          </span>
          <div className="text-[#fed703] font-bold">Minutes</div>
        </div>
        <div>
          <span className="text-2xl lg:text-5xl font-bold">
            {timeLeft.seconds}
          </span>
          <div className="text-[#8d0102] font-bold">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
