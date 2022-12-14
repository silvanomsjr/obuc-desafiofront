import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2rem 1rem;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Info = styled.div`
  overflow-wrap: anywhere;
  width: 100%;
  background-color: ${(props) => props.theme.lighter};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const LogoImg = styled.img`
  display: none;
  @media (min-width: 880px) {
    display: block;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    width: 100px;
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
