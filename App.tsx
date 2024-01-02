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
      <ListItem
        imageUrl="https://picsum.photos/seed/picsum/200/300"
        title="1つ目のタイトル"
        author="yunosuke"
      />
      <ListItem
        imageUrl="https://picsum.photos/200/300?grayscale
        "
        title="2つ目のタイトル"
        author="yuki"
      />
      <ListItem
        imageUrl="https://picsum.photos/200/300/?blur"
        title="3つ目のタイトル"
        author="yano"
      />
      <StatusBar style="auto" />
    </Container>
  );
}
