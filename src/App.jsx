import { useSelector } from 'react-redux'
import AddTask from './components/AddTask.jsx'
import ListTask from './components/ListTask.jsx'
import './App.css'

function App() {
  const tasks = useSelector((state) => state.tasks.items)
  const completedCount = tasks.filter((task) => task.isDone).length
  const remainingCount = tasks.length - completedCount
  const progress = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Daywell home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 3.5v25M3.5 16h25" />
              <circle cx="16" cy="16" r="12.5" />
            </svg>
          </span>
          <span>daywell<span className="brand-period">.</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a className="nav-link nav-link-active" href="#tasks">My day</a>
          <span className="header-note">A little progress, every day.</span>
        </nav>
        <a className="header-avatar" href="#tasks" aria-label="Go to your tasks">D</a>
      </header>

      <main id="home">
        <section className="welcome-section" aria-labelledby="welcome-heading">
          <div className="welcome-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> YOUR SPACE TO GROW</p>
            <h1 id="welcome-heading">Make room for<br />what <em>matters.</em></h1>
            <p className="welcome-description">
              One thing at a time. Gather your thoughts, find your focus, and make today your own.
            </p>
            <a className="welcome-cta" href="#tasks">
              See your tasks
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M10 4l6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="welcome-art" aria-hidden="true">
            <div className="sun-disc" />
            <div className="art-leaf art-leaf-one" />
            <div className="art-leaf art-leaf-two" />
            <div className="art-stem" />
            <div className="quote-card">
              <span className="quote-mark">“</span>
              <p>Small steps<br />still move you<br /><em>forward.</em></p>
              <span className="quote-spark">✳</span>
            </div>
            <span className="art-dot art-dot-one" />
            <span className="art-dot art-dot-two" />
          </div>
          <div className="hero-caption"><span /> A FRESH START, ANY DAY</div>
        </section>

        <section className="task-section" id="tasks" aria-labelledby="tasks-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">YOUR PERSONAL CHECK-IN</p>
              <h2 id="tasks-heading">Today, at your pace<span className="heading-period">.</span></h2>
            </div>
            <div className="date-note">
              <span className="date-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
                  <path d="M7.5 3.5v4M16.5 3.5v4M3.5 10h17" />
                </svg>
              </span>
              <span>{new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date())}</span>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="task-board">
              <AddTask />
              <ListTask />
            </div>

            <aside className="progress-card" aria-label="Your progress">
              <div className="progress-card-top">
                <span className="progress-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 20s-7.5-4.4-7.5-10A4.1 4.1 0 0 1 12 7.8 4.1 4.1 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z" />
                    <path d="m9.5 12.3 1.7 1.7 3.5-3.7" />
                  </svg>
                </span>
                <span className="progress-kicker">A MOMENT FOR YOU</span>
              </div>
              <h3>Look how far<br />you’ve come.</h3>
              <p className="progress-description">
                Every little thing you finish is a promise kept to yourself.
              </p>
              <div
                className="progress-ring"
                style={{ '--progress': `${progress}%` }}
                role="img"
                aria-label={`${progress}% of tasks completed`}
              >
                <span>{progress}<small>%</small></span>
              </div>
              <p className="progress-count">
                {remainingCount === 0 && tasks.length > 0
                  ? 'You’ve done everything on your list.'
                  : `${remainingCount} ${remainingCount === 1 ? 'thing' : 'things'} left to do`}
              </p>
              <div className="progress-divider" />
              <div className="progress-legend">
                <span><i className="legend-dot legend-done" /> Done</span>
                <strong>{completedCount}</strong>
              </div>
              <div className="progress-legend">
                <span><i className="legend-dot legend-todo" /> Still to do</span>
                <strong>{remainingCount}</strong>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Take it one step at a time.</span>
        <span>MADE FOR A MORE MINDFUL DAY <i>✳</i></span>
      </footer>
    </div>
  )
}

export default App
