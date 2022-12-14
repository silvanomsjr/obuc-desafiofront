// import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Content, Title, RecentFormsContainer,
} from './styles';
import RecentFormsComponent from '../../components/RecentFormsComponent';
import logoImg from '../../assets/images/dona_maria.png';
import NotFounded from '../../components/NotFounded';

function RecentForms() {
  const localStorageForms = JSON.parse(localStorage.getItem('recentForms')) || [];

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" width={100} />
        <Title>Formularios recentes</Title>
        <RecentFormsContainer>
          {localStorageForms.length <= 0
            ? (
              <NotFounded />
            )
            : undefined}

          {
            localStorageForms.length > 0
              ? localStorageForms.map((x) => (
                <RecentFormsComponent
                  key={x.id}
                  id={x.id}
                  title={x.info.jobTitle}
                  salary={x.info.salary}
                />
              ))
              : undefined
          }
        </RecentFormsContainer>
        <Link to="/create">Criar formulário</Link>
      </Content>
    </Container>
  );
}

export default RecentForms;
