import styled from "styled-components";

export const Li = styled.li`
  list-style: none;
  width: 30%;
  min-width: 250px;
  max-width: 365px;
  height: 350px;
  border: 2px solid var(--grey-100);
  margin: 0 20px 10px 0;
  border-radius: 5px;
  scroll-snap-align: start;
  div {
    display: flex;
    justify-content: center;
    background-color: var(--color-background-secundary);
    border-radius: 4px 4px 0 0;
    height: 50%;

    img {
      background-color: var(--color-background-secundary);
      width: 50%;
      height: 100%;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    margin: 10px;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    margin: 10px;
  }
  p {
    font-weight: 600;
    font-size: 14px;
    margin: 10px;
    color: var(--color-primary);
  }
  button {
    font-weight: 600;
    font-size: 14px;
    width: 100px;
    height: 40px;
    color: white;
    background-color: var(--color-primary);
    border: none;
    border-radius: 4px;
    margin: 10px;
  }
`;
