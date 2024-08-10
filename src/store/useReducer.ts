import { ActionProps, StateProps } from "../components/todo/TodoTypes"
  
export const todoReducer = (state: StateProps, action: ActionProps): StateProps => {
    switch (action.type) {
      case 'ADD_TODO': {
        return { 
          ...state,
          list: [...state.list, action.payload]
        }
      }
      case 'DELETE_TODO': {
        return {
          ...state,
          list: state.list.filter((_: any, idx: number) => action.payload.index !== idx)
        }
      }
      case 'UPDATE_TODO': {
        return {
          ...state,
          list: state.list.map((item: any, idx: number) => action.payload.index === idx ? {...item, [action.payload.key]: action.payload.value} : item)
        }
      }
      default: {
        return state
      }
    }
  }