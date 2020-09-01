import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// mapStateToProps is used for selecting the
// part of the data from the store that the connected component needs
// State becomes props for component
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// Double '()', return a function, invokes the return function
// Config connect with mapStateToProps
// Second argument is object with action creators
// Returned action from action creators is sent to redux dispatch
export default connect(mapStateToProps, { selectSong })(SongList);
