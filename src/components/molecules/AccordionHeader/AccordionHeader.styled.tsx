import styled from "styled-components";

interface AcHeaderProps {
  isOpen: boolean;
  disabled?: boolean;
}

const AcHeaderStyled = styled.button<AcHeaderProps>`
  width: 100%;
  border: none;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: ${(props) => (props.isOpen ? "60px" : "50px")};
  background-color: ${(props) => (props.disabled ? "#dfdfdf" : "#ffffff")};
  transition: all 300ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #f5f6f7;
  }
  p {
    transition: all 300ms ease-in-out;
    margin-top: ${(props) => (props.isOpen ? "20px" : "15px")};
    color: ${(props) => (props.disabled ? "#9b9b9b" : "black")};
  }
`;

export default AcHeaderStyled;
