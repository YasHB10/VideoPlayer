// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
      fullScreen: true,
      //assetRoot: 'https://qnafactbot13812c.blob.core.windows.net/',
    ...options,
  });

    r360.controls.fillCameraProperties([0,0,0], [0,0,180,1]);
    const centerPanel = new Surface(3000, 700, Surface.SurfaceShape.Cylinder);
    centerPanel.setAngle(0, 0);

    //subtitleSurface.recenter(cameraQuat, 'all');

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
      r360.createRoot('FB01', { /* initial props */ }),
      centerPanel
  );
    //r360.getDefaultSurface()
    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL('360_world.png'), { format: '3DLR'});

}

window.React360 = {init};
