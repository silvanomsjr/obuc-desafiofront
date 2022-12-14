import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  flex-direction: column;

`;

export const Content = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > a {
    text-decoration: none;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 8px;
    background-color: #f9baca;
    font-weight: 700;
    color: #000;
    transition: all .2s ease-in;
  }

  & > a:hover {
    background-color: #ef8fa4;
  }
`;

export const Title = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
`;

export const RecentFormsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.light};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
  margin-top: 2rem;
`;
