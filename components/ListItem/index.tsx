import { FC } from "react";
import { Image, Text } from "react-native";
import styled from "styled-components/native";
interface Props {
  imageUrl: string;
  title: string;
  author: string;
}

const Box = styled.View`
  width: 100%;
  height: 100px;
  background-color: green;
  flex-direction: row;
`;

const LeftBox = styled.View`
  width: 100px;
  background-color: red;
`;

const RightBox = styled.View`
  flex: 1;
  background-color: white;
`;

export const ListItem: FC<Props> = ({ imageUrl, title, author }) => {
  return (
    <Box>
      <LeftBox>
        <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />
      </LeftBox>
      <RightBox>
        <Text>{title}</Text>
        <Text>{author}</Text>
      </RightBox>
    </Box>
  );
};
