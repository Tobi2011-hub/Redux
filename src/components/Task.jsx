import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask, toggleTask } from '../features/tasks/tasksSlice.js'

function Task({ task, index }) {
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState(task.description)
  const dispatch = useDispatch()

  function handleSave(event) {
    event.preventDefault()
    const trimmedDescription = description.trim()
    if (!trimmedDescription) return

    dispatch(editTask({ id: task.id, description: trimmedDescription }))
    setIsEditing(false)
  }

  function handleCancel() {
    setDescription(task.description)
    setIsEditing(false)
  }

  return (
    <li className={`task-item${task.isDone ? ' task-item-done' : ''}`}>
      <button
        className="task-checkbox"
        type="button"
        aria-label={task.isDone ? `Mark "${task.description}" as not done` : `Mark "${task.description}" as done`}
        aria-pressed={task.isDone}
        onClick={() => dispatch(toggleTask(task.id))}
      >
        {task.isDone && (
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m3.5 8 3 3 6-6" />
          </svg>
        )}
      </button>

      {isEditing ? (
        <form className="edit-task-form" onSubmit={handleSave}>
          <label className="visually-hidden" htmlFor={`edit-task-${task.id}`}>Edit task</label>
          <input
            id={`edit-task-${task.id}`}
            autoFocus
            maxLength={160}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button type="submit" disabled={!description.trim()}>Save</button>
          <button type="button" className="edit-cancel" onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <>
          <span className="task-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="task-description">{task.description}</span>
          <button
            className="task-edit"
            type="button"
            aria-label={`Edit "${task.description}"`}
            onClick={() => setIsEditing(true)}
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="m13.7 4.3 2 2M4 16l3.8-.8L16 7a1.4 1.4 0 0 0-2-2l-8.2 8.2L5 17Z" />
            </svg>
          </button>
        </>
      )}
    </li>
  )
}

export default Task
