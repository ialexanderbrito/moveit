import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import {
  Container,
  ChallengeNotActive,
  ChallengeActive,
  Button,
} from './styles';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

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
              <Button type="button" result={'failed'} onClick={resetChallenge}>
                Falhei
              </Button>
              <Button type="button" result={'succeeded'}>
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
