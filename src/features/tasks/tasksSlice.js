import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    filter: 'all',
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload)
      },
      prepare(description) {
        return {
          payload: {
            id: crypto.randomUUID(),
            description,
            isDone: false,
          },
        }
      },
    },
    toggleTask(state, action) {
      const task = state.items.find((item) => item.id === action.payload)
      if (task) task.isDone = !task.isDone
    },
    editTask(state, action) {
      const task = state.items.find((item) => item.id === action.payload.id)
      if (task) task.description = action.payload.description
    },
    setTaskFilter(state, action) {
      state.filter = action.payload
    },
  },
})

export const { addTask, toggleTask, editTask, setTaskFilter } = tasksSlice.actions
export default tasksSlice.reducer
