import { Button as ButtonWrapper } from "./ButtonStyle";

const Button = ({ children, ...prop }) => {
  return <ButtonWrapper {...prop}>{children}</ButtonWrapper>;
};

export default Button;
