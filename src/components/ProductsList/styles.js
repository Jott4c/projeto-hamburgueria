import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 765px) {
    flex-wrap: nowrap;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
  }
`;
