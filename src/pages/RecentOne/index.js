import { useParams } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ButtonGoBack from '../../components/ButtonGoBack';
import {
  Container, Content, Info, LogoImg, SavePDFButton,
} from './styles';
import NotFounded from '../../components/NotFounded';
import logoPng from '../../assets/images/dona_maria.png';

import PDFFile from '../../utils/PDFFile';

function RecentOne() {
  const { id } = useParams();

  const storageInfo = JSON.parse(localStorage.getItem('recentForms'));

  const realInfo = storageInfo?.find(((x) => x.id === parseInt(id, 10))) || undefined;

  return (
    <Container>
      <LogoImg src={logoPng} alt="Logo" />
      <Content>
        <ButtonGoBack />
        {
          realInfo
            ? (
              <Info>
                <span>
                  <b>
                    Cargo:
                  </b>
                  {' '}
                  {realInfo.info.jobTitle}
                </span>
                <span>
                  <b>
                    Salário:
                  </b>
                  {' '}
                  {realInfo.info.salary}
                </span>
                <span>
                  <b>

                    Atividades:
                  </b>
                  {' '}
                  {realInfo.info.ativity}
                </span>
                <span>
                  <b>
                    Benefícios:
                  </b>
                  {' '}
                  {realInfo.info.benefits}
                </span>
                <span>
                  <b>
                    Etapas:
                  </b>
                  {' '}
                  {realInfo.info.steps}
                </span>
                <span>
                  <b>
                    Habilidades necessárias:
                  </b>
                  {' '}
                  {realInfo.info.necessarySkills}
                </span>
                <span>
                  <b>
                    Experiência necessária:
                  </b>
                  {' '}
                  {realInfo.info.necessaryExp}
                </span>
                <PDFDownloadLink
                  document={(
                    <PDFFile
                      jobTitle={realInfo.info.jobTitle}
                      salary={realInfo.info.salary}
                      ativity={realInfo.info.ativity}
                      benefits={realInfo.info.benefits}
                      steps={realInfo.info.steps}
                      necessarySkills={realInfo.info.necessarySkills}
                      necessaryExp={realInfo.info.necessaryExp}
                    />
                  )}
                  fileName="FormularioTeste"
                >
                  <SavePDFButton>
                    Baixar
                  </SavePDFButton>
                </PDFDownloadLink>
              </Info>
            )
            : <Info><NotFounded /></Info>
          }
      </Content>
    </Container>
  );
}

export default RecentOne;
