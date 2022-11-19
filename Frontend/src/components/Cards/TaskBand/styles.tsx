import styled from "styled-components";

interface Props {
  checked?: boolean;
}

export const Content = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  position: relative;

  margin: 1rem 0;
`;

export const Band = styled.div`
  /* transition: background-color .2s; */
  background: ${(props: Props) =>
    props.checked
      ? "linear-gradient(180deg, #4CAF50 0%, #008000 100%)"
      : "linear-gradient(180deg, #881f3b 0%, #de3361 100%)"};
  width: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  height: 100%;
  position: absolute;
  left: 0;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.darkWhite};
  font-weight: 500;
  font-size: 1rem;
  padding: 0.8rem;
  margin-left: 0.5rem;
`;

export const IconCircle = styled.i`
  color: ${({ theme }) => theme.colors.pink};
  font-size: 1.3rem;
  margin-right: 0.8rem;
`;
export const IconCircleChecked = styled.i`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 1.3rem;
  margin-right: 0.8rem;
`;
