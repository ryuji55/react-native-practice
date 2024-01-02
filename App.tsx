import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { ListItem } from "./components/ListItem";

const Container = styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <ListItem />
      <ListItem />
      <ListItem />
      <StatusBar style="auto" />
    </Container>
  );
}
