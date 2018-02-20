import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        //<Track name={this.props.tracks} />
        {
          this.props.tracks.map(track => {
            return <Track track={track} key={track.id} />;
          })
        }
      </div>
    );
  }
}
/*
TrackList.propTypes = {
  tracks: React.PropTypes.object
}
*/
export default TrackList;
