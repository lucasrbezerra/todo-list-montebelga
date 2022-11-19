import styled from "styled-components";

interface Props {
  flex?: boolean;
  ml?: string;
}

export const Content = styled.div`
  width: 100%;
  height: 21rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0.5rem;

  padding: 1rem;
  overflow-y: hidden;
`;

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background: ${({ theme }) => theme.colors.darkBlue};
  margin: 0.6rem 0;
  margin-bottom: 0.3rem;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfosWrapper = styled.div`
  display: ${(props: Props) => (props.flex ? "flex" : "block")};
  align-items: center;
  justify-content: center;
  margin-left: ${(props: Props) => (props.ml ? props.ml : "0px")};
`;

export const Image = styled.i`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  font-size: 1.3rem;
  border: 1px solid ${({ theme }) => theme.colors.darkWhite};
  color: ${({ theme }) => theme.colors.wine};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.darkWhite};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.erasedWhite};
  font-weight: 300;
  font-size: 0.8rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TasksContent = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 65%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SeeMore = styled.a`
  color: ${({ theme }) => theme.colors.darkWhite};
  font-weight: 500;
  text-decoration: underline;
  transition: all 0.2s ease-in;
  padding: 1rem 0;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.pink};
  }
`;
