import styled from "styled-components";

interface AcItemTextStyledProps {
  isOpen: boolean;
}
const AcItemTextStyled = styled.div<AcItemTextStyledProps>`
  padding-top: ${(props) => (props.isOpen ? " 15px" : "0px")};
  padding-bottom: ${(props) => (props.isOpen ? " 15px" : "0px")};
  margin: 0px 20px;
  transition: 300ms opacity ease-in-out, 300ms height ease-in-out,
    300ms padding-bottom ease-in-out, 300ms padding-top ease-in-out;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "initial" : "hidden")};
  height: ${(props) => (props.isOpen ? "100px" : "0px")};
`;

export default AcItemTextStyled;
