import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
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
export default connect(mapStateToProps)(SongList);
