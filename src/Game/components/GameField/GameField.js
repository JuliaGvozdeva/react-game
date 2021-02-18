import GameChips from './components/GameChips'
import styles from "./GameFieldStyle";

export default function GameField(props) {
  const gameStyles = styles();
  return (
    <div className={gameStyles.gameContainer}>
      <GameChips />
    </div>
  )
}