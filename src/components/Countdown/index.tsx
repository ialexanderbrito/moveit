import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import { Container, Button } from './styles';

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>
      {hasFinished ? (
        <Button disabled active={isActive}>
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="Completado" />
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button type="button" active={isActive} onClick={resetCountdown}>
              Abandonar ciclo
              <img src="icons/close.svg" alt="Abandonar" />
            </Button>
          ) : (
            <Button type="button" active={isActive} onClick={startCountdown}>
              Iniciar um ciclo
              <img src="icons/play_arrow.svg" alt="Iniciar" />
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
