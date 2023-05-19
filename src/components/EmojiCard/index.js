import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onEmojiClicked = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onEmojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
