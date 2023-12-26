import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <Text>初めてのReactNativeだぜ！</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
