import styles from "../GameFieldStyle";

export default function GameChips(props) {
  const gameStyles = styles();
  return (
    <div className={gameStyles.gameFieldContainer}>
      <div className={gameStyles.gameItem}></div>
      <div className={gameStyles.gameItem}>1</div>
      <div className={gameStyles.gameItem}>2</div>
      <div className={gameStyles.gameItem}>3</div>
      <div className={gameStyles.gameItem}>4</div>
      <div className={gameStyles.gameItem}>5</div>
      <div className={gameStyles.gameItem}>6</div>
      <div className={gameStyles.gameItem}>7</div>
      <div className={gameStyles.gameItem}>8</div>
    </div>
  )
}