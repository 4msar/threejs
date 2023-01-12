import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'
import { BufferGeometry, Mesh, Group, MeshBasicMaterial, PointLight, Object3D } from 'three'

export function S2WTKamdo(props: any) {
    const head = useRef({} as Group)
    const stripe = useRef({} as MeshBasicMaterial)
    const light = useRef({} as PointLight)

    const { nodes, materials }: {
        nodes: Record<string, any>,
        materials: Record<string, any>
    } = useGLTF('/assets/s2wt_kamdo.glb')

    useFrame((state, delta) => {
        const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2
        stripe.current.color.setRGB(1 + t * 10, 2, 20 + t * 50)
        easing.dampE(
            head.current.rotation,
            [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0],
            0.4,
            delta,
            0.1
        )
        light.current.intensity = 1 + t * 2
    })
    return (
        <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes?.body001?.geometry}
                material={materials.Body}
            />
            <group ref={head}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes?.head001?.geometry}
                    material={materials.Head}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes?.stripe001?.geometry}>
                    <meshBasicMaterial
                        ref={stripe}
                        toneMapped={false}
                    />
                    <pointLight
                        ref={light}
                        intensity={1}
                        color={[10, 2, 5]}
                        distance={2.5}
                    />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload('/assets/s2wt_kamdo.glb')