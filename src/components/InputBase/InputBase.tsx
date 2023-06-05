type InputPropsType = {
  inputKey: string;
  label: string;
  name: string;
  type: string;
  update: (e: {
    target: {
      className: string;
      name: string;
      value: string;
    };
  }) => void;
  value: string;
};

export default function InputBase(props: InputPropsType) {
  const { inputKey, label, name, type, update, value } = props;
  const form = inputKey.includes("movies") ? "Movies" : "Music";
  return (
    <div className="input-base">
      <label htmlFor={name} className="input-label">
        Favorite {form} {label}
      </label>
      <input
        className={`form-input ${inputKey}`}
        name={name}
        type={type}
        onChange={update}
        value={value}
      />
    </div>
  );
}
