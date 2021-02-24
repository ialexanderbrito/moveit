import { Container, CurrentExperience } from './styles';

const ExperienceBar = () => {
  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <CurrentExperience style={{ left: '50%' }}>300 XP</CurrentExperience>
      </div>
      <span>600 xp</span>
    </Container>
  );
};

export default ExperienceBar;
