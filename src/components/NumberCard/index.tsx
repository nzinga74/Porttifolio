import React from "react";
import {
  CardTextView,
  NumberCardView,
  NumberTextView,
  Number,
  Text,
} from "./styles";
import { PropsTYpe } from "./types";
const NumberCard: React.FC<PropsTYpe> = ({ number, content }) => {
  return (
    <NumberCardView>
      <NumberTextView>
        <Number>{number}</Number>
      </NumberTextView>
      <CardTextView>
        {content.map((value, index) => (
          <Text key={index}>{value}</Text>
        ))}
      </CardTextView>
    </NumberCardView>
  );
};
export default NumberCard;
