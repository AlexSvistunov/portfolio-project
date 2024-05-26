import "./BubbleAnimation.scss";

import { useEffect } from "react";

const BubbleAnimation = () => {
  return (
    <>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          {/* <div className="interactive"></div> */}
          {/* tezt with blur and without, test interactive out of this parent */}
          {/* чтобы такие пузырьки летали в рандоме */}
          {/* чтобы курсор тоже был пузырьком) и при клике выпускал пузырьки */}
          {/* начальная анимация еще в одном пузыре а потом он лопается */}
        </div>
      </div>
    </>
  );
};

export default BubbleAnimation;
