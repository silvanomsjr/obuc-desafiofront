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
    color: #fff;
    text-decoration: none;
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
  }

  & > a:hover {
    background: #fff;
    color: ${(props) => props.theme.pink};
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
