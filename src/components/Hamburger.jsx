import React, { useState }from "react";

const Hamburger = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  }
  return (
    <>
      <svg>
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2.2"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
      </svg>
      <div className="plates">
        <div
          // className=""
          className={isActive ? 'plate plate4 active': "plate plate4"} 
          onClick={handleToggle}
        >
          <svg
            className="burger"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line line1" d="M 50,35 H 30" />
            <path className="line line2" d="M 50,35 H 70" />
            <path className="line line3" d="M 50,50 H 30" />
            <path className="line line4" d="M 50,50 H 70" />
            <path className="line line5" d="M 50,65 H 30" />
            <path className="line line6" d="M 50,65 H 70" />
          </svg>
          <svg
            className="x"
            version="1.1"
            height="100"
            width="100"
            viewBox="0 0 100 100"
          >
            <path className="line" d="M 34,32 L 66,68" />
            <path className="line" d="M 66,32 L 34,68" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
