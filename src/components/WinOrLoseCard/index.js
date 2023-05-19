// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onPlayAgain, emojisClickedList} = props

  const onPlayAgainClick = () => {
    onPlayAgain()
  }
  if (isWon) {
    return (
      <div className="win-or-lose-bg-container">
        <div className="result-container">
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>12/12</p>
          <button
            type="button"
            className="play-button"
            onClick={onPlayAgainClick}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="image"
        />
      </div>
    )
  }
  return (
    <div className="win-or-lose-bg-container">
      <div className="result-container">
        <h1>You Lose</h1>
        <p>Score</p>
        <p>{emojisClickedList.length}/12</p>
        <button
          type="button"
          className="play-button"
          onClick={onPlayAgainClick}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="image"
      />
    </div>
  )
}

export default WinOrLoseCard
