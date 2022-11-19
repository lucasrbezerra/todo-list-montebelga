import styled from "styled-components";

interface Props {
  hasFinished: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 1rem;
  border: 1px solid
    ${(props: Props) => (props.hasFinished ? "#4CAF50" : "transparent")};
`;

export const GroupId = styled.div`
  position: absolute;
  top: -1.5rem;
  left: 1.5rem;

  width: 13rem;
  padding: 0.6rem 1rem;
  border-radius: 5rem;
  background: ${({ theme }) => theme.colors.lightBlue};

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${(props: Props) => (props.hasFinished ? "#4CAF50" : "transparent")};
`;

export const GroupIcon = styled.i`
  color: ${(props: Props) => (props.hasFinished ? "#4CAF50" : "#881F3B")};
  font-size: 1.3rem;
  margin-right: 0.5rem;
`;

export const GroupTitle = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkWhite};
`;

export const LimitTime = styled.div`
  border-radius: 5rem;
  border: 1px solid
    ${(props: Props) => (props.hasFinished ? "#4CAF50" : "#DE3361")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.8rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const TimeIcon = styled.i`
  color: ${(props: Props) => (props.hasFinished ? "#4CAF50" : "#DE3361")};
  font-size: 0.9rem;
  margin-right: 0.5rem;
`;

export const TimeDisplay = styled.p`
  color: ${(props: Props) => (props.hasFinished ? "#4CAF50" : "#DE3361")};
  font-size: 0.8rem;
  font-weight: 500;
`;

export const TaskInfos = styled.div`
  height: 7rem;
  border-radius: 1rem;
  margin-left: 1.5rem;
  margin-right: 1rem;
  margin-top: 3.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: ${(props: Props) => (props.hasFinished ? "#4CAF50" : "#DE3361")};
  font-weight: 600;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.lightBlue};
`;

export const TaskActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FinishTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const FinishLabel = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${(props: Props) => (props.hasFinished ? "#4CAF50" : "#DE3361")};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonActions = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${(props: Props) => (props.hasFinished ? "#4CAF50" : "#DE3361")};
  border-radius: 50%;
  margin-left: 0.5rem;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.wine};
    color: ${({ theme }) => theme.colors.lightBlue};
    cursor: pointer;
  }
`;
