import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, Grid, OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { easing } from 'maath'
import { BackButton, Box, Container } from 'src/components'
import { S2WTKamdo } from './components'

export default function Kamdo() {
    return (
        <Box className='w-screen h-screen'>
            <Canvas gl={{ logarithmicDepthBuffer: true }} shadows camera={{ position: [-15, 0, 10], fov: 25 }}>
                <fog attach="fog" args={['black', 15, 21.5]} />
                <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={false}>
                    <S2WTKamdo rotation={[0, Math.PI, 0]} />
                </Stage>
                <Grid renderOrder={-1} position={[0, -1.85, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
                <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={1} mipmapBlur />
                </EffectComposer>
                <Environment background preset="sunset" blur={0.8} />
            </Canvas>
            <Box sx={{
                position: 'absolute',
                top: 10,
                left: 10,
            }}>
                <BackButton link='/' title='Back' />
            </Box>
        </Box>
    )
}


