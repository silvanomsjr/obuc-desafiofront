import PropTypes from 'prop-types';
import { FieldsContainer, LabelFields, Error } from './styles';

function FormGroup({
  name, subname, children, error,
}) {
  return (
    <FieldsContainer>
      <LabelFields>
        {name}
        <small>{subname}</small>
      </LabelFields>
      {children}
      {error ? <Error className="active">{error?.message}</Error> : undefined}
    </FieldsContainer>
  );
}

export default FormGroup;

FormGroup.propTypes = {
  name: PropTypes.string.isRequired,
  subname: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.shape({
    field: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

FormGroup.defaultProps = {
  error: undefined,
  subname: '',
};
