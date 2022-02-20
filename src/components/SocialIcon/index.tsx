import React from "react";
import { StarView } from "./styles";
// import { Container } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const SocialIcon: React.FC = () => {
  return (
    <StarView>
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faHome} />
    </StarView>
  );
};

export default SocialIcon;
