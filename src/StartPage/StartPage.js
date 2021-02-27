import Navigation from '../Navigation/Navigation';
import Game from '../Game/Game';
import { Container } from '@material-ui/core';

export default function StartPage() {
  return (
    <Container>
      <Navigation />
      <Game />
    </Container >
  );
}
