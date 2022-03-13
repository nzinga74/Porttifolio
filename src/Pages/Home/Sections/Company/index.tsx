import React, { useEffect } from "react";
import {
  CompanySection,
  Title,
  ContentSection,
  ContentText,
  ContentView,
  ContentIconView,
  StarView,
} from "./styles";
import { Container } from "../../../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { Carrouselsettings } from "../../../../constants";
import { companyVariants } from "./animation";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
const Company: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) animation.start("animate");
  }, [inView]);

  return (
    <>
      <CompanySection>
        <Container>
          <ContentSection
            ref={ref}
            variants={companyVariants}
            initial="initial"
            animate={animation}
          >
            <Title>Empresas</Title>
            <Slider {...Carrouselsettings}>
              <div>
                <ContentView>
                  <div>
                    <StarView>
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                    </StarView>
                    <ContentText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est, fuga voluptatibus! At perspiciatis aut cupiditate,
                      sequi iure minima quasi reiciendis ut dolores debitis
                      ratione, quaerat facere ipsum itaque iusto perferendis!
                    </ContentText>
                  </div>
                  <ContentIconView>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      size={"3x"}
                      width={100}
                      color="#7c7d81"
                      height={100}
                    />
                  </ContentIconView>
                </ContentView>
              </div>
              <div>
                <ContentView>
                  <div>
                    <StarView>
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                    </StarView>
                    <ContentText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est, fuga voluptatibus! At perspiciatis aut cupiditate,
                      sequi iure minima quasi reiciendis ut dolores debitis
                      ratione, quaerat facere ipsum itaque iusto perferendis!
                    </ContentText>
                  </div>
                  <ContentIconView>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      size={"3x"}
                      width={100}
                      color="#7c7d81"
                      height={100}
                    />
                  </ContentIconView>
                </ContentView>
              </div>
              <div>
                <ContentView>
                  <div>
                    <StarView>
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                      <FontAwesomeIcon icon={faStar} color="#65f4aa" />
                    </StarView>
                    <ContentText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est, fuga voluptatibus! At perspiciatis aut cupiditate,
                      sequi iure minima quasi reiciendis ut dolores debitis
                      ratione, quaerat facere ipsum itaque iusto perferendis!
                    </ContentText>
                  </div>
                  <ContentIconView>
                    <FontAwesomeIcon
                      icon={faQuoteRight}
                      size={"3x"}
                      width={100}
                      color="#7c7d81"
                      height={100}
                    />
                  </ContentIconView>
                </ContentView>
              </div>
            </Slider>
          </ContentSection>
        </Container>
      </CompanySection>
    </>
  );
};
export default Company;
