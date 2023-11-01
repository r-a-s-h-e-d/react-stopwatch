import { useState } from 'react'

function Title(props) {
  const [title, setTitle] = useState('React StopWatch!')
  const [showEdit, setShowEdit] = useState(true)

  // toggle visibility
  const changeTitle = () => {
    setShowEdit(!showEdit)
  }

  const editTitle = (e) => {
    setTitle(e.target.value)
  }

  const saveTitle = (e) => {
    if (e.key === 'Enter') setShowEdit(!showEdit)
  }

  const saveOnBlur = () => {
    setShowEdit(!showEdit)
  }

  return (
    <div className="header">
      {showEdit ? (
        <h2 className="head-text" onClick={changeTitle}>
          {title} <span className="edit">⚙️</span>
        </h2>
      ) : (
        <input
          type="text"
          className="control"
          onChange={(e) => editTitle(e)}
          onKeyPress={(e) => saveTitle(e)}
          onBlur={saveOnBlur}
          value={title}
        />
      )}
    </div>
  )
}

export default Title
