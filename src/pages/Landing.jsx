// // import Webcam from "react-webcam";
// // import styled from "styled-components";

// // const Wrapper = styled.div``;

// // export const Landing = () => {
// //   return <Wrapper></Wrapper>;
// // };

// //cursor:move
// //draggble with js (not with the Draggable library)

import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

const Wrapper = styled.div``;
const HiddenWebcam = styled(Webcam)`
  opacity: 0;
  height: 0px;
  width: 0px;
`;
const StyledImg = styled.img`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: auto;
  height: 200px;
`;

export const Landing = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          setImgSrc(imageSrc);
          setPosition({
            top: Math.random() * (window.innerHeight - 100),
            left: Math.random() * (window.innerWidth - 100),
          });
          clearInterval(interval);
        }
      }
    }, 200); // delay of 200ms
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <HiddenWebcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      {imgSrc && <StyledImg src={imgSrc} top={position.top} left={position.left} />}
    </Wrapper>
  );
};


// import React, { useEffect, useRef } from 'react';
// import Webcam from 'react-webcam';
// import styled from 'styled-components';

// const StyledImg = styled.img`
//   position: absolute;
//   top: ${() => Math.random() * 100}%;
//   left: ${() => Math.random() * 100}%;
// `;

// const Landing = () => {
//   const webcamRef = useRef(null);
//   const [imgSrc, setImgSrc] = React.useState(null);

//   useEffect(() => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setImgSrc(imageSrc);
//     }
//   }, []);

//   return (
//     <>
//       <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
//       {imgSrc && <StyledImg src={imgSrc} />}
//     </>
//   );
// };

// export default Landing;