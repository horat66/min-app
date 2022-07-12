import React, { useRef, Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber';
import { Html, useProgress, useGLTF, softShadows, OrbitControls } from '@react-three/drei'


function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
  
  softShadows();  
            
  function Hidrocar({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/hidroDraco.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.gas_refining_02001.geometry} material={materials.buildings} position={[0.38, 0.02, 0.11]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.gas_refining_03001.geometry} material={materials.buildings} position={[0.8, 0.02, 0.23]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.oil_platform_01001.geometry} material={materials.buildings} position={[1.13, 0.37, -0.96]} scale={1.47} />
        <mesh geometry={nodes.oil_pump_01001.geometry} material={materials.buildings} position={[0.28, 0, -0.47]} />
        <mesh geometry={nodes.oil_pump_02001.geometry} material={materials.buildings} position={[0.89, 0, -0.47]} />
        <mesh geometry={nodes.oil_pump_03001.geometry} material={materials.buildings} position={[1.5, 0, -0.47]} />
        <mesh geometry={nodes.oil_refining_01001.geometry} material={materials.buildings} position={[0.05, 0.01, -1.05]} rotation={[0, -1.57, 0]} />
        <mesh geometry={nodes.oil_refining_03001.geometry} material={materials.buildings} position={[-0.69, 0.01, 0.2]} />
        <mesh geometry={nodes.oil_refining_05001.geometry} material={materials.buildings} position={[-1.13, 0.01, 0.16]} rotation={[0, 1.57, 0]} />
        <mesh geometry={nodes.oil_tank_03001.geometry} material={materials.buildings} position={[-0.2, 0, -0.26]} />
        <mesh geometry={nodes.oil_tank_04001.geometry} material={materials.buildings} position={[-0.2, 0, 0.32]} />
        <mesh geometry={nodes.petrol_refining_09001.geometry} material={materials.buildings} position={[-1.12, 0.02, -0.6]} />
        <mesh geometry={nodes.petrol_refining_10001.geometry} material={materials.buildings} position={[-0.79, 0.02, -0.6]} />
        <mesh geometry={nodes.petrol_refining_12001.geometry} material={materials.buildings} position={[-0.85, 0.02, -0.93]} />
        <mesh geometry={nodes.pipeline_01001.geometry} material={materials.buildings} position={[1.83, 0.09, -0.14]} />
        <mesh geometry={nodes.pipeline_02001.geometry} material={materials.buildings} position={[1.43, 0.09, -2.54]} />
        <mesh geometry={nodes.railway_01.geometry} material={materials.buildings} position={[-1.98, 0.01, -2.4]} />
        <mesh geometry={nodes.railway_tank_01001.geometry} material={materials.buildings} position={[-1.98, 0.17, 0.04]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.sea.geometry} material={materials.sea} position={[0.54, 0.09, -2.54]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[0.01, 0.03, 0.03]} />
        <mesh geometry={nodes.train_01001.geometry} material={materials.buildings} position={[-1.99, 0.17, 0.61]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.pipeline_01002.geometry} material={materials.buildings} position={[0.26, 0.09, -2.37]} />
        <mesh geometry={nodes.Oil_Cylinder.geometry} material={materials.buildings} position={[-0.08, 0.37, 2.1]} scale={2.89} />
        <group position={[-0.21, -0.21, 1.89]}>
          <mesh geometry={nodes.Plane008.geometry} material={materials.buildings} />
          <mesh geometry={nodes.Plane008_1.geometry} material={materials.White} />
        </group>
        <mesh geometry={nodes.Plataforma_Esferas.geometry} material={materials.buildings} position={[-0.42, 0.37, 1.82]} scale={0.45} />
        <mesh geometry={nodes.Plataforma_Tanques.geometry} material={materials.buildings} position={[0, 0.37, 1.89]} scale={0.66} />
        <mesh geometry={nodes.PlataformaCasa.geometry} material={materials.buildings} position={[-0.22, 0.43, 1.66]} />
        <mesh geometry={nodes.PlataformaGrua.geometry} material={materials.buildings} position={[0, 0.37, 1.67]} rotation={[Math.PI, 0, Math.PI]} scale={0.51} />
        <mesh geometry={nodes.PlataformaTaladro.geometry} material={materials.buildings} position={[-0.21, 0.42, 1.89]} scale={[1, 1.81, 1]} />
        <mesh geometry={nodes.PlataformaTubos.geometry} material={materials.buildings} position={[-0.15, 0.37, 1.89]} />
      </group>
    )
  }
  
  function Upstream(props) {
    const mesh = useRef()
    const { viewport } = useThree()
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={(viewport.width / 5)}>        
        <Hidrocar />        
      </mesh>
    )
  }



  export default function HidrocarburosUpstream () {
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
    
                <Upstream />
                <OrbitControls />
              </Suspense>
            </Canvas>
          </div>
          <div className='multimedia-text'>
            <h1 className="subtitle-number">
              01
            </h1>
            <h1 className="subtitle">
              UPSTREAM
            </h1>                   
            <br/>      
            <p className="bulletpoint"><span className="item">Exploración:</span> Se adquiere un nuevo dominio minero onshore - en tierra - y/u offshore - en el mar -. 
            Se realizan trabajos de geología, geofísica y estudios de impacto medioambiental para determinar el potencial de los hidrocarburos acumulados.</p>
            <p className="bulletpoint"><span className="item">Desarrollo:</span> Se perforan pozos, se construyen sistemas de recolección y plantas de procesamiento.</p> 
            <p className="bulletpoint"><span className="item">Producción:</span> Se extraen las reservas del yacimiento para la comercialización del petróleo y el gas. 
            Se realizan labores de mantenimiento, control y transporte.</p>                      
          </div>
        </div>
      </>
    );
  }