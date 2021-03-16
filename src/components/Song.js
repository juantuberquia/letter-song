import React, { Fragment } from "react";

const Song = ({ saveLyrics }) => {
  if (Object.keys(saveLyrics).length === 0) {
    return null;
  }
  return (
    <Fragment>
      <h2> Letra cancion </h2>
      <p className="letra"> {saveLyrics} </p>
    </Fragment>
  );
};

export default Song;
