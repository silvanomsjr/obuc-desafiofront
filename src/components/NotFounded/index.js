import { ReactComponent as ErrorSVG } from '../../assets/images/notFound.svg';

import Container from './styles';

function NotFounded() {
  return (
    <Container>
      <ErrorSVG />
      <span>Nenhum formulário encontrado</span>
    </Container>
  );
}

export default NotFounded;
