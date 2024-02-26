import React from "react";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import {useWindowDimensions} from "react-native";

const App = () => {
  const { width, height } = useWindowDimensions();
  const r = width * 0.33;

  return (
    <Canvas style={{ width, height, backgroundColor: 'red' }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};

export default App;
