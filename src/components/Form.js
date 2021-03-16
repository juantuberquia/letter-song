import React, { useState } from "react";
import Error from "./Error";
import ErrorLetter from "./ErrorLetter";

const Form = ({ setData, errorLetter }) => {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [error, setError] = useState(false);

  const stateArtist = (e) => {
    setArtist(e.target.value);
  };

  const stateSong = (e) => {
    setSong(e.target.value);
  };

  const validate = (e) => {
    e.preventDefault();

    if (song.trim() === "" || artist.trim() === "") {
      setError(true);
    } else {
      setError(false);
      setData({
        song,
        artist,
      });
    }
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-while bg-transparent mb-5 pt-5 pb-2"
            onSubmit={validate}
          >
            <fieldset>
              <legend className="text-center">
                Buscador Letras canciones{" "}
              </legend>
              {error ? <Error message="Ingresar busqueda" /> : null}
              {errorLetter ? (
                <ErrorLetter message="letra no encontrada" />
              ) : null}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label> Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Nombre Artista"
                      onChange={stateArtist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label> Cancion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Nombre Cancion"
                      onChange={stateSong}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
