import styled from "styled-components";
import theme from "../../theme";

export const ReverseCategoryTagContainer = styled.span<{ isBold?: boolean }>`
  align-self: flex-start;
  font-size: 0.875rem;
  /* color: ${({ theme }) => theme.colors.secundaryColor500}; */
  color: ${theme.colors.secundaryColor500};
  text-transform: capitalize;
  font-weight: ${(props) => (props.isBold ? 700 : 400)};

  width: fit-content;
  display: inline-block;
`;
