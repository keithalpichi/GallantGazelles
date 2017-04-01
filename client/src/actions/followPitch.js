import axios from 'axios';

function toggleFollow() { //shows if user is following the pitch
  return {
    type: 'TOGGLE_FOLLOW',
  }
}

function toggleFollowPitch(isFollowing) { //shows if user is following the pitch
  return {
    type: 'TOGGLE_ISFOLLOWING',
    isFollowing
  }
}

function pitchFollowError(error) {
  return {
    type: 'FOLLOW_ERROR',
    error
  }
}

export function isFollowingPitch(userId, pitchId) {
  return (dispatch) => {
    dispatch(toggleFollow())
    axios.get('http://localhost:8080/api/following', {
      params: {
        userId: userId,
        pitchId: pitchId
      }
    })
    .then(results => {
      if (results.data.length === 0) {
        dispatch(toggleFollowPitch(false))
      } else {
        dispatch(toggleFollowPitch(true))
      }
    })
    .catch(error => dispatch(pitchFollowError(error)))
  }
}

export function followPitch(userId, pitchId) {
  return (dispatch) => {
    dispatch(toggleFollow())
    axios.post('http://localhost:8080/api/followers', {userId, pitchId} )
    .then(results => dispatch(toggleFollowPitch(true)))
    .catch(error => dispatch(pitchFollowError(error)))
  }
}

export function unfollowPitch(userId, pitchId) {
  return (dispatch) => {
    dispatch(toggleFollow())
    axios.delete('http://localhost:8080/api/followers', {
      params: {
        userId: userId,
        pitchId: pitchId
      }
    })
    .then(results => dispatch(toggleFollowPitch(false)))
    .catch(error => dispatch(pitchFollowError(error)))
  }
}