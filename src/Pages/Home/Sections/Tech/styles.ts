import { motion } from "framer-motion";
import styled from "styled-components";

export const TechSection = styled.div`
  width: 100%;
  background-color: #25262a;
`;
export const Section = styled.section`
  display: flex;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
export const RightSide = styled(motion.div)`
  width: 50%;
  padding: 60px;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const LeftSide = styled(motion.div)`
  width: 50%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Title = styled.h2`
  color: white;
  font-weight: 400;
  padding-bottom: 40px;
`;
export const RightDeclaration = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 300;

  line-height: 1.5;
`;
export const RightContent = styled.p`
  color: #7c7d81;
  font-size: 14px;
  margin-top: 20px;
  line-height: 1.5;
`;
export const RightIconView = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;
export const ImageIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;
