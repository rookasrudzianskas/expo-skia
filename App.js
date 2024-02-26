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
  const r = width * 0.33;

  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit={'cover'} />
    </Canvas>
  );
};

export default App;
