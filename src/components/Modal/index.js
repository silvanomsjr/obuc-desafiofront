import PropTypes from 'prop-types';

import { useEffect } from 'react';

import { Container, BtnContainer, SpanContainer } from './styles';

function Modal({ btnFunc, type }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // eslint-disable-next-line no-return-assign
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <Container>
      <div>
        <SpanContainer>
          <span>
            {type === 1
              ? 'Existe um formulário com o mesmo titulo, deseja importar?'
              : 'Este formulário já foi criado, deseja criar novamente?'}
          </span>
        </SpanContainer>
        <BtnContainer>
          <button type="button" onClick={btnFunc}>Confirmar</button>
          <button type="button" onClick={btnFunc}>Cancelar</button>
        </BtnContainer>
      </div>

    </Container>
  );
}

export default Modal;

Modal.propTypes = {
  btnFunc: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
};
