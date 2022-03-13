import styled from "styled-components";
import { motion } from "framer-motion";
export const Headers = styled.div`
  background-color: #2d2e32;
  width: 100%;
  height: 630px;
`;
export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
export const HeaderSide = styled.div`
  width: 100%;
  display: flex;
  padding-top: 60px;
`;
export const HeaderSideRight = styled.div`
  width: 60%;
  height: 560px;
`;

export const HeaderSideLeft = styled(motion.div)`
  width: 40%;
  height: 560px;
  margin-top: 100px;
`;

export const HeaderContent = styled.div`
  margin-top: 25px;
`;
export const HeaderCOntentTitle = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 20px;
`;
export const HeaderContentText = styled.p`
  color: #aaa;
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.5;
`;
export const ChatLink = styled.p`
  color: #6ff4a5;
  font-weight: bold;
  font-size: 14px;
  margin-top: 40px;
  text-decoration: underline;
  margin-bottom: 30px;
`;
export const WorkProjectContent = styled.div`
  display: flex;
  margin-top: 60px;
`;
