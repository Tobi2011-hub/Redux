# Daywell

A small, mindful to-do app built with React, Redux Toolkit, and Vite. Add tasks,
mark them done, edit their descriptions, and filter the list by status.

## Run locally

```sh
npm install
npm run dev
```

## Other commands

- `npm run build` creates the production build in `dist/`.
- `npm run lint` checks the source with ESLint.

## Task state

Redux Toolkit manages the task list and selected filter. Each task has an
`id`, a `description`, and an `isDone` flag. Tasks are held in memory and reset
when the page is refreshed.
