import styled from "styled-components";

interface IconStyledProps {
  rotation: string;
}

const IconStyled = styled.p<IconStyledProps>`
  display: block;
  margin: 0;
  width: 10px;
  height: 17px;
  transition: all 0.3s;
  text-algin: center;
  user-select: none;
  transform: rotate(
    ${({ rotation }) => (rotation === "up" ? "90deg" : "-90deg")}
  );
`;

export default IconStyled;
