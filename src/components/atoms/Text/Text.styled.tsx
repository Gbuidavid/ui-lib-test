import styled from "styled-components";
interface TextStyledProps {
  isTitle?: boolean;
}
const TextStyled = styled.p<TextStyledProps>`
  font-size: 1.143rem;
  font-family: Circular std;
  font-weight: 400;
  color: #0b212c;
  margin: 0;
`;
export default TextStyled;
