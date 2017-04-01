import React, { Component } from 'react';
import Video from './Video.jsx';
import MainPitchInfo from './MainPitchInfo.jsx';
import TrendingVideos from './TrendingVideos.jsx';
import axios from 'axios';
import { Container, Dimmer, Divider, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchBothCategoryPitches } from '../actions/pitch';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(fetchBothCategoryPitches())
  }

  render() {
    if (this.props.mainPitch.video) {
      return (
        <section>
          <Video video={this.props.mainPitch.video}/>
          <Divider hidden />
          <MainPitchInfo />
          <Divider hidden />
          <TrendingVideos />
        </section>
      )
    } else {
      return (
        <Container>
          <Dimmer active inverted>
            <Loader size='large'>Loading</Loader>
          </Dimmer>
          LOADING
        </Container>
      )
    }
  }
}

const mapStateToProps = (state) => {
  console.log('App.js ', state);
  return {
    topPitches: state.pitches.topPitches,
    trendingPitches: state.pitches.trendingPitches ? state.pitches.trendingPitches : null,
    mainPitch: state.pitches.mainPitch
  }
}


export default connect(mapStateToProps)(App);
