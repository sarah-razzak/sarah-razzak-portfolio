import { useEffect, useState } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

const useCustom3DModel = (modelPath) => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const loader = modelPath.endsWith('.fbx') ? new FBXLoader() : new OBJLoader();
      try {
        setLoading(true);
        let loadedModel;

        if (modelPath.endsWith('.obj')) {
          const mtlLoader = new MTLLoader();
          const material = await mtlLoader.loadAsync(`${modelPath.slice(0, -4)}.mtl`);
          material.preload();
          loader.setMaterials(material);
          loadedModel = await loader.loadAsync(modelPath);
        } else {
          loadedModel = await loader.loadAsync(modelPath);
        }

        setModel(loadedModel);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadModel();
  }, [modelPath]);

  return { model, loading, error };
};

export default useCustom3DModel;
