import styled, { css } from "styled-components";

export const PostContainer = styled.div<{
  reverseContentPosition?: boolean;
  direction: "row" | "column";
  height: string;
  width: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 40px;
  border: solid 1px red;

  ${(props) =>
    props.reverseContentPosition &&
    css`
      flex-direction: ${props.direction}-reverse;
    `}
  >div {
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 8px;
    picture {
      width: ${(props) => props.width};
      width: ${(props) => props.height};
      a {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: 0.75rem;
    line-height: 0.875rem;
    font-weight: 500;
    color: #808080;
  }

  @media (max-width: 768px) {
    gap: 0;

    span {
      font-size: 0.625rem;
    }
  }
`;
