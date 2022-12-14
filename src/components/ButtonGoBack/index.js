import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../assets/images/arrowLeft.svg';
import Container from './styles';

function ButtonGoBack() {
  return (
    <Container>
      <Link to="/">
        <ArrowLeft />
        Voltar
      </Link>
    </Container>
  );
}

export default ButtonGoBack;
