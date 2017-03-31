import React from 'react';
import TrendingVideoCard from './TrendingVideoCard.jsx'
import { Card, Divider, Grid, Header, Icon, Image } from 'semantic-ui-react';
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

const TrendingVideos = (props) => {
  if (props.pitches.length > 0) {
    return (
      <section>
        <Divider horizontal>
          <Header as='h4'>
            <Icon name='line chart' />
            Trending Pitches
          </Header>
        </Divider>
        <Divider hidden />
        {renderColumns(props.pitches, 3)}
      </section>
    )
  } else {
    return (
      <div>NOPE!</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pitches: state.pitches.pitches
  }
}

export default connect(mapStateToProps)(TrendingVideos)
