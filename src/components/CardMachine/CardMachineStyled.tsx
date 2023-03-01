import styled from "styled-components";

export const CardMachineStyled = styled.li`
  border: solid 1px #ccc;
  border-radius: 10px;
  padding: 1.5rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f4f4f4;

  .state {
    padding: 8px;
    border-radius: 10px;
    border: solid 1px #ccc;
    flex-grow: 1;
  }

  h5 {
    padding: 8px 15px;
    border-radius: 10px;
    border: solid 1px #ccc;
    background-color: #fff;
  }

  div {
    width: 100%;
  }
`;

export const ContainerStateStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const CotinerActiveWorkProductStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

export const MachinePropertiesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
