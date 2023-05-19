import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInProgress} = props
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img
          className="emoji-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scores-container">
          <p className="score">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
