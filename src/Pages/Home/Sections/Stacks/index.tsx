import React from "react";
import {
  StackSection,
  StackSideLeft,
  StackSideRight,
  StackSider,
  StackSideRightContent,
  StackSideRightTitle,
  RightDeclaration,
  RightContent,
} from "./styled";
import { Container } from "../../../../styles";
import StackButton from "./components/StackButton";
const Stacks: React.FC = () => {
  return (
    <StackSection>
      <Container>
        <StackSider>
          <StackSideLeft>
            <StackButton />
            <StackButton />
          </StackSideLeft>
          <StackSideRight>
            <StackSideRightContent>
              <StackSideRightTitle>
                Ola meu nome é Nzinga António!
              </StackSideRightTitle>
              <RightDeclaration>
                Estamos fazer nossa vida sem pais ricos, somente com a força de
                vontade
              </RightDeclaration>
              <RightContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                dolores cum soluta temporibus suscipit aspernatur dolore tempora
                sint delectus dolor ea repellat molestias alias. Laudantium
                optio voluptatem harum nesciunt quis! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est, dolores cum soluta temporibus
                suscipit aspernatur dolore tempora sint delectus dolor ea
                repellat molestias alias. Laudantium optio voluptatem harum
                nesciunt quis!
              </RightContent>
            </StackSideRightContent>
          </StackSideRight>
        </StackSider>
      </Container>
    </StackSection>
  );
};
export default Stacks;
