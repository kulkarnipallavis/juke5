import React, {Component} from 'react';
import store from '../store';
import Stations from '../components/Stations';
import {connect} from 'react-redux';

const convertStationsToSongs = (songsArray) =>{
	const stations = {};
    songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
}

const mapStateToProps = (state) => {
	console.dir(state);
	return {
		stations : convertStationsToSongs(state.songs)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);