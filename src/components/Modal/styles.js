import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 333333;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);

  & > div {
    background-color: #fff;
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  button {
    padding: 1rem 2rem;
    background-color: ${(props) => props.theme.pink};
    color: #fff;
    border: none;
    outline: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: .9rem;

    transition: all .3s ease-in;

    &:hover {
      background-color: #700f41;
    }

  }

`;

export const SpanContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
