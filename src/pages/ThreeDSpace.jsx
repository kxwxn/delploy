import * as THREE from "three";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DragControls } from "three/addons/controls/DragControls.js";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Canvas = styled.div`
  display: flex;
`;

export const ThreeDSpace = () => {
  const refContainer = useRef();

  useEffect(() => {
    // console.log("Mounted");
    const loader = new GLTFLoader();
    loader.load(
      "../../public/models/poly.glb",
      (gltf) => scene.add(gltf.scene),
      undefined,
      (err) => console.log(err)
    );

    // 기본 골격 을 생성하는 로직.
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("beige");
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const pointLight = new THREE.PointLight("white", 100);
    pointLight.position.set(5, 0, 5);
    scene.add(pointLight);

    // const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    // scene.add(ambientLight);

    const renderer = new THREE.WebGL1Renderer({
      antialias: true,
      // alpha: true
    });
    renderer.setSize(
      window.innerWidth,
      window.innerHeight
      /*updateStyle = true*/
    );

    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    // 오브젝트를 생성하는방법
    const geometry01 = new THREE.TorusGeometry();
    const material01 = new THREE.MeshStandardMaterial({
      color: "orange",
      metalness: 0.7,
      roughness: 0.1,
    });
    const obj01 = new THREE.Mesh(geometry01, material01);

    const geometry02 = new THREE.SphereGeometry();
    const material02 = new THREE.MeshPhongMaterial({
      color: "skyblue",
      metalness: 0.5,
      transparent: true,
      opacity: 0.5,
      wireframe: true,
    });
    const obj02 = new THREE.Mesh(geometry02, material02);
    obj02.position.x = -5;

    const geometry03 = new THREE.CylinderGeometry();
    const material03 = new THREE.MeshPhongMaterial({
      color: "0xff7f00",
      shininess: 60,
      specular: 0x004fff,
    });
    const obj03 = new THREE.Mesh(geometry03, material03);
    obj03.position.x = 5;

    const geometry04 = new THREE.ConeGeometry();
    const material04 = new THREE.MeshLambertMaterial({ color: "tomato" });
    const obj04 = new THREE.Mesh(geometry04, material04);
    obj04.position.y = 5;

    const geometry05 = new THREE.IcosahedronGeometry();
    const material05 = new THREE.MeshDepthMaterial({ color: "tomato" });
    const obj05 = new THREE.Mesh(geometry05, material05);
    obj05.position.y = -5;

    // 생성한 오브젝트를 렌더링하는방법.
    scene.add(obj01, obj02, obj03, obj04, obj05);
    camera.position.z = 6;
    renderer.render(scene, camera);

    // 애니메이션 추가
    const animate = () => {
      const time = 0.03;
      requestAnimationFrame(animate);
      obj01.rotation.x += time;
      obj01.rotation.y += time;
      obj02.rotation.x += time;
      obj02.rotation.y += time;
      obj03.rotation.x += time;
      obj03.rotation.y += time;
      obj04.rotation.x += time;
      obj04.rotation.y += time;
      obj05.rotation.x += time;
      obj05.rotation.y += time;
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
    // console.log("renderer", renderer);
    // console.log("renderer.domElement", renderer.domElement);
    // console.log("renderer.setSize", renderer.setSize);

    // 마우스 드래그 컨트롤 추가
    const objects = [obj01, obj02, obj03, obj04, obj05];
    const controls = new DragControls(objects, camera, renderer.domElement);
    controls.addEventListener("dragstart", (event) =>
      event.object.material.emissive.set(0xaaaaaa)
    );
    controls.addEventListener("dragend", (event) =>
      event.object.material.emissive.set(0x000000)
    );

    // 컴포넌트가 언마운트 될때 해야할일.
    return () => {
      // console.log("unmounted");
      refContainer.current.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <Wrapper>
      <Canvas ref={refContainer} />
    </Wrapper>
  );
};

// scene & camera 를 THREE 클래스를 이용해여 생성한다음, renderer(THREE.WebGL1Renderer)의 domElement인 <canvas/>에 렌더링한다.

// renderer 를 console에 출력해보면 이런식으로 출력이 된다. -> WebGL1Renderer {isWebGLRenderer: true, domElement: canvas, debug: {…}, autoClear: true, autoClearColor: true, …} 여기에 domElement라는 속성이 있고, canvas라고 출력이 된다.

// renderer.domElement는 어떠한 컴포넌트를 참조해서 그곳에 <canvas/>를 그릴지 정해야 하는데 그때 useRef 로 참조할 컴포넌트에 ref속성에 지정해주면 된다.

// 자 이제 참조하는 컴포넌트 태그에 <canvas/> 태그를 생성해주면 되는데 그것은 단축평가로 refContainer.current가 null,undefined가 아니라면 다시말해 어떤 한 태그가 참조되고 있다면, refContainer.current.appendChild(renderer.domElement) 그 참조한 태그에 <canvas/>를 생성하면 된다.

// 이렇게 기본 골격을 갖추면, 그곳은 3D 공간이 된것이다.

// 그리고 useEffect 에서 return 은 컴포넌트의 생애주기와 관련이 있는데, 컴포넌트가 언마운트될때 (componentWillUnmount) 실행이 되는 함수이다.
