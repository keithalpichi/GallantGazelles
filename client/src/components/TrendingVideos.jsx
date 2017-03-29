import React from 'react';
import TrendingVideoCard from './TrendingVideoCard.jsx'
import { Card, Divider, Grid, Header, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
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

        <Grid container padded columns={3}>
          <Grid.Row>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[0]} />
            </Grid.Column>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[0]} />
            </Grid.Column>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[0]} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[0]} />
            </Grid.Column>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[0]} />
            </Grid.Column>
            <Grid.Column>
              <TrendingVideoCard pitch={props.pitches[0]} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
