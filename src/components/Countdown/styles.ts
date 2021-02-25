import styled, {css} from 'styled-components';

interface CountdownButtonProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Rajdhani';
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child{
      border-right: 1px solid #f0f1f3
    }

    span:last-child{
      border-left: 1px solid #f0f1f3
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const Button = styled.button`
  ${({ theme }) => css<CountdownButtonProps>`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.2s;

    font-size: 1.25rem;
    font-weight: 600;

    :hover {
      background: ${({ theme }) => theme.colors.blueDark};
    }

    &:not(:disabled):hover {
      background: ${theme.colors.blueDark};
    }

    &:disabled {
      background: ${theme.colors.white};
      color: ${theme.colors.text};
      border-bottom: 4px solid ${theme.colors.green};
      cursor: not-allowed;
    }

    ${(props) =>
      props.active &&
      css`
        background: ${theme.colors.white};
        color: ${theme.colors.text};
        img {
          filter: brightness(2);
        }
        &:not(:disabled):hover {
          background: ${theme.colors.red};
          color: ${theme.colors.white};
        }
      `}
  `}
`;
