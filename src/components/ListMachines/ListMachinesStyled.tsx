import styled from "styled-components";

export const ListMachinesStyled = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 1rem;
  margin: 2rem 5rem 2rem 5rem;
`;
