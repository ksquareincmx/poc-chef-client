import styled from "styled-components";

export const OrderDescription = styled.div`
  display: grid;
  gridgap: 0.25rem;
`;

export const OrderProductsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 0.46875rem 1rem;
`;

export const EditIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.5rem;
`;
