import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

// Reducers specifiy how the application's state changes
// in response to actions sent to the store

// Actions are payloads of information that send data from your application
// to your store

// Provider makes the Redux store avilable to any nested components that have
// wrapped in the connect() function

// Connect function connects a React component to a Redux store

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: '10px' }}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
