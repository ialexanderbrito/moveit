import { Container, Button } from './styles';

const Countdown = () => {
  return (
    <div>
      <Container>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </Container>
      <Button type="button">Iniciar um ciclo</Button>
    </div>
  );
};

export default Countdown;
