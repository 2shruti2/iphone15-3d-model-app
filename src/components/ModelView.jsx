import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Suspense, useState } from "react";
import * as THREE from "three";
import Loader from "./Loader";

import Lights from "./Lights";
import IPhone from "./IPhone";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  const [autoRotate, setAutoRotate] = useState(true);

  const handleTouch = () => {
    setAutoRotate(false);
  };

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={4} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        autoRotate={autoRotate}
        onStart={handleTouch}
        autoRotateSpeed={3}
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
