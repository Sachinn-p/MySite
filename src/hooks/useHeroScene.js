import { useEffect } from 'react';

function useHeroScene(mountRef) {
  useEffect(() => {
    const mount = mountRef.current;
    const parent = mount?.closest('.hero') || mount?.parentElement;
    const { THREE } = window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!mount || !parent || !THREE) {
      return undefined;
    }

    const testCanvas = document.createElement('canvas');
    const webgl =
      testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');

    if (!webgl) {
      return undefined;
    }

    let renderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
    } catch (error) {
      return undefined;
    }

    const motionFactor = prefersReducedMotion ? 0.34 : 1;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 12);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));

    const mintLight = new THREE.PointLight(0x7fefbd, 1.35, 30);
    mintLight.position.set(5, 3, 8);
    scene.add(mintLight);

    const redLight = new THREE.PointLight(0xff6b6b, 1.15, 30);
    redLight.position.set(-6, -2, 6);
    scene.add(redLight);

    const yellowLight = new THREE.PointLight(0xffd93d, 1.1, 24);
    yellowLight.position.set(0, 6, 5);
    scene.add(yellowLight);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.7, 0),
      new THREE.MeshStandardMaterial({
        color: 0x0b0f14,
        metalness: 0.34,
        roughness: 0.46,
      }),
    );
    root.add(core);

    const wireframe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.84, 0),
      new THREE.MeshBasicMaterial({
        color: 0x7fefbd,
        wireframe: true,
        transparent: true,
        opacity: 0.42,
      }),
    );
    root.add(wireframe);

    const ringConfigs = [
      { radius: 3.2, color: 0x7fefbd, speed: 0.0056, rotation: [0.95, 0.2, 0.2] },
      { radius: 4.2, color: 0xff6b6b, speed: -0.0042, rotation: [1.22, 0.86, 0.4] },
      { radius: 5.1, color: 0xffd93d, speed: 0.0032, rotation: [0.52, 1.12, 1.3] },
    ];

    const orbitObjects = [];

    ringConfigs.forEach((config, index) => {
      const ringGroup = new THREE.Group();
      ringGroup.rotation.set(config.rotation[0], config.rotation[1], config.rotation[2]);

      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(config.radius, 0.045, 12, 120),
        new THREE.MeshBasicMaterial({
          color: config.color,
          transparent: true,
          opacity: 0.82,
        }),
      );
      ringGroup.add(torus);

      const orbiter = new THREE.Mesh(
        new THREE.SphereGeometry(0.12 + index * 0.03, 18, 18),
        new THREE.MeshBasicMaterial({
          color: config.color,
        }),
      );
      orbiter.position.x = config.radius;
      ringGroup.add(orbiter);

      orbitObjects.push({
        group: ringGroup,
        orbiter,
        radius: config.radius,
        speed: config.speed,
        angle: index * Math.PI * 0.7,
      });

      root.add(ringGroup);
    });

    for (let index = 0; index < 12; index += 1) {
      const tetra = new THREE.Mesh(
        new THREE.TetrahedronGeometry(0.18 + Math.random() * 0.2),
        new THREE.MeshBasicMaterial({
          color: [0x7fefbd, 0xff6b6b, 0xffd93d][index % 3],
          transparent: true,
          opacity: 0.75,
        }),
      );

      tetra.position.set(
        (Math.random() - 0.5) * 11,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 7,
      );
      tetra.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      );

      root.add(tetra);
      orbitObjects.push({
        tetra,
        drift: 0.002 + Math.random() * 0.003,
      });
    }

    const targetRotation = { x: 0, y: 0 };
    let animationFrameId = 0;

    const handleMouseMove = (event) => {
      const bounds = parent.getBoundingClientRect();
      const pointerX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      const pointerY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;

      targetRotation.y = pointerX * 0.35;
      targetRotation.x = -pointerY * 0.22;
    };

    const handleMouseLeave = () => {
      targetRotation.x = 0;
      targetRotation.y = 0;
    };

    const resize = () => {
      const bounds = mount.getBoundingClientRect();
      const width = bounds.width || parent.clientWidth || 500;
      const height = bounds.height || parent.clientHeight || 500;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const animate = () => {
      root.rotation.x += (targetRotation.x - root.rotation.x) * 0.05;
      root.rotation.y += (targetRotation.y - root.rotation.y) * 0.05;
      core.rotation.x += 0.0028 * motionFactor;
      core.rotation.y += 0.0044 * motionFactor;
      wireframe.rotation.x -= 0.0022 * motionFactor;
      wireframe.rotation.z += 0.003 * motionFactor;

      orbitObjects.forEach((item) => {
        if (item.group) {
          item.group.rotation.z += item.speed * motionFactor;
          item.angle += item.speed * 2.4 * motionFactor;
          item.orbiter.position.set(
            Math.cos(item.angle) * item.radius,
            Math.sin(item.angle) * item.radius,
            0,
          );
        }

        if (item.tetra) {
          item.tetra.rotation.x += item.drift * motionFactor;
          item.tetra.rotation.y += item.drift * 1.2 * motionFactor;
          item.tetra.position.y +=
            Math.sin(Date.now() * 0.0012 + item.drift * 1000) * 0.0025 * motionFactor;
        }
      });

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    resize();
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      renderer.dispose();
      mount.innerHTML = '';
    };
  }, [mountRef]);
}

export default useHeroScene;
