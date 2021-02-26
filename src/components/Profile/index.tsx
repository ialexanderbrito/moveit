import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container } from './styles';

const Profile = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <img src="https://github.com/ialexanderbrito.png" alt="Alexander" />
      <div>
        <strong>Alexander</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
