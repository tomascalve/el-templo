import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MainContainer from '../../../components/MainContainer/MainContainer';
import useFetch from '../../../hooks/useFetch';
import { langUpperCased } from '../../../utils/localStorage';
import {
  getNivelationExercises,
  makeNivelation,
} from '../../../services/training';
import NivelationCard from './NivelationCard';
import DivTop from '../../../components/DivTop/DivTop';
import DivBottom from '../../../components/DivBottom/DivBottom';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/paths';
import Text from '../../../components/Text/Text';
import ButtonPagination from '../../../components/ButtonPagination/ButtonPagination';
import { useDispatch } from 'react-redux';
import { cleanErrorAction, loadingAction } from '../../../redux/api';
import { randomHexadecimal } from '../../../utils/mathUtils';
import Input from '../../../components/Input/Input';

const NivelationExercise = () => {
  const { t } = useTranslation();
  const lang = langUpperCased();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [step, setStep] = useState(0)
  const [finalStep, setFinalStep] = useState(0)
  const [nivelations, setNivelations] = useState([]);

  const [questionsArray] = useFetch({
    service: () => getNivelationExercises(),
    globalLoader: true,
    callNow: true,
    callback: () => {
      setNivelations(
        questionsArray.response.map((d) => ({
          id: d._id,
          count: 0,
          titleES: d.titleES,
          titleEN: d.titleEN,
        }))
      );
    },
  });

  const [makeNivelationData, makeNivelationError, makeNivelationApiCall] = useFetch({
    service: () => makeNivelation(nivelations),
    globalLoader: true,
    callback: () => {
      navigate(`/${PATHS.DASHBOARD}`);
    },
    successAlert: true,
  });

  useEffect(() => {
    setFinalStep(questionsArray?.response?.length)
  }, [questionsArray])

  const onChangeValue = (e, id) => {
    const aux = [...nivelations];
    const currNiv = aux.indexOf(aux.find((n) => n.id === id));
    aux[currNiv].count = e.target.value?.toString() === '' ? 0 : e.target.value;
    setNivelations(aux);
  };

  const handleNextStep = () => {
    dispatch(loadingAction())
    setTimeout(() => {
      dispatch(cleanErrorAction())
      setStep(step + 1)
    }, 1500)
  }

  return (
    <MainContainer
      col='12'
      color={1}
      bg={3}
      back
      scroll
      calc
      alignCenter
    >
      <DivTop >
        <Text className='mt-3' text={t('admin.nivelation.yoursResults')} bold size='4' />
        <div className='mt-5 col-12'>
          {nivelations?.map((n, i) => {
            if (step === i) {
              return (
                <div key={i} className='col-12 d-flex flex-column align-items-center'>
                  <NivelationCard />
                  <div style={{ width: '182px' }}>
                    <Input
                      value={parseInt(n.count)}
                      title={n[`title${lang}`]}
                      onChange={(e) => onChangeValue(e, n.id)}
                    />
                  </div>
                </div>
              )
            }
          })}
        </div>
      </DivTop>

      <DivBottom>
        <div className='col-12'>
          {step < finalStep - 1 ?
            <div className='col-11 d-flex justify-content-end'>
              <ButtonPagination
                disabled={nivelations[step] >= 0}
                onClick={handleNextStep}
              />
            </div>
            :
            <div className='col-11 d-flex justify-content-end'>
              <ButtonPagination
                textLeft={t('admin.nivelation.finishNivelation')}
                textSize='1'
                textBold
                onClick={makeNivelationApiCall}
              />
            </div>
          }
        </div>
      </DivBottom>
    </MainContainer>
  );
};

export default NivelationExercise;
