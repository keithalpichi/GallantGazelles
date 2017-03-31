const initialState = {
  pitch: {},
  isFetchingPitch: false,
  isFollowing: false
}

function pitchPage (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_PITCH_PAGE':
      return {
        ...state,
        isFetchingPitch: true
      }
    case 'TOGGLE_ISFOLLOWING':
      return {
        ...state,
        isFollowing: action.isFollowing
      }
    default:
      return state;
  }
}
export default pitchPage;