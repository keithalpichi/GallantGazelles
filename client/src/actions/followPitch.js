import axios from 'axios';

function pitchFollowToggleSuccessful(results) { //shows if user is following the pitch
  return {
    type: 'TOGGLE_FOLLOW',
    results
  }
}

function pitchFollowError(error) {
  type: 'FOLLOW_ERROR',
  error
}

export function followPitch(userid, pitchid) {
  return (dispatch) => {
    axios.post('http://localhost:8080/api/followers', {userid, pitchid} )
    .then(results => dispatch(pitchFollowSuccessful(results)))
    .catch(error => dispatch(pitchFollowError(error)))
  }
}