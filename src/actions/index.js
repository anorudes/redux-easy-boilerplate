/*
 * action types
 */

export function add() {
  return {
    type: 'ADD'
  };
}

export function del() {
  return {
    type: 'DELETE'
  };
}

export function getApplicationSettings() {
  return {
    type: 'GETAPPLICATIONSETTINGS',
  };
}
