import { MouseEvent } from "react";
import {
  MovieFormType,
  MusicFormType,
  FormElementType,
} from "../../GlobalTypes";
import InputBase from "../InputBase/InputBase";

type FormPropsType = {
  formKey: string;
  formValues: MovieFormType | MusicFormType;
  inputs: FormElementType[];
  submit: (e: MouseEvent<HTMLButtonElement>) => void;
  updateValues: (e: {
    target: {
      className: string;
      name: string;
      value: string;
    };
  }) => void;
};

export default function Form(props: FormPropsType) {
  const { formKey, formValues, inputs, submit, updateValues } = props;

  return (
    <form className={`survey-form ${formKey}`}>
      {inputs.map((input) => {
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
