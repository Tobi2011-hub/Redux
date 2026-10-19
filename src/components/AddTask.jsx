import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/tasksSlice.js'

function AddTask() {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedDescription = description.trim()
    if (!trimmedDescription) return

    dispatch(addTask(trimmedDescription))
    setDescription('')
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="new-task">What would you like to do?</label>
      <span className="add-task-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
      <input
        id="new-task"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="What would you like to do?"
        maxLength={160}
      />
      <button type="submit" disabled={!description.trim()}>
        Add task
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10h12M10 4l6 6-6 6" />
        </svg>
      </button>
    </form>
  )
}

export default AddTask
