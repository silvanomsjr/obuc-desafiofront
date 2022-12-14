import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  max-width: 600px;
  text-align: center;
  position: relative;
`;

export const Title = styled.div`
  margin-bottom: 1rem;
  span {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
  }
`;

export const InputFields = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 0 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  outline: none;
  margin: .6rem 0 .2rem 0;
  transition: border .4s ease;
  font-size: 1rem;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const ConfirmButton = styled.button`
  color: #fff;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border: 2px solid ${(props) => props.theme.pink};
  background: ${(props) => props.theme.pink};
  border-radius: 8px;

  &:hover {
    background: #fff;
    color: ${(props) => props.theme.pink}
  }
`;

export const SavePDFButton = styled.button`
  color: #fff;
  padding: 1rem 1.5rem;
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border: 2px solid ${(props) => props.theme.pink};
  background: ${(props) => props.theme.pink};
  border-radius: 8px;

  &:hover {
    background: #fff;
    color: ${(props) => props.theme.pink}
  }

  &:disabled {
    cursor: default;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    border: 2px solid transparent;
    &:hover{
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
    }
  }
`;

export const Logo = styled.img`
  display: none;
  @media (min-width: 880px) {
    display: block;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    width: 100px;
  }
`;

const animation = keyframes`
  0% {
    transform: translateX(100%);
    scale: 0;
  }

  20% {
    transform: translate(0%);
    scale: 1;
  }

  90% {
    transform: translateY(0%);
    scale: 1;
  }

  100%{
    transform: translateX(200%);
    scale: 0;
    display: none;
  }
`;

export const Saving = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  padding: 1rem 2rem;
  border: 1px solid #000;
  border-radius: 6px;
  background-color: ${(props) => props.theme.brown};
  color: #fff;
  animation: ${animation} 2s forwards;
`;
