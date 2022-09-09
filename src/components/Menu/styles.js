import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: var(--color-background-secundary);
`;
export const ContainerMenu = styled.div`
  width: 90vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    @media (max-width: 765px) {
      margin: auto;
      justify-content: center;
    }

    h1 {
      margin: 0 10px 7px 0;
    }

    p {
      font-weight: 600;
      color: var(--color-gradient);
    }
  }

  @media (max-width: 765px) {
    display: block;
    height: 8rem;
  }
`;

export const InputPesquisa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 365px;
  height: 60px;
  border-radius: 8px;
  background-color: var(--color-background-primary);
  input {
    border: none;
    width: 200px;
    height: 20px;
  }
  button {
    width: 100px;
    height: 40px;
    border-radius: 8px;
    border: none;
    background-color: var(--color-primary);
    color: white;
  }

  @media (max-width: 765px) {
    margin: auto;
  }
`;
