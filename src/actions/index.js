// Action Creator
export const selectSong = (song) => {
  // Return an action, type = require, payload = optional
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
