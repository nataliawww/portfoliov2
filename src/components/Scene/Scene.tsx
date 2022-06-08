import { useRef, useMemo, Suspense, useEffect, useState, MouseEvent } from 'react'
//R3F
import { Canvas, useFrame } from "@react-three/fiber";
import Glitter from '@components/Glitter/Glitter';
import { useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function Smiley() {
  const { scene } = useGLTF('bevel-smiley2.glb', true)
  const smiley = useRef()
  // @ts-ignore
  const geometry = scene.children[0].geometry
  const [posX, setX] = useState<number>(0)
  const [posY, setY] = useState<number>(5)
  const width = window.innerWidth * 0.5
  const height = window.innerHeight * 0.5

  const [matcap] = useMemo(() => {
    const loader = new TextureLoader();
    return [loader.load('/glow.jpeg')];
  }, []);

  useEffect(() => {
    const update = (e: any) => {
      setX(e.x - width)
      setY(e.y - height)
    }
    
    window.addEventListener('mousemove', update)
  }, [setX, setY, width, height]);

  useFrame(() => {
    const targetX = posX * 0.01;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const targetY = posY * 0.01;
    console.log(targetY)
    if (smiley) {
      // @ts-ignore
      smiley.current.rotation.y += 0.1 * ( (targetX * 0.1) - smiley.current.rotation.y)
    }
  });

  return (
    <mesh ref={smiley} position={[0, 1, 5]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 2, 0]} scale={[30, 30, 30]} geometry={geometry}>
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </mesh>
  )
}

const Scene = () => {
  return (
    <>
      <div id="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, 20] }}>
          <group>
            <mesh position={[0, -3, 0]}>
              <planeBufferGeometry attach="geometry" args={[65, 65]} />
              <Glitter />
            </mesh>
          </group>
          <Suspense fallback={null}>
            <Smiley />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Scene;
