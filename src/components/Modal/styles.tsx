import styled from "styled-components";

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.pink};
  font-weight: 600;
`;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .5rem 0;
`;
