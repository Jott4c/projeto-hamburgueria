import styled from "styled-components";

export const ContainerCart = styled.div`
  width: 365px;
  > p {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    padding: 10px;
    width: 365px;
    height: 65px;
    background-color: var(--color-primary);
    color: white;
    border-radius: 10px 10px 0 0;
  }
  .footer-cart {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 365px;
    height: 140px;
    background-color: var(--color-background-secundary);
    border-top: 3px solid var(--grey-100);
    p {
      font-weight: 600;
      font-size: 14px;
      color: #333333;
      margin: 20px 10px;
    }
    button {
      width: 345px;
      height: 60px;
      margin-left: 10px;
      margin-bottom: 20px;
      border-radius: 8px;
      border: none;
      background-color: var(--color-primary);
      color: white;
    }
  }

  @media (max-width: 765px) {
    margin: 20px auto;
  }
`;

export const ContentCartVazio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 365px;
  height: 160px;
  background-color: var(--color-background-secundary);
  padding: 10px 0 0 10px;
  border-radius: 0 0 5px 5px;
  p {
    font-weight: 700;
    font-size: 18px;
    margin: 10px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    color: #828282;
  }
`;

export const ContentCart = styled.div`
  width: 365px;
  height: 300px;
  background-color: var(--color-background-secundary);
  padding: 10px 0 0 10px;
  overflow-x: hidden;
`;

export const CardCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .content-img {
    background-color: var(--grey-100);
    width: 75px;
    height: 75px;
    img {
      width: 70px;
      height: 70px;
    }
  }

  .content-info {
    width: 100%;
    p {
      font-weight: 700;
      font-size: 14px;
      margin: 10px;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      margin: 10px;
    }
  }

  .content-button {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    input {
      width: 30px;
      height: 30px;
      text-align: center;
      background-color: var(--color-background-secundary);
      border: none;
      font-weight: bold;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: 30px;
      height: 30px;
      font-size: 30px;
      border-radius: 50%;
      background-color: var(--color-background-secundary);
    }

    .remove {
      color: var(--negative);
    }

    .add {
      color: var(--sucess);
    }
  }
`;
