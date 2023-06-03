import { useState, MouseEvent } from "react";
import "./App.css";
import { MovieFormType, MusicFormType } from "./GlobalTypes";
import Form from "./components/Form/Form";

type AppStatesType = {
  movieForm: MovieFormType;
  musicForm: MusicFormType;
  finishForm: {
    movies: boolean;
    music: boolean;
  };
};

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
              submit={updateFinishForm}
              updateValues={updateFormValues}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="form-confirm music">
          {finishForm.music === false ? (
            <Form
              formKey={`music`}
              formValues={movieFormValues}
              submit={updateFinishForm}
              updateValues={updateFormValues}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
