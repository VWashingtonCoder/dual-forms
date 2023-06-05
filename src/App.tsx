import { useState, MouseEvent } from "react";
import "./App.css";
import { MovieFormType, MusicFormType, FormElementType } from "./GlobalTypes";
import Form from "./components/Form/Form";
import Confirmation from "./components/Confirmation/Confimation";

type AppStatesType = {
  movieForm: MovieFormType;
  musicForm: MusicFormType;
  finishForm: {
    movies: boolean;
    music: boolean;
  };
};

type FormElementsGroupType = {
  [movies:string]: FormElementType[];
  music: FormElementType[]; 
}

const state: AppStatesType = {
  movieForm: {
    actor: "",
    genre: "",
    title: "",
  },
  musicForm: {
    album: "",
    artist: "",
    genre: "",
    song: "",
  },
  finishForm: {
    movies: false,
    music: false,
  },
};

const formElements: FormElementsGroupType = {
  movies: [
    { key: "movies-actor", label: "Actor", name: "actor", type: "text" },
    { key: "movies-genre", label: "Genre", name: "genre", type: "text" },
    { key: "movies-title", label: "Title", name: "title", type: "text" },
  ],
  music: [
    { key: "music-album", label: "Album", name: "album", type: "text" },
    { key: "music-artist", label: "Artist", name: "artist", type: "text" },
    { key: "music-genre", label: "Genre", name: "genre", type: "text" },
    { key: "music-song", label: "Song", name: "song", type: "text" },
  ]
}

function App() {
  const [movieFormValues, setMovieFormValues] = useState(state.movieForm);
  const [musicFormValues, setMusicFormValues] = useState(state.musicForm);
  const [finishForm, setFinishForm] = useState(state.finishForm);

  const updateFormValues = (e: {
    target: { className: string; name: string; value: string };
  }) => {
    const { className, name, value } = e.target;
    className.includes("movie")
      ? setMovieFormValues({ ...movieFormValues, [name]: value })
      : setMusicFormValues({ ...musicFormValues, [name]: value });
  };

  const updateFinishForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.value === "movies"
      ? setFinishForm({ ...finishForm, movies: true })
      : setFinishForm({ ...finishForm, music: true });
  };

  return (
    <>
      <h1 className="site-title">User Interest Surveys</h1>
      <div className="user-interest-surveys">
        <div className="form-confirm movie">
          {finishForm.movies === false ? (
            <Form
              formKey={`movies`}
              formValues={movieFormValues}
              inputs={formElements.movies}
              submit={updateFinishForm}
              updateValues={updateFormValues}
            />
          ) : (
            <Confirmation 
              formKey={"movies"} 
              formValues={movieFormValues} 
              labels={formElements.movies}
            />
          )}
        </div>
        <div className="form-confirm music">
          {finishForm.music === false ? (
            <Form
              formKey={`music`}
              formValues={movieFormValues}
              inputs={formElements.music}
              submit={updateFinishForm}
              updateValues={updateFormValues}
            />
          ) : (
            <Confirmation 
              formKey={"music"} 
              formValues={musicFormValues} 
              labels={formElements.music}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
