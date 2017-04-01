const pitchCategory = (state='top', action) => {
  switch (action.type) {
    case 'TRENDING_PITCH':
      return 'trending'
    case 'TOP_PITCH':
      return 'top'
    default:
      return state
  }
}

export default pitchCategory
