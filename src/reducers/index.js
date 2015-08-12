import { GETAPPLICATIONSETTINGS } from '../actions/';

let initialState = [];

export function items(state = initialState, action) {
  let newState = [...state];

  switch (action.type) {
    
    case 'ADD':
      newState.push({text: action.text, numb: newState.length + 1});
      return newState;

    case 'DELETE':
      newState.pop();
      return newState;

    default:
      return state;
  }
}

// import applicationData from './Application.js';
let applicationData = 'app data'
export function application(state = applicationData, action) {
  let newState = {...state};

  switch (action.type) {

    case 'GETAPPLICATIONSETTINGS':
      return newState;

    default:
      return newState;
    }
}