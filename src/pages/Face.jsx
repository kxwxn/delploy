// Install dependencies - DONE
// Import dependencies - DONE
// Setup webcam and canvas - DONE
// Define references to those - DONE
// Load facemesh - DONE
// Detect function - DONE
// Drawing utilities -
// Load triangulation -
// Setup triangle path -
// Setup point drawing -
// Add drawMesh to detect function -

import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { styled } from "styled-components";
import { drawMesh } from "../utilities";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;

const Canvas = styled.canvas`
  width: 100%;
  cursor: pointer;
`;

const MirrorCam = styled(Webcam)`
  /* visibility: hidden; */
  width: 0;
  height: 0;
`;

export const Face = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load facemesh

  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    setInterval(() => {
      detect(net);
    }, 150);
    setIsLoading(false);
  };

  // Detect function

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set Video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      // Set Canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      // Make detections
      const face = await net.estimateFaces(video);
      // Get canvas context for drawing

      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx);
    }
  };
  runFacemesh();

  const handleCanvasClick = () => {
    window.alert("please check your console");

    console.log(
      "Hi welcome to my page, click here →",
      "https://docs.google.com/document/d/1mFeRXgkAvoEuAd-BW5pZNBiEJrLKw7ptIp8vqYysook/edit?usp=sharing",
      "if you got some secret tales to tell us :)"
    );
  };
  return (
    <Wrapper>
      {isLoading ? (
        "LOADING..."
      ) : (
        <Canvas ref={canvasRef} onClick={handleCanvasClick} />
      )}
      <MirrorCam ref={webcamRef} />
    </Wrapper>
  );
};
