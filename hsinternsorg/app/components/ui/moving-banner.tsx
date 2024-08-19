import React from 'react';

const MovingBanner = () => {
    return (
      <div className="w-full bg-blue-600 text-white py-1 overflow-hidden">
        <div className="whitespace-nowrap flex animate-marquee">
          {/* Repeat the content to ensure seamless scrolling */}
          <div className="flex">
            {Array.from({ length: 15 }).map((_, index) => (
              <React.Fragment key={index}>
                <span className="mx-4">
                  LEADERSHIP APPLICATIONS ARE OPEN
                </span>
                <span className="mx-4 text-center">|</span>
              </React.Fragment>
            ))}
          </div>
          <div className="flex">
            {Array.from({ length: 15 }).map((_, index) => (
              <React.Fragment key={index}>
                <span className="mx-4">
                  LEADERSHIP APPLICATIONS ARE OPEN
                </span>
                <span className="mx-4 text-center">|</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MovingBanner;
  