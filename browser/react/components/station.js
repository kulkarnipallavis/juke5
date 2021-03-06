import React from 'react';
import Songs from './Songs';

// const DUMMY_GENRE_NAME = 'Jazz';
// const DUMMY_SONGS = [{
//   id: 1,
//   name: "A Love Supreme",
//   genre: "Jazz",
//   artists: [{ name: "John Coltrane" }]
// }];
// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () {};

// export default function (props) {
//   return (
//     <div>
//       <h3>{ DUMMY_GENRE_NAME } Station</h3>
//       <Songs 
//         songs={DUMMY_SONGS} 
//         currentSong={DUMMY_CURRENT_SONG} 
//         isPlaying={DUMMY_IS_PLAYING} 
//         toggleOne={DUMMY_TOGGLE_ONE}
//       />
//     </div>
//   );
// }

export default function (props) {
  console.log("station props", props);
  const genreName = props.genreName;
  const songs = props.songs;
  const isPlaying = props.isPlaying;
  const currentSong = props.currentSong;
  const toggleOne = props.toggleOne;

  return (
    <div>
      <h3>{ genreName } Station</h3>
      <Songs
        songs={songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne}
      />
    </div>
  );
}