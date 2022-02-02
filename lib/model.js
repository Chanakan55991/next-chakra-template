import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

export function loadOBJModel(scene, objPath, matPath, jpgPath) {
  return new Promise((resolve, reject) => {
    new MTLLoader().load(matPath, function (materials) {
      materials.preload();
      const loader = new OBJLoader();

      loader.setMaterials(materials).load(
        objPath,
        (obj) => {
          obj.name = 'room';
          obj.position.y = 4;
          obj.position.x = 0;

          const texture = new THREE.TextureLoader().load(jpgPath);

          obj.traverse(function (child) {
            if (child.isMesh) {
              child.material.map = texture;
            }
          });

          scene.add(obj);

          resolve(obj);
        },
        undefined,
        function (error) {
          reject(error);
        }
      );
    });
  });
}
