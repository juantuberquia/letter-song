import React, { useState, useEffect, Fragment } from "react";
import Form from "./components/Form";
import Song from "./components/Song";
import Singer from "./components/Singer";

function App() {
  const [data, setData] = useState({ song: "", artist: "" });
  const [errorLetter, setErrorLetter] = useState(false);
  const [saveLyrics, setSaveLyrics] = useState("");
  const [saveBiography, setSaveBiography] = useState("");

  useEffect(() => {
    if (data.song === "" || data.artist === "") {
      return null;
    } else {
      const getData = async () => {
        const { song, artist } = data;

        const urlSong = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        const urlSinger = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

        const resSinger = await fetch(urlSinger);
        const responseSinger = await resSinger.json();

        const resSong = await fetch(urlSong);
        const responseSong = await resSong.json();

        setSaveLyrics(responseSong.lyrics);
        setSaveBiography(responseSinger.artists[0]);

        //  valida estado respuesta
        if (responseSong.status === 400) {
          setErrorLetter(true);
        } else {
          setErrorLetter(false);
        }
      };

      getData();
    }
  }, [data.song, data.artist, data]);

  return (
    <Fragment>
      <Form setData={setData} errorLetter={errorLetter} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Singer saveBiography={saveBiography} />
          </div>
          <div className="col-md-6">
            <Song saveLyrics={saveLyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
