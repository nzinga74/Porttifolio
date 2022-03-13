import React, { useEffect, useState } from "react";
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
import { useInView } from "react-intersection-observer";
import { data, data2 } from "./data";
import StackButton from "./components/StackButton";
import { useAnimation } from "framer-motion";
import { StackLeftVariants, StackRightVariants } from "./animate";

const Stacks: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    }
  }, [inView]);
  return (
    <StackSection>
      <Container>
        <StackSider ref={ref}>
          <StackSideLeft
            variants={StackLeftVariants}
            initial="initial"
            animate={animation}
          >
            <StackButton
              isActive={current === 1}
              data={data}
              onClick={() => setCurrent(1)}
            />
            <StackButton
              isActive={current === 2}
              data={data2}
              onClick={() => setCurrent(2)}
            />
          </StackSideLeft>
          <StackSideRight
            variants={StackRightVariants}
            initial="initial"
            animate={animation}
          >
            {current === 1 && (
              <StackSideRightContent
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <StackSideRightTitle>
                  Ola meu nome é Nzinga António!
                </StackSideRightTitle>
                <RightDeclaration>
                  Estamos fazer nossa vida sem pais ricos, somente com a força
                  de vontade
                </RightDeclaration>
                <RightContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  dolores cum soluta temporibus suscipit aspernatur dolore
                  tempora sint delectus dolor ea repellat molestias alias.
                  Laudantium optio voluptatem harum nesciunt quis! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Est, dolores cum
                  soluta temporibus suscipit aspernatur dolore tempora sint
                  delectus dolor ea repellat molestias alias. Laudantium optio
                  voluptatem harum nesciunt quis!
                </RightContent>
              </StackSideRightContent>
            )}

            {current === 2 && (
              <StackSideRightContent
                key={2}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <StackSideRightTitle>
                  Ola meu nome é Nzinga Enoque!
                </StackSideRightTitle>
                <RightDeclaration>
                  Estamos fazer nossa vida sem pais ricos, somente com a força
                  de vontade
                </RightDeclaration>
                <RightContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  dolores cum soluta temporibus suscipit aspernatur dolore
                  tempora sint delectus dolor ea repellat molestias alias.
                  Laudantium optio voluptatem harum nesciunt quis! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Est, dolores cum
                  soluta temporibus suscipit aspernatur dolore tempora sint
                  delectus dolor ea repellat molestias alias. Laudantium optio
                  voluptatem harum nesciunt quis!
                </RightContent>
              </StackSideRightContent>
            )}
          </StackSideRight>
        </StackSider>
      </Container>
    </StackSection>
  );
};
export default Stacks;
