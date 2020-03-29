import styled from "lib/emotion";

export default styled("b")`
  display: block;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent};
  opacity: 0.33;
  font-weight: bolder;
  font-size: 0.65rem;
  letter-spacing: 1px;
`;
