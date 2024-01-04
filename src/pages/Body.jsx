import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FlyControls } from "three/addons/controls/FlyControls.js";

const Wrapper = styled.div``;
const Space = styled.div``;

export const Body = () => {
  const spaceRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "../../public/models/poly.glb",
      (gltf) => scene.add(gltf.scene),
      undefined,
      (err) => console.log(err)
    );

    const scene = new THREE.Scene();
    //     scene.background = new THREE.Color("beige");

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const pointLight = new THREE.PointLight("white", 100);
    pointLight.position.set(5, 0, 5);
    scene.add(pointLight);

    const renderer = new THREE.WebGL1Renderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    spaceRef.current && spaceRef.current.appendChild(renderer.domElement);
    camera.position.z = 5;
    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, renderer.domElement);

    //controls.update()는 카메라 변환설정을 수동으로 변경한 후에 호출해야 합니다.
    camera.position.set(0, 20, 10);
    controls.update();

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // 반응형 처리
    const responsiveWindow = () => {
      camera.aspect = window.innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", responsiveWindow);

    // componentWillUnmount
    return () => spaceRef.current.removeChild(renderer.domElement);
  }, []);

  return (
    <Wrapper>
      <Space ref={spaceRef} />
    </Wrapper>
  );
};
