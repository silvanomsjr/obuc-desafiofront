import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import {
  Container,
  Title,
  InputFields,
  ConfirmButton,
  Content,
  Logo,
  Saving,
  ButtonsContainer,
  SavePDFButton,
} from './styles';

import logoPng from '../../assets/images/dona_maria.png';

import FormGroup from '../../components/FormGroup';
import ButtonGoBack from '../../components/ButtonGoBack';
import Modal from '../../components/Modal';
import PDFFile from '../../utils/PDFFile';

function CreateForm() {
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [ativity, setAtivity] = useState('');
  const [benefits, setBenefits] = useState('');
  const [steps, setSteps] = useState('');
  const [necessarySkills, setNecessarySkills] = useState('');
  const [necessaryExp, setNecessaryExp] = useState('');
  const [errors, setErrors] = useState([]);

  const [openModalAlreadyHave, setOpenModalAlreadyHave] = useState(false);
  const [openModalOldInfo, setOpenModalOldInfo] = useState(false);
  const [existentOldJob, setExistentOldJob] = useState({});
  const [successSaving, setSuccessSaving] = useState(false);

  const handleCreateErrors = (field, message) => {
    setErrors((prevState) => [
      ...prevState,
      {
        field,
        message,
      },
    ]);
  };

  const handleRemoveErrors = (title) => {
    setErrors((prevState) => prevState.filter((error) => error.field !== title));
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
    if (e.target.value === '') {
      handleCreateErrors('jobTitle', 'Insira um titulo!');
    } else {
      handleRemoveErrors('jobTitle');
    }
  };

  const handleOldInfoAlready = ({ info }) => {
    if (info !== undefined) {
      setJobTitle(info.jobTitle);
      setSalary(info.salary);
      setAtivity(info.ativity);
      setBenefits(info.benefits);
      setSteps(info.steps);
      setNecessarySkills(info.necessarySkills);
      setNecessaryExp(info.necessaryExp);
    }
  };

  const handleIfExistsJob = (e) => {
    const alreadyLocalStorage = JSON.parse(localStorage.getItem('recentForms')) || [];

    const existRecentForm = alreadyLocalStorage.length !== 0;

    if (existRecentForm) {
      const alreadyExists = alreadyLocalStorage.findLast(
        (x) => x.info.jobTitle.toLowerCase() === e.target.value.toLowerCase(),
      );
      if (alreadyExists !== undefined) {
        setOpenModalOldInfo(true);
        setExistentOldJob(alreadyExists);
      }
    }
  };

  const handleSalaryChange = (e) => {
    const regexOnlyNumbers = (value) => value.replace(/[^0-9]/g, '');
    setSalary(regexOnlyNumbers(e.target.value));
    if (e.target.value === '' || regexOnlyNumbers(e.target.value) === '' || (e.target.value).length <= 3) {
      handleCreateErrors('salary', `${e.target.value === '' ? 'Insira um salário!' : 'Insira um sálario válido!'}`);
    } else {
      handleRemoveErrors('salary');
    }
  };

  const handleAtivitiesChange = (e) => {
    setAtivity(e.target.value);
    if (e.target.value === '') {
      handleCreateErrors('ativities', 'Insira atividades para o cargo!');
    } else {
      handleRemoveErrors('ativities');
    }
  };

  const handleBenefitsChange = (e) => {
    setBenefits(e.target.value);
    if (e.target.value === '') {
      handleCreateErrors('benefits', 'Insira benefícios para o cargo!');
    } else {
      handleRemoveErrors('benefits');
    }
  };

  const handleStepsChange = (e) => {
    setSteps(e.target.value);
    if (e.target.value === '') {
      handleCreateErrors('steps', 'Insira as etapas para a contratação do cargo!');
    } else {
      handleRemoveErrors('steps');
    }
  };

  const handleExpChange = (e) => {
    setNecessaryExp(e.target.value);
    if (e.target.value === '') {
      handleCreateErrors('exp', 'Insira a experiência necessária para o cargo!');
    } else {
      handleRemoveErrors('exp');
    }
  };

  const handleSkillsChange = (e) => {
    setNecessarySkills(e.target.value);
    if (e.target.value === '') {
      handleCreateErrors('skills', 'Insira as habilidades necessárias para o cargo!');
    } else {
      handleRemoveErrors('skills');
    }
  };

  const checkEmptyInputs = () => {
    handleRemoveErrors('jobTitle');
    handleRemoveErrors('salary');
    handleRemoveErrors('ativities');
    handleRemoveErrors('benefits');
    handleRemoveErrors('steps');
    handleRemoveErrors('exp');
    handleRemoveErrors('skills');

    if (jobTitle === '') {
      handleCreateErrors('jobTitle', 'Insira um titulo!');
    }

    if (salary === '') {
      handleCreateErrors('salary', 'Insira um sálario!');
    }

    if (ativity === '') {
      handleCreateErrors('ativities', 'Insira atividades para o cargo!');
    }

    if (benefits === '') {
      handleCreateErrors('benefits', 'Insira benefícios para o cargo!');
    }

    if (steps === '') {
      handleCreateErrors('steps', 'Insira as etapas para a contratação do cargo!');
    }

    if (necessaryExp === '') {
      handleCreateErrors('exp', 'Insira a experiência necessária para o cargo!');
    }

    if (necessarySkills === '') {
      handleCreateErrors('skills', 'Insira as habilidades necessárias para o cargo!');
    }

    if (jobTitle === '' || salary === '' || ativity === '' || benefits === '' || steps === '' || necessaryExp === '' || necessarySkills === '') {
      return 0;
    }
    return 1;
  };

  const handleSavingTimeout = () => {
    setSuccessSaving(false);
  };

  const handleFormSubmit = () => {
    const response = checkEmptyInputs();
    if (response === 1) {
      const alreadyLocalStorage = JSON.parse(localStorage.getItem('recentForms')) || [];

      const existRecentForm = alreadyLocalStorage.length !== 0;

      const id = existRecentForm ? alreadyLocalStorage[alreadyLocalStorage.length - 1].id + 1 : 0;

      const formValues = [{
        id,
        info: {
          jobTitle,
          salary,
          ativity,
          benefits,
          steps,
          necessaryExp,
          necessarySkills,
        },
      }];

      const doValueAlreadyExists = alreadyLocalStorage.filter(
        (x) => JSON.stringify(x.info) === JSON.stringify(formValues[0].info),
      );

      if (doValueAlreadyExists.length > 0) {
        setOpenModalAlreadyHave(true);
      } else {
        localStorage.setItem('recentForms', JSON.stringify(alreadyLocalStorage.concat(formValues)));
        setSuccessSaving(true);
        setTimeout(handleSavingTimeout, 2000);
      }
    }
  };

  const handleOnClickModalOldInfo = (e) => {
    const { innerHTML } = e.target;
    const isCancel = innerHTML === 'Cancelar';
    if (!isCancel) {
      handleOldInfoAlready(existentOldJob);
      setOpenModalOldInfo(false);
    } else {
      setOpenModalOldInfo(false);
    }
  };

  const handleOnClickModalAlreadyHave = (e) => {
    const { innerHTML } = e.target;
    const isCancel = innerHTML === 'Cancelar';
    if (isCancel) {
      setOpenModalAlreadyHave(false);
    } else {
      const alreadyLocalStorage = JSON.parse(localStorage.getItem('recentForms')) || [];
      const id = alreadyLocalStorage[alreadyLocalStorage.length - 1].id + 1;
      const formValues = [{
        id,
        info: {
          jobTitle,
          salary,
          ativity,
          benefits,
          steps,
          necessaryExp,
          necessarySkills,
        },
      }];
      localStorage.setItem('recentForms', JSON.stringify(alreadyLocalStorage.concat(formValues)));
      setSuccessSaving(true);
      setTimeout(handleSavingTimeout, 2000);
      setOpenModalAlreadyHave(false);
    }
  };

  return (
    <Container>
      {openModalOldInfo
        ? (
          <Modal btnFunc={handleOnClickModalOldInfo} type={1} />
        )
        : undefined}
      {openModalAlreadyHave
        ? (
          <Modal btnFunc={handleOnClickModalAlreadyHave} type={2} />
        )
        : undefined}
      <Logo src={logoPng} alt="logo" />
      <Content>
        {successSaving
          ? <Saving>Salvo com sucesso!</Saving>
          : undefined}
        <ButtonGoBack />
        <Title>
          <span>
            Bem-vindo ao formulário!
          </span>
        </Title>
        <FormGroup name="Título do Cargo" error={errors.find((error) => error.field === 'jobTitle')}>
          <InputFields value={jobTitle} type="text" name="job-title" onChange={handleJobTitleChange} onBlur={handleIfExistsJob} />
        </FormGroup>

        <FormGroup name="Salário" subname="*Apenas números" error={errors.find((error) => error.field === 'salary')}>
          <InputFields value={salary} type="text" name="salary" onChange={handleSalaryChange} />
        </FormGroup>

        <FormGroup name="Atividades que o cargo exerce" error={errors.find((error) => error.field === 'ativities')}>
          <InputFields value={ativity} type="text" name="ativities" onChange={handleAtivitiesChange} />
        </FormGroup>

        <FormGroup name="Benefícios do cargo" error={errors.find((error) => error.field === 'benefits')}>
          <InputFields value={benefits} type="text" name="benefits" onChange={handleBenefitsChange} />
        </FormGroup>

        <FormGroup name="Etapas do processo" error={errors.find((error) => error.field === 'steps')}>
          <InputFields value={steps} type="text" name="steps" onChange={handleStepsChange} />
        </FormGroup>

        <FormGroup name="Habilidades necessárias" error={errors.find((error) => error.field === 'skills')}>
          <InputFields value={necessarySkills} type="text" name="skills" onChange={handleSkillsChange} />
        </FormGroup>

        <FormGroup name="Experiência necessária" error={errors.find((error) => error.field === 'exp')}>
          <InputFields value={necessaryExp} type="text" name="exp" onChange={handleExpChange} />
        </FormGroup>

        <ButtonsContainer>
          <ConfirmButton onClick={handleFormSubmit}>Confirmar</ConfirmButton>

          <PDFDownloadLink
            document={(
              <PDFFile
                jobTitle={jobTitle}
                salary={salary}
                ativity={ativity}
                benefits={benefits}
                steps={steps}
                necessarySkills={necessarySkills}
                necessaryExp={necessaryExp}
              />
            )}
            fileName="FormularioDonaMaria"
          >
            <SavePDFButton disabled={!jobTitle
              || !salary
              || !ativity
              || !benefits
              || !steps
              || !necessaryExp
              || !necessarySkills}
            >
              Baixar PDF
            </SavePDFButton>
          </PDFDownloadLink>
        </ButtonsContainer>
      </Content>

    </Container>
  );
}

export default CreateForm;
