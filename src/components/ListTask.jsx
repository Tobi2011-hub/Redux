import { useDispatch, useSelector } from 'react-redux'
import { setTaskFilter } from '../features/tasks/tasksSlice.js'
import Task from './Task.jsx'

const filters = [
  { value: 'all', label: 'All tasks' },
  { value: 'active', label: 'To do' },
  { value: 'completed', label: 'Completed' },
]

function ListTask() {
  const dispatch = useDispatch()
  const { items, filter } = useSelector((state) => state.tasks)
  const visibleTasks = items.filter((task) => {
    if (filter === 'active') return !task.isDone
    if (filter === 'completed') return task.isDone
    return true
  })

  return (
    <section className="task-list-section" aria-label="Task list">
      <div className="task-list-header">
        <div>
          <h3>Your list <span className="task-total">{items.length}</span></h3>
          <p>A gentle plan for the day ahead</p>
        </div>
        <div className="task-filters" role="group" aria-label="Filter tasks">
          {filters.map((option) => (
            <button
              key={option.value}
              className={filter === option.value ? 'filter-button filter-button-active' : 'filter-button'}
              type="button"
              aria-pressed={filter === option.value}
              onClick={() => dispatch(setTaskFilter(option.value))}
            >
              {option.label}
              {option.value === 'active' && <span className="filter-count">{items.filter((task) => !task.isDone).length}</span>}
            </button>
          ))}
        </div>
      </div>

      {visibleTasks.length > 0 ? (
        <ul className="task-list">
          {visibleTasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <span className="empty-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M13 24.5 20 31l15-15" />
              <circle cx="24" cy="24" r="19" />
            </svg>
          </span>
          <h4>{items.length === 0 ? 'A little space to begin.' : 'Nothing here for now.'}</h4>
          <p>
            {items.length === 0
              ? 'Add a task above and take your first small step.'
              : filter === 'active'
                ? 'All caught up. Enjoy this moment.'
                : 'Finish a task and it will find its way here.'}
          </p>
        </div>
      )}

      <div className="list-footer">
        <span><i className="footer-check" /> Progress over perfection</span>
        <span>{items.length} {items.length === 1 ? 'task' : 'tasks'} in your day</span>
      </div>
    </section>
  )
}

export default ListTask
