import { statusFilters } from './constants';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from './actions';
const tasksInitialState = [];

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteTask]: (state, action) => {
    return state.filter(task => task.id !== action.payload);
  },
  [toggleCompleted]: (state, action) => {
    return state.map(task => {
      if (task.id !== action.payload) {
        return task;
      }
      return {
        ...task,
        completed: !task.completed,
      };
    });
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  },
});

//Immer

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     // ✅ Immer замінить це на операцію оновлення
//     state.push(action.payload);
//   },
//   [deleteTask]: (state, action) => {
//     // ✅ Immer замінить це на операцію оновлення
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
//   [toggleCompleted]: (state, action) => {
//     // ✅ Immer замінить це на операцію оновлення
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//       }
//     }
//   },
// });
// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     // ✅ Immer замінить це на операцію оновлення
//     state.status = action.payload;
//   },
// });
