import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import {
  Container,
  ChallengeNotActive,
  ChallengeActive,
  Button,
} from './styles';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <>
      <Container>
        {activeChallenge ? (
          <ChallengeActive>
            <header>Ganhe {activeChallenge.amount}</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`} />
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <Button
                type="button"
                result={'failed'}
                onClick={handleChallengeFailed}
              >
                Falhei
              </Button>
              <Button
                type="button"
                result={'succeeded'}
                onClick={handleChallengeSucceeded}
              >
                Completei
              </Button>
            </footer>
          </ChallengeActive>
        ) : (
          <>
            <ChallengeNotActive>
              <strong>Finalize um ciclo para receber um desafio</strong>
              <p>
                <img src="icons/level-up.svg" alt="Level Up" />
                Avance de level completando desafios.
              </p>
            </ChallengeNotActive>
          </>
        )}
      </Container>
    </>
  );
};

export default ChallengeBox;
