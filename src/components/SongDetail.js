import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  renderitem = () => {
    if (!this.props.song) {
      return <h3>Select a song</h3>;
    }
    return (
      <div>
        <h3>Song details for:</h3>
        <p>
          Title: <b>{this.props.song.title}</b>
          <br />
          Duration: {this.props.song.duration}
        </p>
      </div>
    );
  };
  render() {
    return <div>{this.renderitem()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
