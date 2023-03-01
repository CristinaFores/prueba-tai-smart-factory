import styled from "styled-components";

export const AppStyled = styled.div`
  main {
    display: flex;
    justify-content: center;
  }

  .loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    margin-top: 10rem;
  }
  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 10px solid #f8bf04;
    position: absolute;
    left: -20px;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  .loader::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
