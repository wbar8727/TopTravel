import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_DATA,
  FETCH_BANNERS,
  FETCH_DESTINATIONS,
  FETCH_REVIEWERS
} from '../actions/index'



export const data = (state = {
  items: '',
}, action) => {
  switch (action.type){
    case `${FETCH_DATA}`: 
      return {
        ...state,
        items: 'This is data from redux'
      }

    default: 
      return state
  }
}



export const banners = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type){
    case `${FETCH_BANNERS}_PENDING`:
      return {
        ...state,
        isFetching: true
      }

    case `${FETCH_BANNERS}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        items: action.payload.data
      }

    case `${FETCH_BANNERS}_REJECTED`:
      return {
        ...state
      }

    default:
      return state
  }
}


export const destinations = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type){
    case `${FETCH_DESTINATIONS}_PENDING`:
      return {
        ...state,
        isFetching: true
      }

    case `${FETCH_DESTINATIONS}_FULFILLED`:
      return {
        ...state,
        items: action.payload.data
      }

    case `${FETCH_DESTINATIONS}_REJECTED`:
      return {
        ...state
      }

    default:
      return state
  }
}

export const reviewers = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type){
    case `${FETCH_REVIEWERS}_PENDING`:
      return {
        ...state,
        isFetching: true
      }

    case `${FETCH_REVIEWERS}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        items: action.payload.data
      }

    case `${FETCH_REVIEWERS}_REJECTED`:
      return {
        ...state
      }

    default:
      return state
  }
}


const rootReducer = combineReducers({
  data,
  banners,
  destinations,
  reviewers
})

export default rootReducer
