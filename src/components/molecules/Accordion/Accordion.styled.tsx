import styled from "styled-components";

interface AcItemStyledProps {
  disabled?: boolean;
  isOpen: boolean;
}

const AcItemStyled = styled.li<AcItemStyledProps>`
  list-style: none;
  transition: all 300ms ease-in-out;
  margin: ${(props) => (props.isOpen ? "15px 0" : "0px 0")};
  width: 500px;
  border: 1px #0000001c solid;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.3);
  pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
  z-index: ${(props) => (props.disabled ? "-1" : "0")};
`;

export default AcItemStyled;
