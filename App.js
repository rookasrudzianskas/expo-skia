import React from "react";
import { Platform, useWindowDimensions } from 'react-native';
import {
  Canvas,
  useImage,
  Image,
  Group,
  Text,
  matchFont,
} from '@shopify/react-native-skia';
const App = () => {
  const { width, height } = useWindowDimensions();
  const bg = useImage(require('./assets/sprites/background-day.png'));
  const bird = useImage(require('./assets/sprites/yellowbird-upflap.png'));
  const r = width * 0.33;

  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit={'cover'} />
      <Image image={bird} x={width / 2} y={height / 2} width={r} height={r} />
    </Canvas>
  );
};

export default App;
