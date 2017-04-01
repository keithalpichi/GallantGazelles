import axios from 'axios';
import { completeSignIn, signInError } from './user';

const requestPitches = () => {
  return {
    type: 'REQUEST_PITCHES',
  }
}

const receivePitches = (json) => {
  return {
    type: 'RECEIVE_PITCHES',
    pitches: json.data
  }
}

const receiveBothCategoryPitches = (json) => {
  return {
    type: 'RECEIVE_BOTH_CATEGORY_PITCHES',
    pitches: json.data
  }
}

const receiveTrendingPitches = (json) => {
  return {
    type: 'RECEIVE_TRENDING_PITCHES',
    pitches: json.data
  }
}

const errorPitches = (err) => {
  return {
    type: 'REQUEST_PITCHES_ERROR',
    error: err
  }
}
export function fetchPitches(category = 'all') {
  return function(dispatch) {
    dispatch(requestPitches());
    //We can possibly define categories here?
    axios.get('http://localhost:8080/api/pitches?q=all')
    .then(results => dispatch(receivePitches(results)))
    .catch(error => dispatch(errorPitches(error)))
  }
}

export function fetchBothCategoryPitches(category = 'both') {
  return function(dispatch) {
    dispatch(requestPitches());
    //We can possibly define categories here?
    axios.get('http://localhost:8080/api/pitches?q=both')
    .then(results => dispatch(receivePitches(results)))
    .catch(error => dispatch(errorPitches(error)))
  }
}

export function fetchTopPitches(category = 'top') {
  return function(dispatch) {
    dispatch(requestPitches());
    axios.get('http://localhost:8080/api/pitches?q=top')
    .then(results => dispatch(receivePitches(results)))
    .catch(error => dispatch(errorPitches(error)))
  }
}

export function fetchTrendingPitches(category = 'trending') {
  return function(dispatch) {
    dispatch(requestPitches());
    axios.get('http://localhost:8080/api/pitches?q=trending')
    .then(results => dispatch(receiveTrendingPitches(results)))
    .catch(error => dispatch(errorPitches(error)))
  }
}

export function selectPitch (pitchId) {
  return {
    type: 'SELECT_PITCH',
    pitchId
  }
}

export function nextPitch() {
  return {
    type: 'NEXT_PITCH'
  }
}

export function previousPitch() {
  return {
    type: 'PREV_PITCH'
  }
}

function upvoteToggle() {
  return {
    type: 'UPVOTE_TOGGLE'
  }
}
export function upvote(user_id, pitch_id, vote) {
  return function(dispatch) {
    dispatch(upvoteToggle())
    let vote_value = vote === 1 ? 0 : 1;
    console.log(vote_value)
    axios.put('http://localhost:8080/api/votes', { user_id, pitch_id, vote_value })
    .then(results => console.log(results))
    .catch(error => console.error(error))
  }
}

function downvoteToggle() {
  return {
    type: 'DOWNVOTE_TOGGLE'
  }
}
export function downvote(user_id, pitch_id, vote) {
  return function(dispatch) {
    dispatch(downvoteToggle())
    let vote_value = vote === - 1 ? 0 : -1;
    console.log(vote_value)
    axios.put('http://localhost:8080/api/votes', { user_id, pitch_id, vote_value })
    .then(results => console.log(results))
    .catch(error => console.error(error))
  }
}
