import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    topScore: 0,
    emojisClickedList: [],
    isGameInProgress: true,
  }

  finishAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore > newScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isGameInProgress: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {emojisClickedList} = this.state

    const isPresent = emojisClickedList.includes(id)
    if (isPresent) {
      this.finishAndSetTopScore(emojisClickedList.length)
    } else {
      if (emojisList.length - 1 === emojisClickedList.length) {
        this.finishAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        ...prevState,
        emojisClickedList: [...prevState.emojisClickedList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props

    const shuffledList = emojisList.sort(() => Math.random() - 0.5)
    return shuffledList
  }

  gameContinue = () => {
    const shuffledList = this.shuffledEmojisList()

    return (
      <ul className="list-container">
        {shuffledList.map(e => (
          <EmojiCard
            emojiDetails={e}
            key={e.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  onPlayAgain = () => {
    this.setState({emojisClickedList: [], isGameInProgress: true})
  }

  showResult = () => {
    const {emojisClickedList} = this.state
    const {emojisList} = this.props
    const isWon = emojisClickedList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        emojisClickedList={emojisClickedList}
        onPlayAgain={this.onPlayAgain}
      />
    )
  }

  render() {
    const {emojisClickedList, topScore, isGameInProgress} = this.state

    return (
      <div className="bg-container">
        <NavBar
          score={emojisClickedList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="body-container">
          {isGameInProgress ? this.gameContinue() : this.showResult()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
