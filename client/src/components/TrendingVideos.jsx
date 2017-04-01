import React from 'react';
import TrendingVideoCard from './TrendingVideoCard.jsx'
import { Card, Divider, Grid, Header, Icon, Image, Menu, Segment } from 'semantic-ui-react';
import { setPitchCategoryToTop, setPitchCategoryToTrending } from '../actions/pitchCategory'
import { connect } from 'react-redux';

const renderColumns = (array, columnAmount) => {
  let map = []
  let leftOverIndex = null
  for (var i = 0; i < array.length; i += columnAmount) {
    let innerArray = []
    for (var j = i; j < columnAmount; j++) {
      let innerItem = array[j]
      innerArray.push(innerItem)
    }
    if (innerArray.length > 0) { map.push(innerArray) }
    if (i + columnAmount >= array.length) {
      leftOverIndex = i
    }
  }
  if (leftOverIndex) {
    map.push(array.slice(leftOverIndex))
  }
  return <Grid container padded columns={columnAmount}>
    {map.map((col, i) => {
      return <Grid.Row key={i}>
        {col.map((pitch, j) => (
          <Grid.Column key={j}>
            <TrendingVideoCard pitch={pitch} />
          </Grid.Column>
      ))}
    </Grid.Row>
  })}
  </Grid>
}

class TrendingVideos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <Divider horizontal>
          <Header as='h4'>
            <Icon name='line chart' />
            {this.props.pitchCategory[0].toUpperCase() + this.props.pitchCategory.slice(1)} Pitches
          </Header>
        </Divider>
        <Divider hidden />
        <Menu attached='top'>
          <Menu.Item name='trending' active={this.props.pitchCategory === 'trending'} onClick={this.props.setPitchCategoryToTrending} />
          <Menu.Item name='top' active={this.props.pitchCategory === 'top'} onClick={this.props.setPitchCategoryToTop} />
        </Menu>
        <Segment attached='bottom'>
          {this.props.pitches.length > 0 ? renderColumns(this.props.pitches, 3) : <div>There is currently no {this.props.pitchCategory} pitches.</div>}
        </Segment>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pitches: state.pitchCategory === 'top' ? state.pitches.topPitches : state.pitches.trendingPitches,
    pitchCategory: state.pitchCategory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPitchCategoryToTop: () => dispatch(setPitchCategoryToTop()),
    setPitchCategoryToTrending: () => dispatch(setPitchCategoryToTrending())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingVideos)
