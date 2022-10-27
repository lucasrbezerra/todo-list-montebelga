import styled from "styled-components";

interface Props {
  flex?: boolean;
}

export const Content = styled.div`
  width: 100%;
  height: 16rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0.5rem;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfosWrapper = styled.div`
  display: ${(props: Props) => (props.flex ? "flex" : "block")};
`;

export const Image = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.darkWhite};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.darkWhite};
  font-weight: 500;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.darkWhite};
  font-weight: 400;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TasksContent = styled.div``;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SeeMore = styled.a`
  color: ${({ theme }) => theme.colors.darkWhite};
  font-weight: 500;
`;
