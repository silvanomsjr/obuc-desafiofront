import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, SubContainer, Title } from './styles';

function RecentFormsComponent({ id, title }) {
  return (
    <Container>
      <Link to={`/recent/${id}`}>
        <SubContainer>
          <Title>
            <b>Id:</b>
            {' '}
            {id}
          </Title>
          <div>
            <Title>
              <b>Cargo:</b>
              {' '}
              {title}
            </Title>
          </div>
        </SubContainer>
      </Link>
    </Container>
  );
}

export default RecentFormsComponent;

RecentFormsComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
