import { FC } from "react";
import Header from "../../components/Header";
import Stacks from "./Sections/Stacks";
import Company from "./Sections/Company";
import Tech from "./Sections/Tech";
import Project from "./Sections/Project";
import Footer from "../../components/Footer";
const Home: FC = () => {
  return (
    <>
      <Header />
      <Stacks />
      <Company />
      <Tech />
      <Project />
      <Footer />
    </>
  );
};
export default Home;
