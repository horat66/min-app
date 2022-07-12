import React, { useRef, Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber';
import { Html, useProgress, useGLTF, softShadows, OrbitControls } from '@react-three/drei'



function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
  
  softShadows();  
            
  function EnergyDraco({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/EnergyDraco.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[1.49, 2.18, -7.06]} rotation={[0, Math.PI / 2, 0]} scale={[3.15, -0.33, 3.04]}>
          <mesh geometry={nodes.Cube010_1.geometry} material={materials.Water} />
          <mesh geometry={nodes.Cube010_2.geometry} material={materials.dam} />
          <mesh geometry={nodes.Cube010_3.geometry} material={materials.gate} />
          <mesh geometry={nodes.Cube010_4.geometry} material={materials['dam-road']} />
          <mesh geometry={nodes.Cube010_5.geometry} material={materials.Green} />
        </group>
        <group position={[-5.78, 5.36, 9.51]} scale={1.46}>
          <mesh geometry={nodes.Цилиндр003.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Цилиндр003_1.geometry} material={materials['Green.001']} />
          <mesh geometry={nodes.Цилиндр003_2.geometry} material={materials['Material.005']} />
        </group>
        <mesh geometry={nodes.Cube010.geometry} material={materials['Material.006']} position={[-2.38, 2.87, 10.69]} scale={[0.28, 1, 1]} />
        <mesh geometry={nodes.Cube011.geometry} material={materials['Material.006']} position={[-1.66, 2.87, 10.69]} scale={[0.28, 1, 1]} />
        <mesh geometry={nodes.Cube012.geometry} material={materials['Material.006']} position={[-0.95, 2.87, 10.69]} scale={[0.28, 1, 1]} />
        <mesh geometry={nodes.Cube013.geometry} material={materials['Material.006']} position={[-2.38, 2.87, 12.85]} scale={[0.28, 1, 1]} />
        <mesh geometry={nodes.Cube014.geometry} material={materials['Material.006']} position={[-1.66, 2.87, 12.85]} scale={[0.28, 1, 1]} />
        <mesh geometry={nodes.Cube015.geometry} material={materials['Material.006']} position={[-0.95, 2.87, 12.85]} scale={[0.28, 1, 1]} />
        <group position={[-1.68, 4.13, 7.27]} rotation={[Math.PI / 2, 0, 0]} scale={1.46}>
          <mesh geometry={nodes.Цилиндр002.geometry} material={materials['Green.001']} />
          <mesh geometry={nodes.Цилиндр002_1.geometry} material={materials['Material.005']} />
        </group>
        <mesh geometry={nodes.Terrain.geometry} material={materials['Material.004']} position={[0, 0.96, 0]} scale={[-17.4, -0.94, -17.4]} />
        <group position={[11.99, 2.14, -1.38]} scale={[2.29, 0.26, 2.29]}>
          <mesh geometry={nodes.Cube002_1.geometry} material={materials.Green} />
          <mesh geometry={nodes.Cube002_2.geometry} material={materials['Material.002']} />
        </group>
        <mesh geometry={nodes.polySurface9_lambert1_0001.geometry} material={materials.lambert1} position={[11.99, 1.63, -1.38]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.polySurface11_lambert1_0001.geometry} material={materials.lambert1} position={[11.99, 1.63, -1.38]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.polySurface12_lambert1_0001.geometry} material={materials.lambert1} position={[11.99, 1.63, -1.38]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.polySurface10_lambert1_0001.geometry} material={materials.lambert1} position={[11.99, 8.7, -0.78]} rotation={[Math.PI / 2, 1.44, Math.PI / 2]} />
        <group position={[11.99, 2.14, -7.31]} scale={[2.29, 0.26, 2.29]}>
          <mesh geometry={nodes.Cube018.geometry} material={materials.Green} />
          <mesh geometry={nodes.Cube018_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh geometry={nodes.polySurface9_lambert1_0002.geometry} material={materials.lambert1} position={[11.99, 1.63, -7.31]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.polySurface11_lambert1_0002.geometry} material={materials.lambert1} position={[11.99, 1.63, -7.31]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.polySurface12_lambert1_0002.geometry} material={materials.lambert1} position={[11.99, 1.63, -7.31]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.polySurface10_lambert1_0002.geometry} material={materials.lambert1} position={[11.99, 8.7, -6.71]} rotation={[Math.PI / 2, 1.44, Math.PI / 2]} />
        <group position={[11.99, 2.14, -12.82]} scale={[2.29, 0.26, 2.29]}>
          <mesh geometry={nodes.Cube019.geometry} material={materials.Green} />
          <mesh geometry={nodes.Cube019_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh geometry={nodes.polySurface9_lambert1_0003.geometry} material={materials.lambert1} position={[11.99, 1.63, -12.82]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.polySurface11_lambert1_0003.geometry} material={materials.lambert1} position={[11.99, 1.63, -12.82]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.polySurface12_lambert1_0003.geometry} material={materials.lambert1} position={[11.99, 1.63, -12.82]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.polySurface10_lambert1_0003.geometry} material={materials.lambert1} position={[11.99, 8.7, -12.22]} rotation={[Math.PI / 2, 1.44, Math.PI / 2]} />
        <group position={[7.04, 2.12, 13.57]} scale={[2.29, 0.26, 2.29]}>
          <mesh geometry={nodes.Cube005_1.geometry} material={materials.Green} />
          <mesh geometry={nodes.Cube005_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube005_3.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube005_4.geometry} material={materials.CeldaFotovoltaica_MAT} />
          <mesh geometry={nodes.Cube005_5.geometry} material={materials['[Color_002]2']} />
          <mesh geometry={nodes.Cube005_6.geometry} material={materials['[Color_006]']} />
          <mesh geometry={nodes.Cube005_7.geometry} material={materials['[Metal_Corrogated_Shiny]4']} />
          <mesh geometry={nodes.Cube005_8.geometry} material={materials['[Concrete_Aggregate_Smoke]1']} />
          <mesh geometry={nodes.Cube005_9.geometry} material={materials['[Color_003]']} />
          <mesh geometry={nodes.Cube005_10.geometry} material={materials.Tesla2} />
          <mesh geometry={nodes.Cube005_11.geometry} material={materials['[0135_DarkGray]']} />
          <mesh geometry={nodes.Cube005_12.geometry} material={materials['[0136_Charcoal]']} />
          <mesh geometry={nodes.Cube005_13.geometry} material={materials['[0131_Silver]']} />
          <mesh geometry={nodes.Cube005_14.geometry} material={materials['[Color_001]']} />
          <mesh geometry={nodes.Cube005_15.geometry} material={materials['[0110_LightSlateGray]']} />
        </group>
        <group position={[7.04, 2.12, 7.57]} scale={[2.29, 0.26, 2.29]}>
          <mesh geometry={nodes.Cube006_1.geometry} material={materials.Green} />
          <mesh geometry={nodes.Cube006_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube006_3.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube006_4.geometry} material={materials.CeldaFotovoltaica_MAT} />
          <mesh geometry={nodes.Cube006_5.geometry} material={materials['[Color_002]2']} />
          <mesh geometry={nodes.Cube006_6.geometry} material={materials['[Color_006]']} />
          <mesh geometry={nodes.Cube006_7.geometry} material={materials['[Metal_Corrogated_Shiny]4']} />
          <mesh geometry={nodes.Cube006_8.geometry} material={materials['[Concrete_Aggregate_Smoke]1']} />
          <mesh geometry={nodes.Cube006_9.geometry} material={materials['[Color_003]']} />
          <mesh geometry={nodes.Cube006_10.geometry} material={materials.Tesla2} />
          <mesh geometry={nodes.Cube006_11.geometry} material={materials['[0135_DarkGray]']} />
          <mesh geometry={nodes.Cube006_12.geometry} material={materials['[0136_Charcoal]']} />
          <mesh geometry={nodes.Cube006_13.geometry} material={materials['[0131_Silver]']} />
          <mesh geometry={nodes.Cube006_14.geometry} material={materials['[Color_001]']} />
          <mesh geometry={nodes.Cube006_15.geometry} material={materials['[0110_LightSlateGray]']} />
        </group>
        <group position={[12.81, 2.12, 7.57]} scale={[2.29, 0.26, 2.29]}>
          <mesh geometry={nodes.Cube007_1.geometry} material={materials.Green} />
          <mesh geometry={nodes.Cube007_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube007_3.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube007_4.geometry} material={materials.CeldaFotovoltaica_MAT} />
          <mesh geometry={nodes.Cube007_5.geometry} material={materials['[Color_002]2']} />
          <mesh geometry={nodes.Cube007_6.geometry} material={materials['[Color_006]']} />
          <mesh geometry={nodes.Cube007_7.geometry} material={materials['[Metal_Corrogated_Shiny]4']} />
          <mesh geometry={nodes.Cube007_8.geometry} material={materials['[Concrete_Aggregate_Smoke]1']} />
          <mesh geometry={nodes.Cube007_9.geometry} material={materials['[Color_003]']} />
          <mesh geometry={nodes.Cube007_10.geometry} material={materials.Tesla2} />
          <mesh geometry={nodes.Cube007_11.geometry} material={materials['[0135_DarkGray]']} />
          <mesh geometry={nodes.Cube007_12.geometry} material={materials['[0136_Charcoal]']} />
          <mesh geometry={nodes.Cube007_13.geometry} material={materials['[0131_Silver]']} />
          <mesh geometry={nodes.Cube007_14.geometry} material={materials['[Color_001]']} />
          <mesh geometry={nodes.Cube007_15.geometry} material={materials['[0110_LightSlateGray]']} />
        </group>
        <group position={[12.81, 2.12, 13.57]} scale={[2.29, 0.26, 2.29]}>
          <mesh geometry={nodes.Cube008.geometry} material={materials.Green} />
          <mesh geometry={nodes.Cube008_1.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube008_2.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube008_3.geometry} material={materials.CeldaFotovoltaica_MAT} />
          <mesh geometry={nodes.Cube008_4.geometry} material={materials['[Color_002]2']} />
          <mesh geometry={nodes.Cube008_5.geometry} material={materials['[Color_006]']} />
          <mesh geometry={nodes.Cube008_6.geometry} material={materials['[Metal_Corrogated_Shiny]4']} />
          <mesh geometry={nodes.Cube008_7.geometry} material={materials['[Concrete_Aggregate_Smoke]1']} />
          <mesh geometry={nodes.Cube008_8.geometry} material={materials['[Color_003]']} />
          <mesh geometry={nodes.Cube008_9.geometry} material={materials.Tesla2} />
          <mesh geometry={nodes.Cube008_10.geometry} material={materials['[0135_DarkGray]']} />
          <mesh geometry={nodes.Cube008_11.geometry} material={materials['[0136_Charcoal]']} />
          <mesh geometry={nodes.Cube008_12.geometry} material={materials['[0131_Silver]']} />
          <mesh geometry={nodes.Cube008_13.geometry} material={materials['[Color_001]']} />
          <mesh geometry={nodes.Cube008_14.geometry} material={materials['[0110_LightSlateGray]']} />
        </group>
      </group>
    )
  }
  


  function Generacion(props) {
    const mesh = useRef()
    const { viewport } = useThree()
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={(viewport.width / 70)}>        
        <EnergyDraco />        
      </mesh>
    )
  }

 export default function EnergiaDistribucion () {
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
  
              <Generacion />
              <OrbitControls />
            </Suspense>
          </Canvas>
        </div>
        <div className='multimedia-text'>
          <h1 className="subtitle-number">
          03
          </h1>
          <h1 className="subtitle">
          DISTRIBUCIÓN
          </h1>                   
          <br/>
          <p className="bodyCopy">Consiste en recibir la energía de alta tensión transportada por las grandes torres y 
          recibirlas en Subestaciones de Distribución. Cuando la energía llega a los hogares es conducida a través de un cable llamado acometida.</p>
          <p className="bulletpoint"><span className="item">Subestación de Distribución:</span> Usan transformadores que minimizan el voltaje de la energía para que 
          pueda ser llevada a los hogares y empresas a través de postes y cables.</p> 
          <p className="bulletpoint"><span className="item">Acometida:</span> Se ubica del poste en la calle al medidor de energía en cada edificación. 
          Este medidor permite leer el consumo de energía de cada usuario industrial, comercial y residencial.</p>           
        </div>
      </div>
    </>
  );
}
