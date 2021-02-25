import { Container } from './styles';

const Profile = () => {
  return (
    <Container>
      <img src="https://github.com/ialexanderbrito.png" alt="Alexander" />
      <div>
        <strong>Alexander</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </Container>
  );
};

export default Profile;
