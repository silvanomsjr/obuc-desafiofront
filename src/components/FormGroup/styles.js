import styled, { keyframes } from 'styled-components';

export const FieldsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  transition: all .4s ease;
  margin-bottom: 8px;
`;

export const LabelFields = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  font-size: 1.2rem;
  small {
    font-size: .8rem;
  }
`;

const errorAnimation = keyframes`
  from {
    transform: translateY(-100%);
    scale: 0;
  }
  to {
    transform: translateY(0%);
    scale: 1;
  }
`;

export const Error = styled.small`
  font-weight: 700;
  color: #FC5050;
  animation: ${errorAnimation} .1s linear;

`;
