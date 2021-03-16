import React from "react";

const Singer = ({ saveBiography }) => {
  if (Object.keys(saveBiography).length === 0) {
    return null;
  }
  const { strArtistThumb, strBiographyEN } = saveBiography;

  return (
    <div className="card border-light">
      <h2> Biografia </h2>
      <div className="card-body">
        <img src={strArtistThumb} alt="artist-logo"></img>
        <p className="card-text"> {strBiographyEN} </p>
        <p className="card-text">
          <a
            href={`https://${saveBiography.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${saveBiography.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${saveBiography.strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Singer;
