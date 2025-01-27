import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './Cama3D.css';

function Cama3D() {
    const [cama, setCama] = useState('AZ3-AZ5');
    const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

    const sceneRef = useRef(null);

    const mudar = (e) => {
        const corDaCama = e.target.id;
        console.log(e.target.id);
        setCama(corDaCama);
        setIsLoading(true); // Define como carregando ao mudar
        if (window.innerWidth < 768) {
            window.scrollBy({
                top: 500, // Quantidade de pixels para descer
                behavior: 'smooth', // Suaviza o movimento
            });
        }
    };

    useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x474747); // Fundo azul claro

        const camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.set(3.5, 3, 3);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.0;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        if (sceneRef.current) {
            const existingCanvas = sceneRef.current.querySelector('canvas');
            if (existingCanvas) {
                sceneRef.current.removeChild(existingCanvas);
            }
            sceneRef.current.appendChild(renderer.domElement);
        }

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight2.position.set(-1, 2, -1);
        directionalLight2.castShadow = true;
        directionalLight2.shadow.mapSize.width = 2048;
        directionalLight2.shadow.mapSize.height = 2048;
        scene.add(directionalLight2);

        const loader = new GLTFLoader();
        let model = null;
        loader.load(
            `/models/${cama}.glb`,
            (gltf) => {
                model = gltf.scene;
                model.castShadow = true;
                model.receiveShadow = true;
                model.position.set(0, 0, 0);
                model.scale.set(1, 1, 1);
                scene.add(model);
                setIsLoading(false); // Define como carregando ao mudar
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% carregado');
            },
            (error) => {
                console.error('Erro ao carregar o modelo GLB', error);
            }
        );

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;

        // const handleResize = () => {
        //     renderer.setSize(window.innerWidth, window.innerHeight);
        //     camera.aspect = window.innerWidth / window.innerHeight;
        //     camera.updateProjectionMatrix();
        // };
        if (sceneRef.current) {
            const container = sceneRef.current; // Div pai
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);
        }

        const handleResize = () => {
            if (sceneRef.current) {
                const container = sceneRef.current;
                renderer.setSize(container.clientWidth, container.clientHeight);
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
            }
        };

        window.addEventListener('resize', handleResize);

        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            if (model) {
                model.rotation.y += 0.003; // Rotação no eixo Y
            }

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            controls.dispose();
            cancelAnimationFrame(animationFrameId);
            renderer.dispose();
        };
    }, [cama]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Faz a rolagem ser suave
        });
    };

    return (
        <div className="camasContainer">
            {isLoading && (
                <div className="loading">
                    Carregando... <div className="c-loader"></div>
                </div>
            )}{' '}
            {/* Exibe o texto de carregamento */}
            <div className="botoes">
                <button className="btnAZ3-AZ5" onClick={mudar} id="AZ3-AZ5">
                    AZ3 - AZ5
                </button>
                <button className="btnAZ3-AZ6" onClick={mudar} id="AZ3-AZ6">
                    AZ3 - AZ6
                </button>
                <button className="btnAZ4-AZ5" onClick={mudar} id="AZ4-AZ5">
                    AZ4 - AZ5
                </button>
                <button className="btnB2-B3" onClick={mudar} id="B2-B3">
                    B2 - B3
                </button>
                <button className="btnB3-B3" onClick={mudar} id="B3-B3">
                    B3 - B3
                </button>
                <button className="btnB3-B5" onClick={mudar} id="B3-B5">
                    B3 - B5
                </button>
                <button className="btnB3-RA3" onClick={mudar} id="B3-RA3">
                    B3 - RA3
                </button>
                <button className="btnC2-C4" onClick={mudar} id="C2-C4">
                    C2 - C4
                </button>
                <button className="btnC2-C2" onClick={mudar} id="C2-C2">
                    C2 - C2
                </button>
                <button className="btnC3-C4" onClick={mudar} id="C3-C4">
                    C3 - C4
                </button>
                <button className="btnC3-C5" onClick={mudar} id="C3-C5">
                    C3 - C5
                </button>
                <button className="btnRA3-RA3" onClick={mudar} id="RA3-RA3">
                    RA3 - RA3
                </button>
                <button className="btnRA3-RA4" onClick={mudar} id="RA3-RA4">
                    RA3 - RA4
                </button>
                <button className="btnRA3-RA5" onClick={mudar} id="RA3-RA5">
                    RA3 - RA5
                </button>
                <button className="btnV3-B3" onClick={mudar} id="V3-B3">
                    V3 - B3
                </button>
                <button className="" onClick={mudar} id="Quarto3d2">
                    Quarto
                </button>
            </div>
            <div ref={sceneRef} className="imagemCama" />
            <button onClick={scrollToTop} className="botaoSubirAoTopo">
                Voltar ao topo
            </button>
        </div>
    );
}

export default Cama3D;
