import { combineReducers } from 'redux';

// Reducers

// Return All Songs
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' },
  ];
};

// Return selected song
const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// Store holding all the reducers
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
