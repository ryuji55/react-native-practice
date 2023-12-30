import { FC } from "react";
import { Image, Text } from "react-native";
import styled from "styled-components/native";

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

export const ListItem: FC = () => {
  return (
    <Box>
      <LeftBox>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
        />
      </LeftBox>
      <RightBox>
        <Text>
          これはテストで文章をとりあえず準備しているだけなので、何の内容もないものです！
        </Text>
      </RightBox>
    </Box>
  );
};
