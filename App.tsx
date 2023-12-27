import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

const Box = styled.View`
  width: 100%;
  height: 100px;
  background-color: green;
`;

const LeftBox = styled.View`
  width: 100px;
  background-color: red;
`;

const RightBox = styled.View`
  flex: 1;
  width: 100px;
  background-color: blue;
`;

export default function App() {
  return (
    <Container>
      <Box>
        <LeftBox />
        <RightBox />
      </Box>
      <StatusBar style="auto" />
    </Container>
  );
}
