import { MouseEvent } from "react";
import { MovieFormType, MusicFormType } from "../../GlobalTypes";
import InputBase from "../InputBase/InputBase";

type FormInputType = {
  key: string;
  label: string;
  name: string;
  type: string;
};

type FormInputsGroupType = {
  [movies: string]: FormInputType[];
  music: FormInputType[];
};

type FormPropsType = {
  formKey: string;
  formValues: MovieFormType | MusicFormType;
  submit: (e: MouseEvent<HTMLButtonElement>) => void;
  updateValues: (
    e: { target: { 
        className: string, 
        name: string; 
        value: string 
    }},
  ) => void;
};

const formInputs: FormInputsGroupType = {
  movies: [
    { key: "movie-actor", label: "Movie Actor", name: "actor", type: "text" },
    { key: "movie-genre", label: "Movie Genre", name: "genre", type: "text" },
    { key: "movie-title", label: "Movie Title", name: "title", type: "text" },
  ],
  music: [
    { key: "music-album", label: "Album", name: "album", type: "text" },
    { key: "music-artist", label: "Artist", name: "artist", type: "text" },
    { key: "music-genre", label: "Genre", name: "genre", type: "text" },
    { key: "music-song", label: "Song", name: "song", type: "text" },
  ],
};

export default function Form(props: FormPropsType) {
  const { formKey, formValues, submit, updateValues } = props;
  
  return (
    <form className={`survey-form ${formKey}`}>
        {formInputs[formKey].map(input => {
            const { key, label, name, type } = input;
           
            return (
                <InputBase 
                    key={key} 
                    inputKey={key}
                    label={label}
                    name={name}
                    type={type} 
                    update={updateValues}
                    value={formValues[name]}
                />
            );
        })}
        <button 
            className={`submit-btn ${formKey}`}
            onClick={submit}
            value={formKey}
        >
            Submit
        </button>
    </form>
  );
}
