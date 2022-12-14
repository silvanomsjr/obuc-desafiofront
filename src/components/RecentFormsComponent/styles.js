import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 6px;
  /* background: ${(props) => props.theme.lighter}; */
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.4);

  a{
    text-decoration: none;
    color: #000;
  }
  &+&{
    margin-top: 1.5rem;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 1rem;

  div {
    @media (min-width: 768px) {
      max-width: 500px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const Title = styled.span`

  font-size: 1rem;
`;
