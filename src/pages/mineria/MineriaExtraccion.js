import React, { useRef, Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber';
import { Html, useProgress, useGLTF, softShadows, OrbitControls } from '@react-three/drei'


function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
  
  softShadows();  
            
  function Minas({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/mineria-dos-Draco.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[12.63, 0, -5.69]} rotation={[Math.PI / 2, 0, -0.77]} scale={0.01}>
          <mesh geometry={nodes.Mesh007.geometry} material={materials.front_hydraulics} />
          <mesh geometry={nodes.Mesh007_1.geometry} material={materials.arm} />
          <mesh geometry={nodes.back_fan_base.geometry} material={materials.backBumperFan} />
          <mesh geometry={nodes.back_rims_axel_base.geometry} material={materials.axle_rims_02} />
          <mesh geometry={nodes.body_arm_base.geometry} material={materials.arm} />
          <mesh geometry={nodes.body_back_base.geometry} material={materials.arm} />
          <mesh geometry={nodes.Mesh049.geometry} material={materials.front1} />
          <mesh geometry={nodes.Mesh049_1.geometry} material={materials.arm} />
          <mesh geometry={nodes.body_under_base.geometry} material={materials.arm} />
          <mesh geometry={nodes.cabin_base.geometry} material={materials.arm} />
          <mesh geometry={nodes.front_rims_axel_base.geometry} material={materials.axle_rims_01} />
          <mesh geometry={nodes.glass_base.geometry} material={materials.glass} />
          <mesh geometry={nodes.inside_base.geometry} material={materials.insideCabin_parts} />
          <mesh geometry={nodes.railing_base.geometry} material={materials.railing_parts} />
          <mesh geometry={nodes.shovel_base.geometry} material={materials.bucket} />
          <mesh geometry={nodes.tires_base.geometry} material={materials.tires} />
        </group>
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.Minery} position={[0.48, -0.7, 0]} scale={[-21.71, 0.69, -21.71]} />
        <group position={[3.71, 0, -11.06]} rotation={[Math.PI / 2, 0, -3.07]} scale={2.74}>
          <mesh geometry={nodes.shovel_GEO_Mesh004_1.geometry} material={materials.Rod_MAT} />
          <mesh geometry={nodes.shovel_GEO_Mesh004_2.geometry} material={materials.Arm_MAT} />
          <mesh geometry={nodes.shovel_GEO_Mesh004_3.geometry} material={materials.Pipe_MAT} />
          <mesh geometry={nodes.shovel_GEO_Mesh004_4.geometry} material={materials.Body_MAT} />
          <mesh geometry={nodes.shovel_GEO_Mesh004_5.geometry} material={materials.phong3} />
          <mesh geometry={nodes.shovel_GEO_Mesh004_6.geometry} material={materials.Chair_MAT} />
          <mesh geometry={nodes.shovel_GEO_Mesh004_7.geometry} material={materials.Pedal_MAT} />
          <mesh geometry={nodes.shovel_GEO_Mesh004_8.geometry} material={materials.Control_MAT} />
          <mesh geometry={nodes.shovel_GEO_Mesh004_9.geometry} material={materials.Gear_MAT} />
          <mesh geometry={nodes.shovel_GEO_Mesh004_10.geometry} material={materials.Tire_MAT} />
        </group>
        <group position={[-14.15, 0, -9.28]} rotation={[-Math.PI, 1.36, -Math.PI]} scale={0.54}>
          <mesh geometry={nodes.Plane012.geometry} material={materials['DarkBrown.003']} />
          <mesh geometry={nodes.Plane012_1.geometry} material={materials['Brown.003']} />
        </group>
        <group position={[-14.59, 0, 7.54]} rotation={[-Math.PI, 0.33, -Math.PI]} scale={0.54}>
          <mesh geometry={nodes.Plane014.geometry} material={materials['DarkBrown.002']} />
          <mesh geometry={nodes.Plane014_1.geometry} material={materials['Brown.002']} />
        </group>
        <group position={[-8.11, 0, -4.06]} rotation={[0, 1, 0]} scale={0.54}>
          <mesh geometry={nodes.Plane017.geometry} material={materials['DarkBrown.001']} />
          <mesh geometry={nodes.Plane017_1.geometry} material={materials['Brown.001']} />
        </group>
        <group position={[-6.28, 0, 10.87]} rotation={[-Math.PI, 0.24, -Math.PI]} scale={0.54}>
          <mesh geometry={nodes.Plane018.geometry} material={materials.DarkBrown} />
          <mesh geometry={nodes.Plane018_1.geometry} material={materials.Brown} />
        </group>
        <mesh geometry={nodes.BrownRock1.geometry} material={materials.BrownRock1} position={[5.29, 0, -0.4]} rotation={[-0.04, -0.03, 0.3]} scale={0.41} />
        <mesh geometry={nodes.BrownRock2.geometry} material={materials.BrownRock2} position={[5.29, 0, -0.4]} rotation={[-0.34, 0.72, -2.85]} scale={0.26} />
        <mesh geometry={nodes.BrownRock3.geometry} material={materials.BrownRock3} position={[5.29, 0, -0.4]} scale={0.3} />
        <group position={[-4.22, 0.47, -2.31]} scale={0.34}>
          <mesh geometry={nodes.Cube004.geometry} material={materials.Box} />
          <mesh geometry={nodes.Cube004_1.geometry} material={materials['BoxMaterial.001']} />
          <mesh geometry={nodes.Cube004_2.geometry} material={materials.BoxMaterial} />
        </group>
        <mesh geometry={nodes.BrownRock1001.geometry} material={materials.BrownRock1} position={[6.94, 0, -0.4]} rotation={[-2.77, 1.46, 3.08]} scale={0.41} />
        <mesh geometry={nodes.BrownRock2001.geometry} material={materials.BrownRock2} position={[6.94, 0, -0.4]} rotation={[-2.81, 0.66, -0.14]} scale={0.26} />
        <mesh geometry={nodes.BrownRock3001.geometry} material={materials.BrownRock3} position={[6.94, 0, -0.4]} rotation={[-Math.PI, 1.43, -Math.PI]} scale={0.3} />
        <mesh geometry={nodes.BrownRock1002.geometry} material={materials.BrownRock1} position={[6.94, 0, 1.3]} rotation={[-2.77, 1.46, 3.08]} scale={0.41} />
        <mesh geometry={nodes.BrownRock2002.geometry} material={materials.BrownRock2} position={[6.94, 0, 1.3]} rotation={[-2.81, 0.66, -0.14]} scale={0.26} />
        <mesh geometry={nodes.BrownRock3002.geometry} material={materials.BrownRock3} position={[6.94, 0, 1.3]} rotation={[-Math.PI, 1.43, -Math.PI]} scale={0.3} />
        <group position={[2.49, 0.47, 17.58]} rotation={[-Math.PI, 1.18, -Math.PI]} scale={0.34}>
          <mesh geometry={nodes.Cube001.geometry} material={materials.Box} />
          <mesh geometry={nodes.Cube001_1.geometry} material={materials['BoxMaterial.001']} />
          <mesh geometry={nodes.Cube001_2.geometry} material={materials.BoxMaterial} />
        </group>
        <mesh geometry={nodes.BrownRock1003.geometry} material={materials.BrownRock1} position={[9.21, 0, 15]} rotation={[-0.2, -1.37, 0.11]} scale={0.41} />
        <mesh geometry={nodes.BrownRock2003.geometry} material={materials.BrownRock2} position={[9.21, 0, 15]} rotation={[-0.31, -0.57, 3.04]} scale={0.26} />
        <mesh geometry={nodes.BrownRock3003.geometry} material={materials.BrownRock3} position={[9.21, 0, 15]} rotation={[0, -1.34, 0]} scale={0.3} />
        <mesh geometry={nodes.BrownRock1004.geometry} material={materials.BrownRock1} position={[9.59, 0, 16.6]} rotation={[-0.04, 0.33, 0.32]} scale={0.41} />
        <mesh geometry={nodes.BrownRock2004.geometry} material={materials.BrownRock2} position={[9.59, 0, 16.6]} rotation={[-0.54, 1.05, -2.6]} scale={0.26} />
        <mesh geometry={nodes.BrownRock3004.geometry} material={materials.BrownRock3} position={[9.59, 0, 16.6]} rotation={[0, 0.37, 0]} scale={0.3} />
        <mesh geometry={nodes.BrownRock1005.geometry} material={materials.BrownRock1} position={[7.92, 0, 16.99]} rotation={[-0.04, 0.33, 0.32]} scale={0.41} />
        <mesh geometry={nodes.BrownRock2005.geometry} material={materials.BrownRock2} position={[7.92, 0, 16.99]} rotation={[-0.54, 1.05, -2.6]} scale={0.26} />
        <mesh geometry={nodes.BrownRock3005.geometry} material={materials.BrownRock3} position={[7.92, 0, 16.99]} rotation={[0, 0.37, 0]} scale={0.3} />
        <group position={[-0.85, 0, 19.83]} scale={0.47}>
          <mesh geometry={nodes.Cube006.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Cube006_1.geometry} material={materials.Wood_01} />
          <mesh geometry={nodes.Cube006_2.geometry} material={materials.Cemento} />
          <mesh geometry={nodes.Cube006_3.geometry} material={materials.Oro} />
        </group>
        <group position={[7.5, 0, 7.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.09}>
          <mesh geometry={nodes.object001_1.geometry} material={materials['material 7491']} />
          <mesh geometry={nodes.object001_2.geometry} material={materials['material 7497']} />
          <mesh geometry={nodes.object001_3.geometry} material={materials['material 7498']} />
          <mesh geometry={nodes.object001_4.geometry} material={materials['material 7516']} />
          <mesh geometry={nodes.object001_5.geometry} material={materials['material 7560']} />
          <mesh geometry={nodes.object001_6.geometry} material={materials['material 7875']} />
        </group>
        <group position={[4.02, -0.14, 20]} rotation={[Math.PI / 2, 0, 0]} scale={0.13}>
          <mesh geometry={nodes.object002_1.geometry} material={materials['material 7491']} />
          <mesh geometry={nodes.object002_2.geometry} material={materials['material 7492']} />
        </group>
        <group position={[8.09, -0.14, 20]} rotation={[Math.PI / 2, 0, -0.68]} scale={0.13}>
          <mesh geometry={nodes.object003_1.geometry} material={materials['material 7491']} />
          <mesh geometry={nodes.object003_2.geometry} material={materials['material 7492']} />
        </group>
      </group>
    )
  }
  
  function Extraccion(props) {
    const mesh = useRef()
    const { viewport } = useThree()
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={(viewport.width / 70)}>        
        <Minas />        
      </mesh>
    )
  }



  export default function MineriaExtraccion () {
    return (
      <>
        <div className='container-dynamic'>
          <div className='multimedia'>
            <Canvas shadows colorManagement camera={{ position: [0, 15, 30], fov: 60 }}>
              <Suspense fallback={() => Loader}>
                <ambientLight intensity={0.5} />                        
    
                <directionalLight
                  castShadow
                  position={[8, 2, 2]}
                  intensity={1.3}
                  // color="#e7b4b9"
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                  shadow-camera-far={50}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                />
                {/* top */}
                <pointLight position={[-4, 2, -2]} intensity={0.05} color='lightblue' />
    
                <Extraccion />
                <OrbitControls />
              </Suspense>
            </Canvas>
          </div>
          <div className='multimedia-text'>
            <h1 className="subtitle-number">
              01
            </h1>
            <h1 className="subtitle">
              EXTRACCIÓN
            </h1>                   
            <br/>
            <h2 className="subtitle02">Extracción a cielo abierto</h2>
            <p className="bodyCopy">Son las explotaciones que se desarrollan en la superficie del terreno, 
            mediante la eliminación de la vegetación y de las capas superiores de roca. </p>
            <p className="bulletpoint"><span className="item">Exploración:</span> Con perforadoras de alta tecnología se obtienen 
            muestras de roca que son analizadas para comprobar su contenido metálico.</p>
            <p className="bulletpoint"><span className="item">Perforación y Voladura:</span> Al ubicar los minerales, se realiza el minado y voladura 
            para fragmentar el terreno y proceder a la extracción.</p>
            <p className="bulletpoint"><span className="item">Carguío y Acarreo:</span> El mineral extraído es trasladado hacia la chancadora primaria.</p> 
            <h2 className="subtitle02">Extracción a subterránea:</h2>
            <p className="bodyCopy">Es la explotación de recursos mineros  que se desarrolla por debajo de la superficie del terreno. 
            Se realiza a través de túneles, pozos, chimeneas, galerías y cámaras. </p> 
          </div>
        </div>
      </>
    );
  }