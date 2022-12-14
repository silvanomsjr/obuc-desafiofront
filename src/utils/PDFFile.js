import {
  Page, Text, Image, Document, StyleSheet, View,
} from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import logoPng from '../assets/images/dona_maria.png';

const styles = StyleSheet.create(
  {
    body: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 50,
      fontFamily: 'Helvetica-Bold',
    },
    image: {
      marginVertical: 20,
      width: 200,
    },
    text: {
      marginTop: 20,
      marginHorizontal: 40,
      fontSize: 20,
      textAlign: 'left',
      fontFamily: 'Helvetica',
    },
    bold: {
      fontSize: 20,
      textAlign: 'left',
      fontFamily: 'Helvetica-Bold',
    },
    view: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
);

function PDFFile({
  jobTitle, salary, ativity, benefits, steps, necessarySkills, necessaryExp,
}) {
  return (
    <Document>
      <Page>
        <Text style={styles.title}>Formulário de vaga</Text>
        <View style={styles.view}>
          <Image style={styles.image} src={logoPng} />
        </View>
        <Text style={styles.text}>
          <Text style={styles.bold}>Titulo do cargo:</Text>
          {' '}
          {jobTitle}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Salário:</Text>
          {' '}
          {salary}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Atividades:</Text>
          {' '}
          {ativity}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Benefícios:</Text>
          {' '}
          {benefits}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Etapas para contratação:</Text>
          {' '}
          {steps}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Habilidades necessárias:</Text>
          {' '}
          {necessarySkills}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Experiência necessária:</Text>
          {' '}
          {necessaryExp}
        </Text>
      </Page>
    </Document>
  );
}

export default PDFFile;

PDFFile.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  ativity: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
  steps: PropTypes.string.isRequired,
  necessarySkills: PropTypes.string.isRequired,
  necessaryExp: PropTypes.string.isRequired,
};
